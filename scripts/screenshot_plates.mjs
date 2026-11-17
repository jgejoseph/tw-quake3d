// 板塊疊圖截圖：node scripts/screenshot_plates.mjs <out.png> '<view json|null>' <on|off>
import { chromium } from 'playwright-core';
const [,, out, viewArg, mode = 'on'] = process.argv;
const view = viewArg && viewArg !== 'null' ? JSON.parse(viewArg) : null;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const logs = [];
page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', e => logs.push(`[pageerror] ${e.message}`));
await page.goto('http://127.0.0.1:5173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__QUAKE_READY__, null, { timeout: 120000 });
let plates = null;
if (mode === 'on') {
  await page.click('#plates');
  await page.waitForFunction(() => window.__PLATES_READY__, null, { timeout: 120000 });
  plates = await page.evaluate(() => window.__PLATES_READY__);
}
if (view) await page.evaluate(v => window.__setView(...v), view);
await page.waitForTimeout(2500);
await page.screenshot({ path: out });
console.log(JSON.stringify({ out, plates, checked: await page.isChecked('#plates'), logs }, null, 1));
await browser.close();
