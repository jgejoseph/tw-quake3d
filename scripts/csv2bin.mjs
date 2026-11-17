// 建置用：把 data/earthquakes.csv 轉成精簡二進位 data/earthquakes.bin（CSV 原檔不動，仍是資料來源）
// 用法：node scripts/csv2bin.mjs
// 格式（little-endian）：
//   header 32 bytes：'TWQB' | u32 版本=1 | u32 筆數 n | u32 lon 倍率 | u32 lat 倍率 | u32 mag 倍率 | u32 dep 倍率 | u32 保留=0
//   之後依欄位排列：ymd Int32[n]（YYYYMMDD）、hms Int32[n]（HHMMSS）、lon Int32[n]、lat Int32[n]、mag Uint16[n]、dep Uint16[n]
//   數值＝整數 ÷ 倍率；轉檔時逐筆檢查還原後跟 CSV 解析出來的數字完全相同，否則中止。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = process.argv[2] || path.join(root, 'data/earthquakes.csv');
const out = process.argv[3] || path.join(root, 'data/earthquakes.bin');
const S = { lon: 1000, lat: 1000, mag: 100, dep: 100 };
const DT_RE = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

// 跟網頁原本的 CSV 解析規則一模一樣（同樣的欄位、同樣跳過非有限數值的列）
const text = fs.readFileSync(src, 'utf8');
const lines = text.split('\n');
const header = lines[0].trim().split(',');
const iT = header.indexOf('datetime'), iX = header.indexOf('lon'), iY = header.indexOf('lat'), iM = header.indexOf('magnitude'), iD = header.indexOf('depth_km');
const rows = [];
for (let li = 1; li < lines.length; li++) {
  const s = lines[li]; if (!s) continue;
  const f = s.split(',');
  const lon = +f[iX], lat = +f[iY], mag = +f[iM], dep = +f[iD], dt = f[iT];
  if (!isFinite(lon) || !isFinite(lat) || !isFinite(mag) || !isFinite(dep)) continue;
  rows.push({ dt, lon, lat, mag, dep });
}
const n = rows.length;
const buf = Buffer.alloc(32 + n * 20);
buf.write('TWQB', 0, 'ascii');
[1, n, S.lon, S.lat, S.mag, S.dep, 0].forEach((v, k) => buf.writeUInt32LE(v, 4 + k * 4));
const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
const ymd = new Int32Array(ab, 32, n), hms = new Int32Array(ab, 32 + n * 4, n), lon = new Int32Array(ab, 32 + n * 8, n), lat = new Int32Array(ab, 32 + n * 12, n);
const mag = new Uint16Array(ab, 32 + n * 16, n), dep = new Uint16Array(ab, 32 + n * 18, n);
const fail = (i, why) => { console.error(`第 ${i + 1} 筆無法無損轉換：${why}`, rows[i]); process.exit(1); };
const enc = (i, k, v, max, min) => { const q = Math.round(v * S[k]); if (q / S[k] !== v) fail(i, `${k} 精度`); if (q > max || q < min) fail(i, `${k} 超出範圍`); return q; };
for (let i = 0; i < n; i++) {
  const r = rows[i];
  if (!DT_RE.test(r.dt)) fail(i, '時間格式');
  ymd[i] = +(r.dt.slice(0, 4) + r.dt.slice(5, 7) + r.dt.slice(8, 10));
  hms[i] = +(r.dt.slice(11, 13) + r.dt.slice(14, 16) + r.dt.slice(17, 19)) || 0;
  lon[i] = enc(i, 'lon', r.lon, 2147483647, -2147483648);
  lat[i] = enc(i, 'lat', r.lat, 2147483647, -2147483648);
  mag[i] = enc(i, 'mag', r.mag, 65535, 0);
  dep[i] = enc(i, 'dep', r.dep, 65535, 0);
}
fs.writeFileSync(out, Buffer.from(ab));
console.log(`寫出 ${out}：${n} 筆，${(32 + n * 20).toLocaleString()} bytes`);
