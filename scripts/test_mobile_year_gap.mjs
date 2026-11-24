import assert from 'node:assert/strict';
import path from 'node:path';
import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
});
const base = process.argv[2];
const shotDir = process.env.SHOT_DIR || 'test-results';
const overlaps = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

const readLayout = page => page.evaluate(() => {
  const rect = selector => document.querySelector(selector).getBoundingClientRect().toJSON();
  return {
    year: rect('#bigYear'),
    yearText: document.getElementById('bigYear').textContent,
    pointerEvents: getComputedStyle(document.getElementById('bigYear')).pointerEvents,
    panel: rect('#panel'),
    toolbar: rect('#mapbar .in'),
    controls: ['#collapse', '#compass', '#homeBtn', '#timebar'].map(rect),
    playing: window.__state().playing,
  };
});

const waitForMobileGap = (page, collapsed) => page.waitForFunction(expected => {
  const panel = document.getElementById('panel');
  const year = document.getElementById('bigYear').getBoundingClientRect();
  return panel.classList.contains('collapsed') === expected && year.height > 0 &&
    year.top - panel.getBoundingClientRect().bottom >= 11.5;
}, collapsed, { timeout: 10000 });

try {
  for (const viewport of [{ width: 390, height: 844 }, { width: 360, height: 740 }, { width: 1280, height: 800 }]) {
    const mobile = viewport.width <= 640;
    const page = await browser.newPage({ viewport, isMobile: mobile, hasTouch: mobile });
    const size = `${viewport.width}×${viewport.height}`;
    try {
      await page.goto(base, { timeout: 120000 });
      await page.waitForFunction(() => window.__autoplay && window.__state().playing && !document.getElementById('intro'), null, { timeout: 60000 });
      const initial = await readLayout(page);
      assert.match(initial.yearText, /^\d{4}$/);
      assert.ok(initial.playing && initial.year.height > 0);
      assert.equal(initial.pointerEvents, 'none');
      assert.ok(initial.controls.every(control => !overlaps(initial.year, control)), 'year overlaps a control');
      if (mobile) {
        assert.ok(initial.year.top - initial.panel.bottom >= 11.5, 'year needs a 12 px gap under the collapsed panel');
        await page.screenshot({ path: path.join(shotDir, `ui-2-${viewport.width}.jpg`), quality: 92 });
        await page.locator('#collapse').tap();
        await waitForMobileGap(page, false);
        const expanded = await readLayout(page);
        assert.ok(expanded.playing && !overlaps(expanded.year, expanded.panel));
        assert.ok(expanded.controls.every(control => !overlaps(expanded.year, control)), 'year overlaps a control with settings open');
        await page.locator('#collapse').tap();
        await waitForMobileGap(page, true);
      } else {
        assert.ok(Math.abs(initial.year.top - initial.toolbar.bottom - 4) <= 0.5, 'year moved away from the desktop toolbar');
        assert.ok(Math.abs((initial.year.left + initial.year.right) / 2 - viewport.width / 2) <= 0.5, 'year is off-center');
        await page.screenshot({ path: path.join(shotDir, `ui-2-${viewport.width}.jpg`), quality: 92 });
      }
      console.log(`PASS | ${size} playback year gap | ${mobile ? initial.year.top - initial.panel.bottom : initial.year.top - initial.toolbar.bottom}px`);
    } catch (error) {
      console.error(error);
      console.log(`FAIL | ${size} playback year gap`);
      process.exitCode = 1;
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
