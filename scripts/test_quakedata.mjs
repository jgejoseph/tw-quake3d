// 等價測試：v0.5.7 原本的 CSV 解析（逐字複製） vs 新的 earthquakes.bin 解析（src/quakedata.js），所有陣列必須完全相同
// 用法：node scripts/test_quakedata.mjs
import fs from 'node:fs';
import { parseQuakesBin, parseQuakesCSV, binTotalBytes } from '../src/quakedata.js';
const LON0 = 121, LAT0 = 23.5, KM_LAT = 111.32, KM_LON = 111.32 * Math.cos(LAT0 * Math.PI / 180), DEPTH_SCALE = 1;
const toX = lon => (lon - LON0) * KM_LON, toZ = lat => -(lat - LAT0) * KM_LAT;

function oldParse(text) { // ← v0.5.7 src/main.js loadQuakes() 解析段落，原樣
  const lines = text.split('\n');
  const header = lines[0].trim().split(',');
  const iT = header.indexOf('datetime'), iX = header.indexOf('lon'), iY = header.indexOf('lat'), iM = header.indexOf('magnitude'), iD = header.indexOf('depth_km');
  const N = lines.length - 1;
  const pos = new Float32Array(N * 3), size = new Float32Array(N), yearA = new Float32Array(N), magA = new Float32Array(N), depA = new Float32Array(N);
  const lonA = new Float32Array(N), latA = new Float32Array(N), ymdA = new Int32Array(N), hmsA = new Int32Array(N);
  const big = [], m5 = [];
  const hist = new Map();
  let n = 0;
  for (let li = 1; li < lines.length; li++) {
    const s = lines[li]; if (!s) continue;
    const f = s.split(',');
    const lon = +f[iX], lat = +f[iY], mag = +f[iM], dep = +f[iD], dt = f[iT];
    if (!isFinite(lon) || !isFinite(lat) || !isFinite(mag) || !isFinite(dep)) continue;
    const yr = +dt.slice(0, 4), frac = ((+dt.slice(5, 7) - 1) * 31 + (+dt.slice(8, 10) - 1)) / 372;
    pos[n * 3] = toX(lon); pos[n * 3 + 1] = -dep * DEPTH_SCALE; pos[n * 3 + 2] = toZ(lat);
    size[n] = Math.min(40, 1.2 * Math.pow(1.75, Math.max(0, mag - 1)));
    yearA[n] = yr + frac; magA[n] = mag; depA[n] = dep;
    lonA[n] = lon; latA[n] = lat; ymdA[n] = +(dt.slice(0, 4) + dt.slice(5, 7) + dt.slice(8, 10)); hmsA[n] = +(dt.slice(11, 13) + dt.slice(14, 16) + dt.slice(17, 19)) || 0;
    const h = hist.get(yr) || new Array(15).fill(0); h[Math.max(0, Math.min(14, Math.floor(mag * 2 + 1e-9)))]++; hist.set(yr, h);
    if (mag >= 5) m5.push({ yr, frac, mag, x: pos[n * 3], y: pos[n * 3 + 1], z: pos[n * 3 + 2] });
    if (mag >= 6) big.push({ dt, lon, lat, mag, dep, yr, x: pos[n * 3], y: pos[n * 3 + 1], z: pos[n * 3 + 2] });
    n++;
  }
  for (const h of hist.values()) for (let k = 13; k >= 0; k--) h[k] += h[k + 1];
  return { n, pos, size, yearA, magA, depA, lonA, latA, ymdA, hmsA, big, m5, hist };
}

let fails = 0;
const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fails++; };
const sameTyped = (a, b, len) => { if (a.constructor !== b.constructor) return 'type'; for (let i = 0; i < len; i++) if (!Object.is(a[i], b[i])) return `index ${i}: ${a[i]} vs ${b[i]}`; return ''; };
const sameObjs = (A, B) => { if (A.length !== B.length) return `length ${A.length} vs ${B.length}`; for (let i = 0; i < A.length; i++) { const a = A[i], b = B[i], ka = Object.keys(a), kb = Object.keys(b); if (ka.join() !== kb.join()) return `keys @${i}`; for (const k of ka) if (!Object.is(a[k], b[k])) return `@${i}.${k}: ${a[k]} vs ${b[k]}`; } return ''; };

const csv = fs.readFileSync(new URL('../data/earthquakes.csv', import.meta.url), 'utf8');
const binU8 = fs.readFileSync(new URL('../data/earthquakes.bin', import.meta.url));
const ab = binU8.buffer.slice(binU8.byteOffset, binU8.byteOffset + binU8.length);
const O = oldParse(csv);
ok(binTotalBytes(new Uint8Array(ab, 0, 32)) === ab.byteLength, `binTotalBytes 與檔案大小一致（${ab.byteLength}）`);
for (const [name, NQ] of [['bin', parseQuakesBin(ab, toX, toZ, DEPTH_SCALE)], ['csv 備援', parseQuakesCSV(csv, toX, toZ, DEPTH_SCALE)]]) {
  console.log(`--- 舊 CSV 解析 vs 新 ${name} 解析 ---`);
  ok(O.n === NQ.n, `n ${O.n} vs ${NQ.n}`);
  for (const [k, m] of [['pos', 3], ['size', 1], ['yearA', 1], ['magA', 1], ['depA', 1], ['lonA', 1], ['latA', 1], ['ymdA', 1], ['hmsA', 1]]) { const r = sameTyped(O[k], NQ[k], O.n * m); ok(!r, `${k} 前 ${O.n * m} 個值相同 ${r}`); }
  let r = sameObjs(O.big, NQ.big); ok(!r, `big（M≥6，含 dt 字串）${O.big.length} 筆相同 ${r}`);
  r = sameObjs(O.m5, NQ.m5); ok(!r, `m5（M≥5）${O.m5.length} 筆相同 ${r}`);
  const hk = [...O.hist.keys()], nk = [...NQ.hist.keys()];
  ok(hk.join() === nk.join() && hk.every(y => O.hist.get(y).join() === NQ.hist.get(y).join()), `hist ${hk.length} 個年份（${hk[0]}–${hk.at(-1)}）相同`);
}
console.log(`舊版陣列長度 ${O.lonA.length}（多 ${O.lonA.length - O.n} 個從未使用的尾端空格，因 CSV 最後一行是空行）；bin 版長度 ${O.n}`);
console.log(fails ? `結果：${fails} 項不符` : '結果：全部相同');
process.exit(fails ? 1 : 0);
