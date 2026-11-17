// v0.2 驗證與截圖：node scripts/screenshot_v02.mjs
import { chromium } from 'playwright-core';
const OUT = '/workspace/tw-quake3d/media';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const report = {};
for (const [tag, vp] of [['desktop', { width: 1280, height: 800 }], ['phone', { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }]]) {
  const { width, height, ...rest } = vp;
  const page = await browser.newPage({ viewport: { width, height }, ...rest });
  const logs = [];
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', e => logs.push(`[pageerror] ${e.message}`));
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'load' });
  await page.waitForFunction(() => window.__QUAKE_READY__, null, { timeout: 180000 });
  const r = { ready: await page.evaluate(() => window.__QUAKE_READY__) };
  const st = () => page.evaluate(() => window.__state());
  await page.waitForTimeout(1500);
  r.default = await st();
  await page.screenshot({ path: `${OUT}/v02_${tag}_default.png` });

  // 排行榜
  if (tag === 'phone') { /* 面板預設收合，先展開再按排行 */ await page.click('#collapse'); }
  await page.click('#rankBtn');
  await page.click('#rankList li[data-i="0"]');
  await page.waitForTimeout(300);
  await page.waitForFunction(() => !window.__flying(), null, { timeout: 30000 });
  await page.waitForTimeout(800);
  r.rank = await st();
  await page.screenshot({ path: `${OUT}/v02_${tag}_ranking.png` });
  await page.click('#rankClose');
  await page.evaluate(() => window.__setView(...(innerWidth <= 640 ? [-380, 520, 1450] : [-250, 330, 950])));

  // 播放（開聲音）
  if (tag === 'phone') { await page.click('#collapse'); }
  await page.check('#sound');
  if (tag === 'phone') { await page.click('#collapse'); }
  await page.click('#play');
  r.playStart = await st();
  await page.waitForFunction(() => window.__state().year >= 1999, null, { timeout: 30000 });
  await page.screenshot({ path: `${OUT}/v02_${tag}_playback.png` });
  r.playShot = await st();  // 截圖當下（仍在播放）
  await page.click('#play');
  r.playPaused = await st();
  // 拖滑桿
  await page.evaluate(() => { const e = document.getElementById('year'); e.value = 2005; e.dispatchEvent(new Event('input')); });
  r.slider2005 = await st();
  await page.evaluate(() => { const e = document.getElementById('year'); e.value = e.max; e.dispatchEvent(new Event('input')); });

  // 板塊
  if (tag === 'phone') { await page.click('#collapse'); }
  await page.check('#plates');
  await page.waitForFunction(() => window.__PLATES_READY__, null, { timeout: 120000 });
  if (tag === 'phone') { await page.click('#collapse'); }  // 手機截圖收合面板，看得到畫面
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/v02_${tag}_plates.png` });
  if (tag === 'phone') { await page.click('#collapse'); await page.waitForTimeout(500); await page.screenshot({ path: `${OUT}/v02_${tag}_plates_panel.png` }); }

  // 全部資料 + 年份色
  await page.uncheck('#plates');
  await page.check('#allData');
  await page.selectOption('#colorMode', 'year');
  r.allData = await st();
  await page.waitForTimeout(1200);
  if (tag === 'desktop') await page.screenshot({ path: `${OUT}/v02_${tag}_alldata_yearcolor.png` });
  r.logs = logs;
  report[tag] = r;
  await page.close();
}
const slim = s => s && ({ ...s, rank: s.rank?.slice(0, 3) });
for (const t in report) for (const k in report[t]) if (report[t][k]?.rank) report[t][k] = slim(report[t][k]);
console.log(JSON.stringify(report, null, 1));
await browser.close();
