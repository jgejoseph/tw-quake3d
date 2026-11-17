// 地震資料解析：優先讀精簡二進位 earthquakes.bin（由 scripts/csv2bin.mjs 從 CSV 轉出），失敗才退回原本的 CSV。
// 兩條路產生的陣列內容完全相同（見 scripts/test_quakedata.mjs）。不依賴 three，Node 也能測。

const pad2 = v => String(v).padStart(2, '0');

// 共用：把一筆資料寫進各陣列（跟原本 CSV 版的計算一模一樣）
function makeSink(N, toX, toZ, DEPTH_SCALE) {
  const pos = new Float32Array(N * 3), size = new Float32Array(N), yearA = new Float32Array(N), magA = new Float32Array(N), depA = new Float32Array(N);
  const lonA = new Float32Array(N), latA = new Float32Array(N), ymdA = new Int32Array(N), hmsA = new Int32Array(N); // 點選卡片用
  const big = [], m5 = [];      // 規模 ≥6（排行用）、≥5（音效用）
  const hist = new Map();       // 年 → 每 0.5 級的累計筆數：h[k]＝規模 ≥ k×0.5 的筆數（k＝0…14，規模滑桿用）
  const S = { n: 0, pos, size, yearA, magA, depA, lonA, latA, ymdA, hmsA, big, m5, hist };
  // dtFn：只有規模 ≥6 才需要日期字串，用函式延後產生，二進位版就不必每筆組字串
  S.add = (lon, lat, mag, dep, yr, frac, ymd, hms, dtFn) => {
    const n = S.n;
    pos[n * 3] = toX(lon); pos[n * 3 + 1] = -dep * DEPTH_SCALE; pos[n * 3 + 2] = toZ(lat);
    size[n] = Math.min(40, 1.2 * Math.pow(1.75, Math.max(0, mag - 1)));
    yearA[n] = yr + frac; magA[n] = mag; depA[n] = dep;
    lonA[n] = lon; latA[n] = lat; ymdA[n] = ymd; hmsA[n] = hms;
    const h = hist.get(yr) || new Array(15).fill(0); h[Math.max(0, Math.min(14, Math.floor(mag * 2 + 1e-9)))]++; hist.set(yr, h);
    if (mag >= 5) m5.push({ yr, frac, mag, x: pos[n * 3], y: pos[n * 3 + 1], z: pos[n * 3 + 2] });
    if (mag >= 6) big.push({ dt: dtFn(), lon, lat, mag, dep, yr, x: pos[n * 3], y: pos[n * 3 + 1], z: pos[n * 3 + 2] });
    S.n++;
  };
  S.finish = () => { for (const h of hist.values()) for (let k = 13; k >= 0; k--) h[k] += h[k + 1]; delete S.add; delete S.finish; return S; }; // 轉成「≥ 門檻」的累計
  return S;
}

// 原本的 CSV 解析（備援用）
export function parseQuakesCSV(text, toX, toZ, DEPTH_SCALE) {
  const lines = text.split('\n');
  const header = lines[0].trim().split(',');
  const iT = header.indexOf('datetime'), iX = header.indexOf('lon'), iY = header.indexOf('lat'), iM = header.indexOf('magnitude'), iD = header.indexOf('depth_km');
  const S = makeSink(lines.length - 1, toX, toZ, DEPTH_SCALE);
  for (let li = 1; li < lines.length; li++) {
    const s = lines[li]; if (!s) continue;
    const f = s.split(',');
    const lon = +f[iX], lat = +f[iY], mag = +f[iM], dep = +f[iD], dt = f[iT];
    if (!isFinite(lon) || !isFinite(lat) || !isFinite(mag) || !isFinite(dep)) continue;
    const yr = +dt.slice(0, 4), frac = ((+dt.slice(5, 7) - 1) * 31 + (+dt.slice(8, 10) - 1)) / 372;
    S.add(lon, lat, mag, dep, yr, frac, +(dt.slice(0, 4) + dt.slice(5, 7) + dt.slice(8, 10)), +(dt.slice(11, 13) + dt.slice(14, 16) + dt.slice(17, 19)) || 0, () => dt);
  }
  return S.finish();
}

