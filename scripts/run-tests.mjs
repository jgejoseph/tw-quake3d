// 跑既有瀏覽器回歸，以及本機資料完整性、解析等價與缺陷回歸。
// 用法：npm run build && npm test        （或 BASE=https://jgejoseph.github.io/tw-quake3d/ npm test 測正式站）
// 需要 Chrome/Chromium：預設 /usr/bin/google-chrome，可用 CHROME_PATH 指定。截圖寫到 SHOT_DIR（預設 test-results/）。
import { spawn } from 'node:child_process'; import fs from 'node:fs';
const port = 4173; let server = null; let BASE = process.env.BASE;
if (!BASE) {
  if (!fs.existsSync('dist/index.html')) { console.error('dist/ 不存在，請先 npm run build'); process.exit(2); }
  server = spawn(process.execPath, ['scripts/serve-subpath.mjs', 'dist', String(port)], { stdio: 'inherit' });
  BASE = `http://127.0.0.1:${port}/tw-quake3d/`; await new Promise(r => setTimeout(r, 800));
}
fs.mkdirSync(process.env.SHOT_DIR || 'test-results', { recursive: true });
const run = (f, extra = [], includeBase = true) => new Promise(res => { const p = spawn(process.execPath, [f, ...(includeBase ? [BASE] : []), ...extra], { stdio: ['ignore', 'pipe', 'inherit'] }); let out = '';
  p.stdout.on('data', d => { out += d; process.stdout.write(d); }); p.on('close', code => res({ f, code, out })); });
const results = [];
if (!process.env.BASE) {
  // These fixtures exercise the local source/build, never the production site.
  results.push(await run('scripts/test_data_integrity.mjs', [], false));
  results.push(await run('scripts/test_quakedata.mjs', [], false));
  results.push(await run('scripts/test_fault_world.mjs', [], false));
  results.push(await run('scripts/test_mobile_year_gap.mjs'));
  results.push(await run('scripts/test_m7_overlap.mjs'));
}
results.push(await run('reg56.mjs'));
results.push(await run('v0510_check.mjs'));
results.push(await run('mobile_panel_check.mjs', [(process.env.SHOT_DIR || 'test-results') + '/v0511']));
if (!process.env.BASE) results.push(await run('scripts/test_stability.mjs'));
// Diagnostic observations are reported separately and never counted as assertions.
const diagnostic = await run('scripts/diag_year_sync.mjs');
if (server) server.kill();
let fail = 0;
for (const r of results) { const n = (r.out.match(/FAIL/g) || []).length, p = (r.out.match(/PASS/g) || []).length; if (n || r.code) fail++; console.log(`${r.f}: PASS ${p}, FAIL ${n}, exit ${r.code}`); }
console.log(`DIAG: 1 run, ${diagnostic.code === 0 ? 'completed' : 'unavailable (see diagnostic file/log)'}, exit ${diagnostic.code}`);
process.exit(fail ? 1 : 0);
