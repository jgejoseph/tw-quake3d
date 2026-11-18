import assert from 'node:assert/strict';
import path from 'node:path';
import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
});
const base = process.argv[2];
const viewports = [{ width: 1280, height: 800 }, { width: 1920, height: 1080 }, { width: 390, height: 844 }];
const overlaps = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

try {
  for (const viewport of viewports) {
    const mobile = viewport.width === 390;
    const page = await browser.newPage({ viewport, isMobile: mobile, hasTouch: mobile });
    const size = `${viewport.width}×${viewport.height}`;
    try {
      await page.clock.install();
      await page.goto(base, { timeout: 120000 });
      await page.waitForFunction(() => window.__QUAKE_READY__?.quakes, null, { timeout: 180000 });
      await page.evaluate(() => {
        const play = document.getElementById('play');
        const year = document.getElementById('year');
        if (window.__state().playing) play.click();
        year.value = '2004';
        year.dispatchEvent(new Event('input'));
      });
      await page.waitForFunction(() => !document.getElementById('intro') && window.__alerts().length === 0, null, { timeout: 30000 });
      // Keep the 1.8 s alert on screen while Chromium captures the screenshot.
      await page.clock.pauseAt(new Date(await page.evaluate(() => Date.now() + 1000)));
      await page.evaluate(() => document.getElementById('play').click());
      await page.clock.fastForward(600); // The October event fires before the next year at 700 ms.
      await page.clock.fastForward(250); // Project the map label at full opacity.
      const boxes = await page.evaluate(async () => {
        const toast = document.getElementById('m7toast');
        const year = document.getElementById('bigYear');
        const event = /2004 宜蘭縣外海地震.*M7\.1/;
        const label = [...document.querySelectorAll('.m7label')].find(el => event.test(el.textContent));
        await Promise.all(toast.getAnimations().map(animation => animation.finished));
        const visibleBox = el => {
          if (!el) return null;
          const style = getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          return style.visibility === 'visible' && +style.opacity >= 0.9 && rect.width && rect.height ? rect.toJSON() : null;
        };
        return {
          toast: event.test(toast.textContent) && visibleBox(toast),
          label: visibleBox(label),
          year: year.textContent === '2004' && visibleBox(year),
        };
      });
      assert.ok(boxes.toast && boxes.label && boxes.year, `2004 alert, label, and year must be visible: ${JSON.stringify(boxes)}`);
      assert.ok(!overlaps(boxes.toast, boxes.label), `toast overlaps map label: ${JSON.stringify(boxes)}`);
      assert.ok(!overlaps(boxes.toast, boxes.year), 'toast overlaps year');
      assert.ok(!overlaps(boxes.year, boxes.label), 'year overlaps map label');
      await page.screenshot({ path: path.join(process.env.SHOT_DIR || 'test-results', `ui-1-m7-${viewport.width}.jpg`), quality: 90 });
      console.log(`PASS | ${size} 2004 宜蘭縣外海 M7.1 | ${JSON.stringify(boxes)}`);
    } catch (error) {
      console.error(error);
      console.log(`FAIL | ${size} 2004 宜蘭縣外海 M7.1`);
      process.exitCode = 1;
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