// 二進位 header：'TWQB' | 版本 | 筆數 | lon/lat/mag/dep 倍率 | 保留（共 32 bytes）
export function binTotalBytes(u8) {
  if (u8.length < 32 || u8[0] !== 84 || u8[1] !== 87 || u8[2] !== 81 || u8[3] !== 66) return 0;
  return 32 + new DataView(u8.buffer, u8.byteOffset, 32).getUint32(8, true) * 20;
}

export function parseQuakesBin(ab, toX, toZ, DEPTH_SCALE) {
  const dv = new DataView(ab);
  if (ab.byteLength < 32 || dv.getUint32(0, false) !== 0x54575142) throw new Error('earthquakes.bin 格式不符');
  if (dv.getUint32(4, true) !== 1) throw new Error('earthquakes.bin 版本不符');
  const n = dv.getUint32(8, true), sLon = dv.getUint32(12, true), sLat = dv.getUint32(16, true), sMag = dv.getUint32(20, true), sDep = dv.getUint32(24, true);
  if (ab.byteLength < 32 + n * 20) throw new Error(`earthquakes.bin 不完整（${ab.byteLength} / ${32 + n * 20} bytes）`);
  const ymdI = new Int32Array(ab, 32, n), hmsI = new Int32Array(ab, 32 + n * 4, n), lonI = new Int32Array(ab, 32 + n * 8, n), latI = new Int32Array(ab, 32 + n * 12, n);
  const magI = new Uint16Array(ab, 32 + n * 16, n), depI = new Uint16Array(ab, 32 + n * 18, n);
  const S = makeSink(n, toX, toZ, DEPTH_SCALE);
  for (let i = 0; i < n; i++) {
    const ymd = ymdI[i], hms = hmsI[i];
    const yr = (ymd / 1e4) | 0, mo = ((ymd / 100) | 0) % 100, dd = ymd % 100;
    const frac = ((mo - 1) * 31 + (dd - 1)) / 372;
    S.add(lonI[i] / sLon, latI[i] / sLat, magI[i] / sMag, depI[i] / sDep, yr, frac, ymd, hms,
      () => `${String(yr).padStart(4, '0')}-${pad2(mo)}-${pad2(dd)} ${pad2((hms / 1e4) | 0)}:${pad2(((hms / 100) | 0) % 100)}:${pad2(hms % 100)}`);
  }
  return S.finish();
}

// 下載並回報進度。onProgress(received, total)：total 為 0 表示未知（gzip 時 Content-Length 是壓縮後大小，不能拿來算 %）
export async function fetchBytes(url, onProgress, totalFromHead) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}：${url}`);
  const cl = +res.headers.get('content-length') || 0, gz = !!res.headers.get('content-encoding');
  let total = cl && !gz ? cl : 0;
  if (!res.body || !res.body.getReader) { const ab = await res.arrayBuffer(); onProgress?.(ab.byteLength, ab.byteLength); return ab; }
  const reader = res.body.getReader(), chunks = [];
  let got = 0, head = null;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value); got += value.length;
    if (totalFromHead && !head && got >= 32) { head = chunks.length === 1 ? value : concat(chunks, got); const t = totalFromHead(head); if (t) total = t; }
    onProgress?.(got, total);
  }
  return (chunks.length === 1 ? chunks[0].slice() : concat(chunks, got)).buffer;
}
function concat(chunks, len) { const u = new Uint8Array(len); let o = 0; for (const c of chunks) { u.set(c.subarray(0, Math.min(c.length, len - o)), o); o += c.length; if (o >= len) break; } return u; }
