import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
});
const base = process.argv[2];
const yilan2004 = { year: 2004, name: '宜蘭縣外海地震', mag: 'M7.1', before: 530 };
const cases = [
  { width: 1280, height: 800, events: [
    yilan2004,
    { year: 2024, name: '0403 花蓮地震', mag: 'M7.2', before: 150 },
    { year: 2025, name: '宜蘭縣外海地震', mag: 'M7.0', before: 675 },
  ] },
  { width: 768, height: 800, events: [yilan2004, { ...yilan2004, rank: true }] },
  { width: 1920, height: 1080, plates: true, events: [yilan2004] },
  { width: 390, height: 844, events: [yilan2004] },
];

async function checkEvent(page, viewport, event) {
  await page.evaluate(({ year, rank, name, mag }) => {
    const play = document.getElementById('play');
    const slider = document.getElementById('year');
    if (window.__state().playing) play.click();
    if (rank && !window.__state().rankOpen) document.getElementById('rankBtn').click();
    slider.value = year;
    slider.dispatchEvent(new Event('input'));

    const toast = document.getElementById('m7toast');
    const text = document.getElementById('m7toastText');
    const overlaps = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
    const visible = el => {
      const style = getComputedStyle(el);
      return style.visibility === 'visible' && style.display !== 'none' && +style.opacity > 0;
    };
    const slideStyle = getComputedStyle(text);
    const startsAbove = new DOMMatrix(slideStyle.transform).m42 < 0;
    const transitionsTransform = slideStyle.transitionProperty === 'transform' && parseFloat(slideStyle.transitionDuration) > 0;
    const report = { shown: 0, startsAbove, transitionsTransform, settles: false, largestDrop: 0, epicenter: false, plate: false, label: false, failures: [] };
    window.__m7TestReport = report;
    const lifecycle = new MutationObserver(() => {
      if (toast.classList.contains('show')) {
        report.start = performance.now();
        if (![String(year), name, mag].every(value => text.textContent.includes(value))) report.failures.push('unexpected M7 alert');
      } else {
        report.end = performance.now();
        lifecycle.disconnect();
      }
    });
    lifecycle.observe(toast, { attributes: true, attributeFilter: ['class'] });
    requestAnimationFrame(function sample(now) {
      const shown = toast.classList.contains('show');
      if (shown || visible(toast)) {
        if (shown) report.shown++;
        const message = text.getBoundingClientRect();
        const slot = toast.getBoundingClientRect();
        if (shown && Math.abs(message.top - slot.top) < 1) report.settles = true;
        if (getComputedStyle(toast).overflowY !== 'hidden') report.failures.push('slide extends outside the clear slot');
        if (toast.hasAttribute('data-blocked')) report.failures.push('no visible toast position');
        if (shown || visible(toast)) {
          report.largestDrop = Math.max(report.largestDrop, slot.top - toast.offsetTop);
          const labels = [...document.querySelectorAll('.m7label, .peakTag, .peakLine, .cityTag, .rulerTag, #bigYear')].filter(visible);
          const canvas = window.__m7MapBounds();
          report.epicenter ||= canvas.some(box => box.kind === 'epicenter');
          report.plate ||= canvas.some(box => box.kind === 'plate');
          report.label ||= labels.some(el => el.matches('.m7label') && el.textContent.includes(String(year)));
          // The sliding text is clipped to the fixed slot. Check the whole slot on every frame.
          for (const box of [...labels.map(el => ({ kind: el.textContent || el.className, ...el.getBoundingClientRect().toJSON() })), ...canvas]) {
            if (overlaps(slot, box)) report.failures.push(`${Math.round(now)} ms: toast overlaps ${box.kind}`);
          }
        }
      }
      if (report.end && !shown && !visible(toast)) report.done = true;
      else requestAnimationFrame(sample);
    });
    play.click();
  }, event);

  // Step to the event, then check each frame produced by the paused clock,
  // including the first slide frame and the end of the 1.8 s alert.
  await page.clock.fastForward(event.before);
  const toAlert = event.year === 2025 ? 22 : 45;
  await page.clock.fastForward(toAlert);
  for (let elapsed = 0; elapsed < 2200; elapsed += 100) {
    await page.clock.fastForward(100);
  }
  await page.locator('#m7toast').evaluate(el => Promise.allSettled(el.getAnimations({ subtree: true }).map(animation => animation.finished)));
  await page.clock.fastForward(16);
  const report = await page.evaluate(() => window.__m7TestReport);
  assert.ok(report.done && report.shown >= 18 && report.end - report.start >= 1750, `incomplete frame coverage: ${JSON.stringify(report)}`);
  if (viewport.width === 1280 && event.year === 2004) {
    assert.ok(report.startsAbove && report.transitionsTransform && report.settles, 'toast must slide into its clear slot');
  }
  assert.ok(report.epicenter && report.label, 'expected map label and epicenter during the toast');
  assert.deepEqual([...new Set(report.failures)], [], 'toast must avoid map labels and quake markers on all frames');
  if (viewport.plates) assert.ok(report.plate, 'expected visible plate labels');
  if (viewport.width === 768) {
    assert.ok(report.largestDrop < viewport.height * 0.3, `toast dropped ${report.largestDrop}px`);
  }
  return report;
}

try {
  for (const { width, height, plates, events } of cases) {
    const mobile = width === 390;
    const page = await browser.newPage({ viewport: { width, height }, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 0.5 });
    try {
      await page.clock.install();
      await page.goto(base, { timeout: 120000 });
      await page.waitForFunction(() => window.__QUAKE_READY__?.quakes, null, { timeout: 180000 });
      await page.evaluate(() => {
        const play = document.getElementById('play');
        if (window.__state().playing) play.click();
        document.getElementById('year').dispatchEvent(new Event('input'));
      });
      await page.waitForFunction(() => !document.getElementById('intro') && window.__alerts().length === 0, null, { timeout: 30000 });
      if (plates) {
        await page.locator('#plates').evaluate(el => el.click());
        await page.waitForFunction(() => window.__PLATES_READY__, null, { timeout: 60000 });
      }
      await page.clock.pauseAt(new Date(await page.evaluate(() => Date.now() + 1000)));
      for (const event of events) {
        const name = `${width}×${height} ${event.year} ${event.mag}${event.rank ? ' with ranking open' : ''}`;
        try {
          const report = await checkEvent(page, { width, height, plates }, event);
          console.log(`PASS | ${name} | ${report.shown} active frames, max drop ${Math.round(report.largestDrop)}px`);
        } catch (error) {
          console.error(error);
          console.log(`FAIL | ${name}`);
          process.exitCode = 1;
        }
      }
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
