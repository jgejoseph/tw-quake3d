import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';

const BASE = process.argv[2];
assert.ok(BASE, 'Usage: node scripts/test_stability.mjs <local preview URL>');
const output = process.env.SHOT_DIR || 'test-results';
fs.mkdirSync(output, { recursive: true });
const results = [];
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
async function check(name, body) {
  const context = await browser.newContext({ viewport: { width: 480, height: 400 } });
  const page = await context.newPage();
  try {
    const evidence = await body(page);
    results.push({ name, passed: true, evidence });
    console.log('PASS', name, JSON.stringify(evidence));
  } catch (error) {
    results.push({ name, passed: false, error: String(error) });
    console.log('FAIL', name, String(error));
    process.exitCode = 1;
  } finally { await context.close(); }
}
try {
  for (const finalOn of [false, true]) {
    await check(`cold fault load respects on-off${finalOn ? '-on' : ''}`, async page => {
      const errors = []; page.on('pageerror', error => errors.push(error.message));
      let release, requested;
      const gate = new Promise(resolve => { release = resolve; });
      const seen = new Promise(resolve => { requested = resolve; });
      let requests = 0;
      await page.route('**/data/faults.json', async route => { requests++; requested(); await gate; await route.continue(); });
      try {
        await page.goto(BASE, { timeout: 120000 });
        await page.waitForFunction(() => window.__QUAKE_READY__, null, { timeout: 180000 });
        assert.equal(await page.evaluate(() => window.__QUAKE_READY__.quakes), 933305);
        await page.evaluate(() => { const year = document.getElementById('year'); year.value = year.max; year.dispatchEvent(new Event('input')); document.getElementById('faults').click(); });
        let timer;
        try { await Promise.race([seen, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('fault load request was not issued')), 30000); })]); }
        finally { clearTimeout(timer); }
        await page.evaluate(on => { const cb = document.getElementById('faults'); cb.click(); if (on) cb.click(); }, finalOn);
      } finally { release(); }
      await page.waitForFunction(() => window.__FAULTS_READY__, null, { timeout: 60000 });
      const state = await page.evaluate(() => ({ checked: document.getElementById('faults').checked, point: window.__faultPoint('山腳斷層') }));
      assert.equal(state.checked, finalOn);
      assert.equal(state.point !== null, finalOn, `loaded layer visibility must match latest checkbox: ${JSON.stringify(state)}`);
      assert.equal(requests, 1, 'pending toggles share one load');
      // Cached/warm toggles must still agree with the checkbox.
      await page.evaluate(() => { const cb = document.getElementById('faults'); if (!cb.checked) cb.click(); });
      assert.notEqual(await page.evaluate(() => window.__faultPoint('山腳斷層')), null);
      await page.evaluate(() => document.getElementById('faults').click());
      assert.equal(await page.evaluate(() => window.__faultPoint('山腳斷層')), null);
      assert.deepEqual(errors, []);
      return { ...state, requests, warmToggle: 'on/off matched' };
    });
  }
  await check('WebGL creation failure reports error and ends loading', async page => {
    const errors = [];
    let failed;
    const failure = new Promise(resolve => { failed = resolve; });
    page.on('pageerror', error => { errors.push(error.message); failed(); });
    await page.addInitScript(() => {
      const getContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, ...args) {
        return /webgl/i.test(type) ? null : getContext.call(this, type, ...args);
      };
    });
    await page.goto(BASE, { timeout: 120000 });
    let timer;
    try { await Promise.race([failure, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('expected renderer failure was not observed')), 10000); })]); }
    finally { clearTimeout(timer); }
    const state = await page.evaluate(() => ({ status: document.getElementById('status').textContent, role: document.getElementById('status').getAttribute('role'), year: document.getElementById('yearText').textContent, ready: window.__QUAKE_READY__, canvases: document.querySelectorAll('#app canvas').length }));
    assert.match(state.status, /WebGL2/);
    assert.match(state.year, /WebGL2/);
    assert.doesNotMatch(state.year, /載入中/);
    assert.equal(state.role, 'alert');
    assert.match(state.ready.error, /WebGL2/);
    assert.equal(state.canvases, 0);
    assert.equal(errors.length, 1, 'startup aborts without downstream missing-renderer errors');
    assert.match(errors[0], /WebGL context/);
    await page.waitForFunction(() => !document.getElementById('intro'), null, { timeout: 10000 });
    await page.screenshot({ path: path.join(output, 'phase2a-webgl-error.png') });
    return { ...state, errors };
  });
} finally {
  fs.writeFileSync(path.join(output, 'phase2a-stability-results.json'), JSON.stringify(results, null, 2));
  await browser.close();
}
