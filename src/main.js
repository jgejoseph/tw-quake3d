import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { initPlates, PLATE_COLORS, PLATE_TRANSFORM } from './plates.js';
import { initFaults } from './faults.js';
import { initEdu, eduBtn } from './edu.js';
import { parseQuakesBin, parseQuakesCSV, fetchBytes, binTotalBytes } from './quakedata.js';

// ---- 座標：場景單位 = 公里；原點 = (121E, 23.5N)；x 向東、z 向南、y 向上 ----
const LON0 = 121, LAT0 = 23.5;
const KM_LAT = 111.32;
const KM_LON = 111.32 * Math.cos(LAT0 * Math.PI / 180);
const DEPTH_SCALE = 1;   // 震源深度：1 km = 1 場景單位（不誇張）
const TERRAIN_EXAG = 5;       // 海底地形誇張倍數
const LAND_EXAG = 15;         // 陸地（海拔 > 0）誇張倍數
const toX = lon => (lon - LON0) * KM_LON;
const toZ = lat => -(lat - LAT0) * KM_LAT;
const MAP_BOUNDS = { lon0: 118, lon1: 124, lat0: 20, lat1: 27 }; // 地形（ETOPO 子集）範圍

// ---- 資料範圍（v0.2 預設：1990 起、M≥3；勾「顯示全部資料」則 1935 起、不限規模）----
const SCOPE_DEFAULT = { y0: 1990, mMin: 3 };
const SCOPE_ALL = { y0: 1935, mMin: -1 };

// ---- 色盤 ----
const DEPTH_EDGES = [15, 30, 70, 150, 1e9];
const DEPTH_LABELS = ['0–15 公里', '15–30 公里', '30–70 公里', '70–150 公里', '150 公里以上'];
const PALETTES = {
  depth:   ['#ff2a2a', '#ff9a1f', '#ffe633', '#33d17a', '#3a7bff'],
  depthCB: ['#fde725', '#7ad151', '#22a884', '#2a788e', '#7b6cff'], // viridis 系，亮→暗
  year:    ['#3a7bff', '#33d1c4', '#ffe633', '#ff9a1f', '#ff2a2a'],  // 舊→新
};

const $ = id => document.getElementById(id);
const statusEl = $('status');
const setStatus = s => { statusEl.textContent = s; };

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
} catch (error) {
  const message = '無法啟動 3D 地圖：WebGL2 無法建立。請重新整理，或使用支援 WebGL2 的瀏覽器。';
  setStatus(message);
  statusEl.setAttribute('role', 'alert');
  $('yearText').textContent = 'WebGL2 啟動失敗，請重新整理或更換瀏覽器';
  window.__QUAKE_READY__ = { error: message };
  window.__introDone?.(true);
  throw error; // Stop startup: scene/controls must not use a missing renderer.
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
$('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0f17);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 20000);
const narrow = () => window.innerWidth <= 640;
const HOME = narrow() ? [0, 1047, 1147] : [0, 579, 679];
camera.position.set(...HOME);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, -100, 0);
let fly = null; window.__flying = () => !!fly;
window.__setView = (x, y, z, tx = 0, ty = -100, tz = 0) => { fly = null; camera.position.set(x, y, z); controls.target.set(tx, ty, tz); controls.update(); };
controls.update();
scene.add(new THREE.AmbientLight(0xffffff, 0.55));
const sun = new THREE.DirectionalLight(0xffffff, 1.1); sun.position.set(-300, 600, 300); scene.add(sun);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---- v0.5.10 電腦版：視角、顯示全部資料、聲音與震動移到地圖上方工具列（同一組元素，行為不變）；手機留在設定面板 ----
{
  const bar = document.querySelector('#mapbar .in'), views = document.querySelector('.views'), viewsAcc = views.closest('details'),
    allOpt = $('allData').closest('.opt'), sndOpt = $('sound').closest('.opt'), rankBtn = $('rankBtn');
  const sep = () => Object.assign(document.createElement('i'), { className: 'sep' });
  const place = () => {
    const desk = !narrow();
    if (desk && views.parentNode !== bar) bar.append(views, sep(), allOpt, sndOpt);
    else if (!desk && views.parentNode === bar) { viewsAcc.append(views); rankBtn.before(allOpt, sndOpt); bar.textContent = ''; }
    viewsAcc.hidden = desk;
  };
  place(); window.addEventListener('resize', place);
  // 工具列換行變高時，大年份和 M7 提示跟著往下，不互相蓋住
  new ResizeObserver(() => document.body.style.setProperty('--barB', Math.round(bar.getBoundingClientRect().bottom) + 'px')).observe(bar);
}

// ---- 面板收合（窄螢幕預設收合）----
let setPanelCollapsed = () => {};
{
  const p = $('panel'), b = $('collapse');
  const set = c => { p.classList.toggle('collapsed', c); b.textContent = c ? '設定' : '收合'; };
  set(narrow()); setPanelCollapsed = c => { set(c); if (c) p.scrollTop = 0; };
  b.addEventListener('click', () => set(!p.classList.contains('collapsed')));
  $('grip').addEventListener('click', () => { set(true); p.scrollTop = 0; });
  // 手機：往上滑收合。從標題列往上滑隨時可收；在內容區要先滑到底、再往上滑一次才收，避免和捲動衝突
  let sw = null;
  p.addEventListener('touchstart', e => {
    if (!narrow() || p.classList.contains('collapsed') || e.touches.length !== 1 || e.target.closest('input,select')) { sw = null; return; }
    const t = e.touches[0];
    sw = { x: t.clientX, y: t.clientY, st: p.scrollTop, head: !!e.target.closest('header'), end: p.scrollTop + p.clientHeight >= p.scrollHeight - 2 };
  }, { passive: true });
  p.addEventListener('touchend', e => {
    if (!sw) return;
    const t = e.changedTouches[0], dy = sw.y - t.clientY, dx = Math.abs(t.clientX - sw.x), s0 = sw; sw = null;
    if (dy < (s0.head ? 25 : 60) || dx > dy * 0.6) return; // 標題列靠近螢幕頂端，門檻放低
    if (s0.head || (s0.end && Math.abs(p.scrollTop - s0.st) < 4)) { set(true); p.scrollTop = 0; }
  }, { passive: true });
  p.addEventListener('touchcancel', () => { sw = null; }, { passive: true });
}

const lid = new THREE.Group(); scene.add(lid); // 地形＋界線，可整體上抬
{
  const ls = $('lift'), lv = $('liftv');
  ls.addEventListener('input', () => { lid.position.y = +ls.value * DEPTH_SCALE; lv.textContent = ls.value; });
}

// ---- 地形（ETOPO 2022，含海底地形）----
const terrainCtl = { real: false, setReal: () => {}, onReal: [], heightAt: () => 0 };
async function loadTerrain() {
  const meta = await (await fetch(import.meta.env.BASE_URL + 'data/terrain_meta.json')).json();
  const buf = await (await fetch(import.meta.env.BASE_URL + 'data/terrain_int16.bin')).arrayBuffer();
  const z = new Int16Array(buf);
  const { rows, cols, lat_first, lat_last, lon_first, lon_last } = meta;
  if (z.length !== rows * cols) throw new Error(`terrain size mismatch ${z.length} vs ${rows * cols}`);
  const pos = new Float32Array(rows * cols * 3), col = new Float32Array(rows * cols * 3);
  const c = new THREE.Color();
  for (let r = 0; r < rows; r++) {
    const lat = lat_first + (lat_last - lat_first) * r / (rows - 1);
    for (let k = 0; k < cols; k++) {
      const lon = lon_first + (lon_last - lon_first) * k / (cols - 1);
      const i = r * cols + k, h = z[i];
      pos[i * 3] = toX(lon); pos[i * 3 + 1] = h / 1000 * DEPTH_SCALE * (h > 0 ? LAND_EXAG : TERRAIN_EXAG); pos[i * 3 + 2] = toZ(lat);
      if (h < 0) { const t = Math.min(1, -h / 6000); c.setRGB(0.15 * (1 - t) + 0.02, 0.35 * (1 - t) + 0.08, 0.6 * (1 - t) + 0.25); }
      else { const t = Math.min(1, h / 3500); c.setRGB(0.25 + 0.45 * t, 0.45 + 0.2 * t, 0.2 + 0.4 * t); }
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
  }
  // 三角形分成陸地（任一頂點海拔 > 0）與海底兩組，海底可用開關隱藏
  const landIdx = [], seaIdx = [];
  for (let r = 0; r < rows - 1; r++) for (let k = 0; k < cols - 1; k++) {
    const a = r * cols + k, b = a + 1, d = a + cols, e = d + 1;
    (z[a] > 0 || z[d] > 0 || z[b] > 0 ? landIdx : seaIdx).push(a, d, b);
    (z[b] > 0 || z[d] > 0 || z[e] > 0 ? landIdx : seaIdx).push(b, d, e);
  }
  const posAttr = new THREE.BufferAttribute(pos, 3), colAttr = new THREE.BufferAttribute(col, 3);
  const m = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false });
  const mk = list => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', posAttr); g.setAttribute('color', colAttr);
    g.setIndex(new THREE.BufferAttribute(new Uint32Array(list), 1));
    g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, m); mesh.renderOrder = 2; lid.add(mesh); return mesh;
  };
  const land = mk(landIdx), sea = mk(seaIdx);
  terrainCtl.heightAt = (lon, lat) => { // 原始海拔（公尺），取最近格點
    const r = Math.round((lat - lat_first) / (lat_last - lat_first) * (rows - 1)), k = Math.round((lon - lon_first) / (lon_last - lon_first) * (cols - 1));
    return r < 0 || r >= rows || k < 0 || k >= cols ? 0 : z[r * cols + k];
  };
  terrainCtl.setReal = real => { // 原始高度（1:1）↔ 放大
    terrainCtl.real = real;
    for (let i = 0; i < z.length; i++) { const h = z[i]; pos[i * 3 + 1] = h / 1000 * DEPTH_SCALE * (real ? 1 : (h > 0 ? LAND_EXAG : TERRAIN_EXAG)); }
    posAttr.needsUpdate = true; land.geometry.computeVertexNormals(); sea.geometry.computeVertexNormals();
    terrainCtl.onReal.forEach(f => f(real));
  };
  const sl = document.getElementById('opacity'), oc = document.getElementById('ocean');
  const upd = () => { m.opacity = +sl.value; land.visible = m.opacity > 0; sea.visible = land.visible && oc.checked; };
  sl.addEventListener('input', upd); oc.addEventListener('change', upd);
  return meta;
}

// ---- 縣市界線（plotdb/pdmaptw，已簡化）----
async function loadBoundary() {
  const gj = await (await fetch(import.meta.env.BASE_URL + 'data/county-2025-03-18.geojson')).json();
  const pts = [];
  const ring = rg => { for (let i = 0; i < rg.length - 1; i++) {
    const [a, b] = [rg[i], rg[i + 1]];
    pts.push(toX(a[0]), 0.3, toZ(a[1]), toX(b[0]), 0.3, toZ(b[1]));
  } };
  // 只畫落在地形範圍（118–124°E、20–27°N）內的界線；高雄市的東沙島（約 116.7°E）在地形外，會變成圖外一個孤立小白點
  const inMap = rg => rg.some(([lon, lat]) => lon >= MAP_BOUNDS.lon0 && lon <= MAP_BOUNDS.lon1 && lat >= MAP_BOUNDS.lat0 && lat <= MAP_BOUNDS.lat1);
  let skipped = 0;
  for (const f of gj.features) {
    const g = f.geometry; if (!g) continue;
    const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
    for (const p of polys) for (const rg of p) { if (inMap(rg)) ring(rg); else skipped++; }
  }
  window.__boundarySkipped = () => skipped;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const lines = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 }));
  lines.renderOrder = 3;
  lid.add(lines);
  const cb = $('county'), upd = () => { lines.visible = cb.checked; };  // 「縣市邊界」開關，與城市名稱各自獨立
  cb.addEventListener('change', upd); upd();
  window.__county = () => lines.visible;
  return gj;
}

// ---- 地震點：一次載入全部，篩選在 shader 裡做（不改原始 CSV）----
// 先讀精簡二進位 earthquakes.bin（手機記憶體負擔小、不必逐行拆字串），讀不到才退回 CSV；下載進度顯示在年份那一格
async function loadQuakes() {
  const base = import.meta.env.BASE_URL + 'data/', yt = $('yearText');
  let lastTxt = '';
  const prog = (got, total) => {
    const t = total ? `載入中… ${Math.min(99, Math.floor(got / total * 100))}%` : `載入中… ${(got / 1048576).toFixed(1)} MB`;
    if (t !== lastTxt) { yt.textContent = lastTxt = t; }
  };
  let Q;
  try {
    Q = parseQuakesBin(await fetchBytes(base + 'earthquakes.bin', prog, binTotalBytes), toX, toZ, DEPTH_SCALE);
  } catch (e) {
    console.warn('earthquakes.bin 讀取失敗，改讀 CSV', e);
    Q = parseQuakesCSV(new TextDecoder().decode(await fetchBytes(base + 'earthquakes.csv', prog)), toX, toZ, DEPTH_SCALE);
  }
  yt.textContent = '載入中…';
  const { n, pos, size, yearA, magA, depA, lonA, latA, ymdA, hmsA, big, m5, hist } = Q;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos.subarray(0, n * 3), 3));
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('size', new THREE.BufferAttribute(size.subarray(0, n), 1));
  g.setAttribute('year', new THREE.BufferAttribute(yearA.subarray(0, n), 1));
  g.setAttribute('mag', new THREE.BufferAttribute(magA.subarray(0, n), 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uY0: { value: SCOPE_DEFAULT.y0 }, uY1: { value: 2025 }, uM: { value: SCOPE_DEFAULT.mMin }, uNow: { value: -1 } },
    vertexShader: `
      attribute float size; attribute float year; attribute float mag;
      uniform float uY0, uY1, uM, uNow;
      varying vec3 vColor; varying float vA;
      void main(){
        if (year < uY0 || year >= uY1 + 1.0 || mag < uM) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
        float s = size; vColor = color; vA = clamp(0.12 + size / 12.0, 0.12, 0.9);
        if (uNow >= 0.0) { if (floor(year) == uNow) { s *= 1.4; vA = 0.95; } else { vA *= 0.55; } }
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(s * 900.0 / -mv.z, 1.0, 64.0); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `
      varying vec3 vColor; varying float vA;
      void main(){ vec2 d = gl_PointCoord - 0.5; if (dot(d, d) > 0.25) discard; gl_FragColor = vec4(vColor, vA); }`,
    vertexColors: true, transparent: true, depthWrite: false,
  });
  const pts = new THREE.Points(g, mat);
  pts.renderOrder = 1;
  scene.add(pts);
  return { n, g, mat, pts, yearA: yearA.subarray(0, n), depA: depA.subarray(0, n), magA: magA.subarray(0, n), sizeA: size.subarray(0, n), lonA, latA, ymdA, hmsA, big, m5, hist };
}

// ---- 最近的縣市（點在多邊形內＝該縣市；否則取最近頂點的縣市＋「外海」）----
function makeLocator(gj) {
  const polys = [];
  for (const f of gj.features) {
    const g = f.geometry; if (!g) continue;
    const ps = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
    for (const p of ps) polys.push({ name: f.properties.name, rings: p });
  }
  const inRing = (x, y, r) => { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [xi, yi] = r[i], [xj, yj] = r[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
  return (lon, lat) => {
    for (const p of polys) if (inRing(lon, lat, p.rings[0]) && !p.rings.slice(1).some(h => inRing(lon, lat, h))) return p.name;
    let best = null, bd = 1e18;
    for (const p of polys) for (const [x, y] of p.rings[0]) { const d = ((x - lon) * KM_LON) ** 2 + ((y - lat) * KM_LAT) ** 2; if (d < bd) { bd = d; best = p.name; } }
    return `${best}外海`;
  };
}

// ---- 被點選地震的標記：光圈＋到地表的垂直線 ----
function makeMarker() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'); x.strokeStyle = '#ffb347'; x.lineWidth = 10; x.beginPath(); x.arc(64, 64, 50, 0, Math.PI * 2); x.stroke();
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true, sizeAttenuation: false }));
  ring.scale.set(0.06, 0.06, 1); ring.renderOrder = 20;
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
  const line = new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0xffb347, depthTest: false, transparent: true }));
  line.renderOrder = 20;
  const grp = new THREE.Group(); grp.add(ring, line); grp.visible = false; scene.add(grp);
  return { grp, ring, set(q) { ring.position.set(q.x, q.y, q.z); lg.attributes.position.setXYZ(0, q.x, q.y, q.z); lg.attributes.position.setXYZ(1, q.x, 0, q.z); lg.attributes.position.needsUpdate = true; grp.visible = true; } };
}

// ---- 深度尺：東側一把垂直尺（0–350 公里，和深度框底部對齊）＋ 30／70／150 公里東西向虛線 ----
const depthRuler = (() => {
  const grp = new THREE.Group(), xW = toX(118), xE = toX(124), xR = xE + 8, z = 0, D = DEPTH_SCALE;
  const lineMat = new THREE.LineBasicMaterial({ color: 0xcfd8e6, transparent: true, opacity: 0.85 });
  const seg = pts => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); return g; };
  grp.add(new THREE.LineSegments(seg([xR, 0, z, xR, -350 * D, z]), lineMat)); // 尺身
  const ticks = [];
  for (let d = 0; d <= 350; d += 10) { const L = d % 50 === 0 ? 8 : 3; ticks.push(xR, -d * D, z, xR + L, -d * D, z); }
  for (const d of [30, 70, 150]) ticks.push(xR, -d * D, z, xR + 8, -d * D, z);
  grp.add(new THREE.LineSegments(seg(ticks), lineMat));
  const dash = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 8, gapSize: 6, transparent: true, opacity: 0.55 });
  for (const d of [30, 70, 150]) { const l = new THREE.Line(seg([xW, -d * D, z, xR, -d * D, z]), dash); l.computeLineDistances(); grp.add(l); }
  const label = (text, y, strong, west = false) => { // west：放在虛線西端、文字靠右
    const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
    x.font = `${strong ? 700 : 500} 34px system-ui, sans-serif`; x.textBaseline = 'middle'; x.textAlign = west ? 'right' : 'left';
    const tx = west ? 248 : 8;
    x.lineWidth = 6; x.strokeStyle = 'rgba(11,15,23,.9)'; x.strokeText(text, tx, 32); x.fillStyle = strong ? '#ffffff' : '#cfd8e6'; x.fillText(text, tx, 32);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true, sizeAttenuation: false }));
    sp.center.set(west ? 1 : 0, 0.5); sp.scale.set(0.09, 0.0225, 1); sp.position.set(west ? xW - 3 : xR + 11, y, z); sp.renderOrder = 15; grp.add(sp);
  };
  label('0 km', 0, false);
  for (const d of [30, 70, 150]) label(`${d} km`, -d * D, true);
  for (const d of [50, 100, 200, 250, 300]) label(`${d}`, -d * D, false);
  label('350 km', -350 * D, false);
  scene.add(grp); return grp;
})();
// ---- 深度框：地形範圍往下的淡色立方框＋每 50 公里一圈深度線，增加空間感（不擋震波：震波 depthTest 關閉、renderOrder 較高）----
const depthFrame = (() => {
  const grp = new THREE.Group(), D = DEPTH_SCALE, BOT = 350;
  const x0 = toX(MAP_BOUNDS.lon0), x1 = toX(MAP_BOUNDS.lon1), z0 = toZ(MAP_BOUNDS.lat1), z1 = toZ(MAP_BOUNDS.lat0), yb = -BOT * D;
  const seg = pts => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); return g; };
  const mat = op => new THREE.LineBasicMaterial({ color: 0x8fb4e6, transparent: true, opacity: op, depthWrite: false });
  const rect = y => [x0, y, z0, x1, y, z0, x1, y, z0, x1, y, z1, x1, y, z1, x0, y, z1, x0, y, z1, x0, y, z0];
  // 稜線：頂框（海平面）、底框、四根垂直邊
  const edges = [...rect(0), ...rect(yb)];
  for (const [x, z] of [[x0, z0], [x1, z0], [x1, z1], [x0, z1]]) edges.push(x, 0, z, x, yb, z);
  grp.add(new THREE.LineSegments(seg(edges), mat(0.2)));
  // 側面：每 50 公里一圈深度線
  const rings = []; for (let d = 50; d < BOT; d += 50) rings.push(...rect(-d * D));
  grp.add(new THREE.LineSegments(seg(rings), mat(0.075)));
  // 底面：每 1 度經緯線
  const floor = [];
  for (let lon = MAP_BOUNDS.lon0 + 1; lon < MAP_BOUNDS.lon1; lon++) floor.push(toX(lon), yb, z0, toX(lon), yb, z1);
  for (let lat = MAP_BOUNDS.lat0 + 1; lat < MAP_BOUNDS.lat1; lat++) floor.push(x0, yb, toZ(lat), x1, yb, toZ(lat));
  grp.add(new THREE.LineSegments(seg(floor), mat(0.05)));
  grp.children.forEach(o => { o.renderOrder = 0; });
  // 西南角垂直邊上的小深度字（很淡）
  for (const d of [100, 200, 300, 350]) {
    const c = document.createElement('canvas'); c.width = 128; c.height = 40; const x = c.getContext('2d');
    x.font = '500 24px system-ui, sans-serif'; x.textBaseline = 'middle'; x.textAlign = 'right'; x.fillStyle = '#a9c4ea'; x.fillText(`${d} km`, 120, 20);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, opacity: 0.4, depthWrite: false, sizeAttenuation: false }));
    sp.center.set(1, 0.5); sp.scale.set(0.045, 0.014, 1); sp.position.set(x0 - 4, -d * D, z1); sp.renderOrder = 0; grp.add(sp);
  }
  scene.add(grp);
  window.__frame = () => ({ visible: grp.visible, lines: grp.children.filter(o => o.isLineSegments).map(o => ({ n: o.geometry.attributes.position.count / 2, opacity: o.material.opacity })), bounds: { x0, x1, z0, z1, yb } });
  return grp;
})();
// 尺的東端跑出畫面（手機常見）時，在虛線碰到畫面右緣的位置補上深度標字
const rulerEdge = [30, 70, 150].map(d => {
  const el = document.createElement('div'); el.className = 'rulerTag'; el.textContent = `${d} km`; document.body.appendChild(el);
  return { d, el, a: new THREE.Vector3(toX(118), -d * DEPTH_SCALE, 0), b: new THREE.Vector3(toX(124) + 8, -d * DEPTH_SCALE, 0) };
});
const _ra = new THREE.Vector3(), _rb = new THREE.Vector3();
// 玉山標示（真實高度 3,952 m；地形網格約 1.85 公里一格，山頂會被平均掉）
const YUSHAN = { lon: 120.957, lat: 23.470, h: 3952 };
const yushanEl = document.createElement('div'); yushanEl.className = 'peakTag'; document.body.appendChild(yushanEl);
const _yv = new THREE.Vector3();
const yushanLine = document.createElement('div'); yushanLine.className = 'peakLine'; document.body.appendChild(yushanLine);
const _yv2 = new THREE.Vector3(), YUSHAN_MIN = 26; // 指引線最短長度（px）
function updateYushan() {
  const k = terrainCtl.real ? 1 : LAND_EXAG;
  const yh = `<b>玉山</b> 3,952 m${eduBtn('yushan')}<br><span>${terrainCtl.real ? '原始高度' : `高度 ×${LAND_EXAG}`}</span>`;
  if (yushanEl._h !== yh) { yushanEl.innerHTML = yh; yushanEl._h = yh; }  // 內容變了才重寫，(i) 按鈕才點得到
  _yv.set(toX(YUSHAN.lon), YUSHAN.h / 1000 * DEPTH_SCALE * k + lid.position.y, toZ(YUSHAN.lat)).project(camera);
  const vis = _yv.z < 1 && Math.abs(_yv.x) < 1.05 && Math.abs(_yv.y) < 1.05;
  yushanEl.style.display = vis ? 'block' : 'none';
  // 指引線：從標籤底部拉到地形上的玉山位置（網格把山頂平均掉，所以標籤會浮在地形上方）
  // 預設視角下兩點只差約 5 px，線會被淺色山體吃掉；所以標籤至少放在山頂上方 YUSHAN_MIN px，線一定看得到
  let lv = false;
  if (vis) {
    let x1 = (_yv.x + 1) / 2 * innerWidth, y1 = (1 - _yv.y) / 2 * innerHeight;
    _yv2.set(toX(YUSHAN.lon), Math.max(0, terrainCtl.heightAt(YUSHAN.lon, YUSHAN.lat)) / 1000 * DEPTH_SCALE * k + lid.position.y, toZ(YUSHAN.lat)).project(camera);
    if (_yv2.z < 1) {
      const x2 = (_yv2.x + 1) / 2 * innerWidth, y2 = (1 - _yv2.y) / 2 * innerHeight;
      if (Math.hypot(x2 - x1, y2 - y1) < YUSHAN_MIN) { x1 = x2; y1 = y2 - YUSHAN_MIN; }
      const len = Math.hypot(x2 - x1, y2 - y1);
      lv = true; yushanLine.style.height = len + 'px'; yushanLine.style.transform = `translate(${x1}px, ${y1}px) rotate(${Math.atan2(x1 - x2, y2 - y1)}rad)`;
    }
    yushanEl.style.transform = `translate(-50%, -100%) translate(${x1}px, ${y1}px)`;
  }
  yushanLine.style.display = lv ? 'block' : 'none';
}
// 指北針：投影「目標點→北方」到螢幕算角度；點一下轉回正北朝上（保留俯仰角與距離）
const compassEl = document.createElement('button'); compassEl.id = 'compass'; compassEl.title = '點一下轉回北方朝上';
compassEl.innerHTML = '<svg viewBox="-24 -24 48 48" width="48" height="48"><circle r="21" fill="rgba(15,20,30,.72)" stroke="rgba(255,255,255,.35)"/><g id="cneedle"><path d="M0,-17 L6,0 L0,-3 L-6,0Z" fill="#ff3b30"/><path d="M0,17 L6,0 L0,3 L-6,0Z" fill="#cfd8e6"/><text y="-8" text-anchor="middle" font-size="0" fill="#fff"></text></g></svg><span id="cN">N</span>';
document.body.appendChild(compassEl);
const _c0 = new THREE.Vector3(), _c1 = new THREE.Vector3(); let compassDeg = 0;
function updateCompass() {
  const t = controls.target; _c0.copy(t).project(camera); _c1.set(t.x, t.y, t.z - 50).project(camera);
  const dx = (_c1.x - _c0.x) * innerWidth, dy = -(_c1.y - _c0.y) * innerHeight;
  if (Math.hypot(dx, dy) < 1e-3) return;
  compassDeg = Math.atan2(dx, -dy) * 180 / Math.PI;
  $('cneedle').setAttribute('transform', `rotate(${compassDeg.toFixed(1)})`);
  const r = 15, a = compassDeg * Math.PI / 180; $('cN').style.transform = `translate(${(r + 13) * Math.sin(a)}px, ${-(r + 13) * Math.cos(a)}px)`;
}
compassEl.addEventListener('click', () => {
  const t = controls.target, off = camera.position.clone().sub(t), rh = Math.hypot(off.x, off.z);
  const a0 = Math.atan2(off.x, off.z), t0 = performance.now(), D = 600;
  let da = -a0; if (da > Math.PI) da -= 2 * Math.PI; if (da < -Math.PI) da += 2 * Math.PI;
  const tick = () => { const k = Math.min(1, (performance.now() - t0) / D), e = 1 - Math.pow(1 - k, 3), a = a0 + da * e;
    camera.position.set(t.x + rh * Math.sin(a), camera.position.y, t.z + rh * Math.cos(a)); controls.update(); if (k < 1) requestAnimationFrame(tick); };
  tick();
});
window.__compass = () => compassDeg;
// 回到預設視角（平滑飛回 HOME）＋限制旋轉中心不被拖離台灣太遠
const homeEl = document.createElement('button'); homeEl.id = 'homeBtn'; homeEl.title = '回到預設視角';
homeEl.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M6 10v9h12v-9"/></svg><span>回預設視角</span>';
document.body.appendChild(homeEl);
homeEl.addEventListener('click', () => {
  const H = narrow() ? [0, 1047, 1147] : [0, 579, 679];
  fly = { start: performance.now(), p0: camera.position.clone(), t0: controls.target.clone(), p1: new THREE.Vector3(...H), t1: new THREE.Vector3(0, -100, 0) };
});
// 視角按鈕：台灣鳥瞰（正上方）、地底剖面（由南往北）、琉球隱沒帶（由東往西），約 0.8 秒平滑移動
const VIEWS = {
  top:   { d: [[0, 1180, 330], [0, 1700, 470]], t: [0, -60, 20] }, // 台灣鳥瞰：北朝上、略帶斜度
  east:  { d: [[1150, 60, -50], [1700, 120, -50]], t: [0, -165, -50] },
  south: { d: [[30, 60, 1150], [30, 120, 1700]], t: [30, -165, 0] },
};
let curView = null;
const markView = v => { curView = v; for (const b of document.querySelectorAll('.vb')) b.classList.toggle('on', b.dataset.view === v); };
const goView = v => {
  const V = VIEWS[v]; if (!V) return;
  fly = { start: performance.now(), dur: 800, p0: camera.position.clone(), t0: controls.target.clone(), p1: new THREE.Vector3(...V.d[narrow() ? 1 : 0]), t1: new THREE.Vector3(...V.t) };
  markView(v);
};
document.querySelectorAll('.vb').forEach(b => b.addEventListener('click', () => goView(b.dataset.view)));
controls.addEventListener('start', () => { fly = null; markView(null); }); // 自己拖曳就取消亮起的視角
homeEl.addEventListener('click', () => markView(null));
window.__goView = goView; window.__view = () => curView;
const TGT_MIN = new THREE.Vector3(toX(118.5), -320, toZ(26.5)), TGT_MAX = new THREE.Vector3(toX(123.5), 20, toZ(20.5));
controls.addEventListener('change', () => {
  const t = controls.target, c = t.clone().clamp(TGT_MIN, TGT_MAX);
  if (!c.equals(t)) { const d = c.sub(t); t.add(d); camera.position.add(d); }
});
function updateRulerTags() {
  const W = innerWidth, H = innerHeight;
  for (const r of rulerEdge) {
    let show = false;
    if (depthRuler.visible) {
      _ra.copy(r.a).project(camera); _rb.copy(r.b).project(camera);
      const ax = (_ra.x + 1) / 2 * W, ay = (1 - _ra.y) / 2 * H, bx = (_rb.x + 1) / 2 * W, by = (1 - _rb.y) / 2 * H;
      const front = _ra.z < 1 && _rb.z < 1, edge = W - 6;
      const [lx, ly, rx, ry] = ax < bx ? [ax, ay, bx, by] : [bx, by, ax, ay]; // 左、右端
      if (front && rx > edge && lx < edge) { // 尺那端在畫面外：標在右緣
        const y = ly + (ry - ly) * (edge - lx) / (rx - lx);
        if (y > 40 && y < H - 90) { show = true; r.el.style.transform = `translate(-100%, -120%) translate(${edge}px, ${y}px)`; }
      }
    }
    r.el.style.display = show ? 'block' : 'none';
  }
}

// ---- 縣市名稱：貼在地形表面（跟著原始高度／放大、掀開地形）----
// 22 縣市，位置約在縣市政府所在地；依重要性排序，拉遠時重疊的後面幾個先不顯示
const CITIES = [['台北市', 121.564, 25.037], ['台中市', 120.647, 24.162], ['高雄市', 120.312, 22.621], ['花蓮縣', 121.601, 23.991], ['台南市', 120.185, 22.992],
  ['台東縣', 121.146, 22.756], ['新竹市', 120.968, 24.806], ['嘉義市', 120.449, 23.480], ['宜蘭縣', 121.754, 24.752],
  ['新北市', 121.465, 25.012], ['桃園市', 121.301, 24.993], ['基隆市', 121.744, 25.131], ['屏東縣', 120.488, 22.668], ['苗栗縣', 120.821, 24.560],
  ['彰化縣', 120.542, 24.076], ['南投縣', 120.684, 23.902], ['雲林縣', 120.527, 23.700], ['新竹縣', 121.004, 24.827], ['嘉義縣', 120.333, 23.459],
  ['澎湖縣', 119.566, 23.570], ['金門縣', 118.317, 24.437], ['連江縣', 119.950, 26.160]]
  .map(([name, lon, lat]) => { const el = document.createElement('div'); el.className = 'cityTag'; el.textContent = name; document.body.appendChild(el); return { name, lon, lat, el }; });
const _cv = new THREE.Vector3();
function updateCities() {
  const on = $('cities').checked, k = terrainCtl.real ? 1 : LAND_EXAG, boxes = [];
  const ysBox = yushanEl.style.display !== 'none' ? (r => [r.left, r.top, r.right, r.bottom])(yushanEl.getBoundingClientRect()) : null;
  for (const c of CITIES) { if (c === CITIES[1] && ysBox) boxes.push(ysBox); // 台北市優先於玉山標籤，其餘縣市讓玉山 // 依重要性排序；拉遠時字會擠在一起，和已顯示的標籤重疊就先不顯示
    let vis = false;
    if (on) {
      _cv.set(toX(c.lon), Math.max(0, terrainCtl.heightAt(c.lon, c.lat)) / 1000 * DEPTH_SCALE * k + lid.position.y, toZ(c.lat)).project(camera);
      vis = _cv.z < 1 && Math.abs(_cv.x) < 1.02 && Math.abs(_cv.y) < 1.02;
      if (vis) {
        const x = (_cv.x + 1) / 2 * innerWidth, y = (1 - _cv.y) / 2 * innerHeight + 4, hw = c.name.length * 6 + 2, b = [x - hw, y - 22, x + hw, y];
        vis = !boxes.some(o => b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]);
        if (vis) { boxes.push(b); c.el.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`; }
      }
    }
    c.el.style.display = vis ? 'block' : 'none';
  }
}
window.__cities = () => CITIES.map(c => ({ name: c.name, shown: c.el.style.display !== 'none' }));
let updateCard = () => {}; // 點選卡片跟著震源移動（資料載入後才設定）

// ---- 震波：規模 5 以上響起時，從震源一圈圈往外擴散，地表震央也跟著擴散 ----
const waves = [];
const waveGeo = new THREE.RingGeometry(0.9, 1, 64); waveGeo.rotateX(-Math.PI / 2);
function shockwave(e) {
  const k = Math.min(1, Math.max(0, (e.mag - 5) / 2.5)), R = 18 + 42 * k, now = performance.now();
  const add = (y, delay, color, life) => {
    const m = new THREE.Mesh(waveGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthTest: false, depthWrite: false, side: THREE.DoubleSide }));
    m.position.set(e.x, y, e.z); m.renderOrder = 25; m.visible = false; scene.add(m);
    waves.push({ m, t0: now + delay, life, R });
  };
  for (let i = 0; i < 3; i++) add(e.y, i * 220, 0xfff1c9, 1300 + 900 * k);          // 震源三圈
  add(lid.position.y + 0.5, 250 + (-e.y) * 4, 0xffb347, 1500 + 900 * k);           // 傳到地表的震央圈（越深越晚）
}
function updateWaves(now) {
  for (let i = waves.length - 1; i >= 0; i--) {
    const w = waves[i], t = (now - w.t0) / w.life;
    if (t < 0) continue;
    if (t >= 1) { scene.remove(w.m); w.m.material.dispose(); waves.splice(i, 1); continue; }
    const r = 1.5 + w.R * (1 - (1 - t) ** 2); // 先快後慢
    w.m.visible = true; w.m.scale.set(r, 1, r); w.m.material.opacity = 0.9 * (1 - t);
  }
}
window.__waves = () => waves.length;

// ---- 規模 7 以上：播放時特別標示（紅色光柱＋震源紅圈＋文字標籤＋上方提示）----
const alerts = [];
const m7Toast = $('m7toast');
let m7ToastFadeUntil = 0;
let m7ToastAlert;
let visiblePlateLabels = () => [];
const m7ToastObstacles = [
  $('bigYear'), $('panel'), $('rank'), $('compass'), $('homeBtn'), $('timebar'),
  $('qcard'), $('fcard'), document.querySelector('#mapbar .in'),
  yushanEl, yushanLine, ...rulerEdge.map(r => r.el), ...CITIES.map(c => c.el),
];
const alertRingTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'); x.strokeStyle = '#ff3b30'; x.lineWidth = 12; x.beginPath(); x.arc(64, 64, 48, 0, Math.PI * 2); x.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
// 台灣慣用的地震名稱（依日期）；沒有通用名稱的用「年份＋地點」
const QUAKE_NAMES = {
  '1935-04-21': '新竹－臺中地震',
  '1941-12-17': '中埔地震',
  '1951-10-22': '花東縱谷地震',
  '1951-11-25': '花東縱谷地震',
  '1999-09-21': '921 大地震',
  '2024-04-03': '0403 花蓮地震',
};
const quakeName = (q, place) => QUAKE_NAMES[q.dt.slice(0, 10)] || `${q.yr} ${place}地震`;
function m7Alert(q, place, life) {
  const now = performance.now(), top = Math.max(lid.position.y, 0) + 70;
  const grp = new THREE.Group();
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute([q.x, q.y, q.z, q.x, top, q.z], 3));
  const line = new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0xff3b30, depthTest: false, transparent: true }));
  const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: alertRingTex, depthTest: false, transparent: true, sizeAttenuation: false }));
  ring.position.set(q.x, q.y, q.z);
  line.renderOrder = ring.renderOrder = 30; grp.add(line, ring); scene.add(grp);
  const label = document.createElement('div'); label.className = 'm7label';
  const name = quakeName(q, place);
  label.innerHTML = `<b>${name}</b><br>${q.yr} 年　M${q.mag.toFixed(1)}`;
  document.body.appendChild(label);
  $('m7toastText').textContent = `⚠ ${q.yr} 年　${name}　M${q.mag.toFixed(1)}`; m7Toast.classList.add('show');
  clearTimeout(m7Toast._t);
  m7Toast._t = setTimeout(() => {
    m7Toast.classList.remove('show');
    m7ToastFadeUntil = performance.now() + 200;
  }, life);
  m7ToastAlert = {
    grp, label, t0: now, life,
    top: new THREE.Vector3(q.x, top, q.z),
    surface: new THREE.Vector3(q.x, lid.position.y, q.z),
  };
  alerts.push(m7ToastAlert);
}
const _v = new THREE.Vector3();
function m7MapBounds() {
  const width = innerWidth, height = innerHeight;
  const boxes = [];
  const add = (kind, position, w, h, anchorX = 0.5, anchorY = 0.5) => {
    _v.copy(position).project(camera);
    if (_v.z < -1 || _v.z > 1) return;
    const left = (_v.x + 1) * width / 2 - w * anchorX;
    const top = (1 - _v.y) * height / 2 - h * (1 - anchorY);
    boxes.push({ kind, left, top, right: left + w, bottom: top + h });
  };
  // These ruler labels are canvas textures on sprites with constant screen size.
  const scale = camera.projectionMatrix.elements[5] * height / 2;
  for (const group of [depthRuler, depthFrame]) {
    if (!group.visible) continue;
    for (const sprite of group.children.filter(o => o.isSprite)) {
      add('ruler', sprite.position, sprite.scale.x * scale, sprite.scale.y * scale, sprite.center.x, sprite.center.y);
    }
  }
  for (const sprite of visiblePlateLabels()) {
    const position = sprite.getWorldPosition(new THREE.Vector3());
    const depth = -_v.copy(position).applyMatrix4(camera.matrixWorldInverse).z;
    if (depth > 0) add('plate', position, sprite.scale.x * scale / depth, sprite.scale.y * scale / depth);
  }
  const markers = [...alerts];
  if (m7ToastAlert && !alerts.includes(m7ToastAlert)) markers.push(m7ToastAlert);
  for (const { grp, surface } of markers) {
    const ring = grp.children[1];
    add('hypocenter', ring.position, ring.scale.x * scale, ring.scale.y * scale);
    surface.y = lid.position.y; // Same surface as the epicenter shockwave.
    add('epicenter', surface, 40, 40);
  }
  return boxes.filter(box => box.right > 0 && box.left < width && box.bottom > 0 && box.top < height);
}
window.__m7MapBounds = m7MapBounds;

function placeM7Toast() {
  const { width, height } = m7Toast.getBoundingClientRect();
  const preferredX = (innerWidth - width) / 2;
  const preferredY = m7Toast.offsetTop;
  const gap = 8;
  const blockers = [...m7ToastObstacles, ...alerts.map(a => a.label)]
    .map(el => el.getBoundingClientRect())
    .filter(box => box.width && box.height);
  blockers.push(...m7MapBounds());

  // The closest clear rectangle touches either the preferred coordinate or an obstacle/viewport edge.
  const xs = [preferredX, gap, innerWidth - width - gap, ...blockers.flatMap(box => [box.left - width - gap, box.right + gap])];
  const ys = [preferredY, gap, innerHeight - height - gap, ...blockers.flatMap(box => [box.top - height - gap, box.bottom + gap])];
  let best = Infinity, left, top;
  for (const x of xs) {
    if (x < gap || x + width > innerWidth - gap) continue;
    const dx = (x - preferredX) ** 2;
    if (dx >= best) continue;
    const column = blockers.filter(box => x + width + gap > box.left && x < box.right + gap);
    for (const y of ys) {
      const distance = dx + (y - preferredY) ** 2;
      if (distance >= best || y < gap || y + height > innerHeight - gap) continue;
      if (column.some(box => y + height + gap > box.top && y < box.bottom + gap)) continue;
      best = distance;
      left = x;
      top = y;
    }
  }
  m7Toast.toggleAttribute('data-blocked', best === Infinity);
  if (best !== Infinity) {
    m7Toast.style.setProperty('--m7-toast-x', `${left - preferredX}px`);
    m7Toast.style.setProperty('--m7-toast-y', `${top - preferredY}px`);
  }
}
function updateAlerts(now) {
  for (let i = alerts.length - 1; i >= 0; i--) {
    const a = alerts[i], t = (now - a.t0) / a.life;
    if (t >= 1) { scene.remove(a.grp); a.grp.children.forEach(o => { o.geometry?.dispose(); o.material.dispose(); }); a.label.remove(); alerts.splice(i, 1); continue; }
    const fade = t < 0.1 ? t / 0.1 : t > 0.75 ? (1 - t) / 0.25 : 1, pulse = 0.5 + 0.5 * Math.sin(now / 110);
    const [line, ring] = a.grp.children;
    line.material.opacity = fade * (0.6 + 0.4 * pulse);
    ring.material.opacity = fade; ring.scale.setScalar(0.05 + 0.03 * pulse);
    _v.copy(a.top).project(camera);
    const vis = _v.z < 1 && Math.abs(_v.x) < 1.1 && Math.abs(_v.y) < 1.1;
    a.label.style.display = vis ? 'block' : 'none';
    a.label.style.transform = `translate(-50%, -100%) translate(${(_v.x + 1) / 2 * innerWidth}px, ${(1 - _v.y) / 2 * innerHeight - 6}px)`;
    a.label.style.opacity = fade;
  }
}
window.__alerts = () => alerts.map(a => ({ text: a.label.textContent, shown: a.label.style.display !== 'none' }));

// ---- 低頻音效（WebAudio，預設靜音）----
const audio = { ctx: null, on: false, tones: 0 };
// 地鳴聲：低通濾波的棕色噪音（隆隆）＋次低音正弦＋緩慢起伏，規模越大越低、越長、越大聲
const noiseBufs = new WeakMap();
function brownNoise(ctx) {
  if (noiseBufs.has(ctx)) return noiseBufs.get(ctx);
  const n = ctx.sampleRate * 3, buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
  let last = 0; for (let i = 0; i < n; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
  noiseBufs.set(ctx, buf); return buf;
}
function tone(mag, when, ctx = audio.ctx) {
  if (!ctx) return;
  const k = Math.min(1, Math.max(0, (mag - 5) / 2.5));
  const t0 = ctx.currentTime + 0.02 + when, atk = 0.12 + 0.2 * k, dur = 1.2 + 2.3 * k, peak = 0.5 + 0.4 * k;
  const out = ctx.createGain(); out.connect(ctx.destination);
  out.gain.setValueAtTime(0.0001, t0); out.gain.exponentialRampToValueAtTime(peak, t0 + atk); out.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  // 隆隆聲：棕色噪音經低通（約 220→140 Hz），手機喇叭也聽得到但很悶
  const ns = ctx.createBufferSource(); ns.buffer = brownNoise(ctx); ns.loop = true;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 0.8;
  lp.frequency.setValueAtTime(220 - 60 * k, t0); lp.frequency.exponentialRampToValueAtTime(110, t0 + dur);
  const roll = ctx.createGain(); roll.gain.value = 1.6;
  const lfo = ctx.createOscillator(), lfoG = ctx.createGain(); lfo.frequency.value = 5 - 2 * k; lfoG.gain.value = 0.8; // 每秒 3–5 次起伏
  lfo.connect(lfoG).connect(roll.gain);
  ns.connect(lp).connect(roll).connect(out);
  // 次低音：50→30 Hz 正弦，往下滑
  const sub = ctx.createOscillator(), subG = ctx.createGain(); sub.type = 'sine';
  sub.frequency.setValueAtTime(55 - 15 * k, t0); sub.frequency.exponentialRampToValueAtTime(30 - 5 * k, t0 + dur); subG.gain.value = 0.5;
  sub.connect(subG).connect(out);
  for (const node of [ns, lfo, sub]) { node.start(t0, node === ns ? Math.random() * 2 : undefined); node.stop(t0 + dur + 0.05); }
  if (ctx === audio.ctx) {
    audio.tones++;
    if (navigator.vibrate) setTimeout(() => { if (audio.on) navigator.vibrate(Math.round(120 + 280 * k)); }, Math.max(0, when * 1000)); // 震動（Android；iPhone Safari 不支援）
  }
}
window.__renderSeq = async (ev, secs) => { // 測試用：離線合成一串地鳴
  const oc = new OfflineAudioContext(1, 44100 * secs, 44100); for (const [m, t] of ev) tone(m, t, oc);
  return Array.from((await oc.startRendering()).getChannelData(0));
};
window.__renderTone = async mag => { // 測試用：離線算出一聲的頻譜分布
  const sr = 44100, oc = new OfflineAudioContext(1, sr * 4, sr); tone(mag, 0, oc);
  const d = (await oc.startRendering()).getChannelData(0); let peak = 0; for (const x of d) peak = Math.max(peak, Math.abs(x));
  const band = (lo, hi) => { let e = 0; const N = 8192, st = sr * 0.3 | 0; for (let f = lo; f < hi; f += 5) { let re = 0, im = 0; for (let i = 0; i < N; i++) { const w = 2 * Math.PI * f * i / sr; re += d[st + i] * Math.cos(w); im += d[st + i] * Math.sin(w); } e += re * re + im * im; } return e; };
  const b = [band(15, 70), band(70, 250), band(250, 600), band(600, 2000)], tot = b.reduce((x, y) => x + y);
  return { peak: +peak.toFixed(3), shares: b.map(x => +(x / tot * 100).toFixed(1)) };
};
// iPhone 解鎖：必須在點擊（click）當下建立／恢復 AudioContext，並播一段無聲音訊
let keepAlive = null;
function silentWav() { // 0.5 秒無聲 WAV（8 kHz、8-bit）
  const n = 4000, buf = new Uint8Array(44 + n), v = new DataView(buf.buffer), w = (o, s) => [...s].forEach((c, i) => buf[o + i] = c.charCodeAt(0));
  w(0, 'RIFF'); v.setUint32(4, 36 + n, true); w(8, 'WAVEfmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 8000, true); v.setUint32(28, 8000, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); w(36, 'data'); v.setUint32(40, n, true); buf.fill(128, 44);
  return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
}
function unlockAudio() {
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {} // iOS 17+：靜音鍵開著也能出聲
  if (!keepAlive) { keepAlive = new Audio(silentWav()); keepAlive.loop = true; keepAlive.setAttribute('playsinline', ''); } // 較舊 iOS：用媒體聲道避開靜音鍵
  keepAlive.play().catch(() => {});
  const C = window.AudioContext || window.webkitAudioContext;
  if (!audio.ctx) audio.ctx = new C();
  const ctx = audio.ctx;
  const sb = ctx.createBufferSource(); sb.buffer = ctx.createBuffer(1, 1, 22050); sb.connect(ctx.destination); sb.start(0); // 經典 iOS 解鎖
  return ctx.state === 'running' ? Promise.resolve() : ctx.resume();
}
// 點選地震的科技感提示音（Web Audio 即時合成，無外部音檔）；規模越大音越低
function uiBlip(mag = 4) {
  try {
    unlockAudio(); const ctx = audio.ctx, t0 = ctx.currentTime + 0.01;
    const base = 1400 * Math.pow(0.86, Math.max(0, mag - 3));
    const out = ctx.createGain(); out.gain.value = 0.18; out.connect(ctx.destination);
    const ping = (f0, f1, at, dur, type, vol) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type;
      o.frequency.setValueAtTime(f0, t0 + at); o.frequency.exponentialRampToValueAtTime(f1, t0 + at + dur * 0.6);
      g.gain.setValueAtTime(0.0001, t0 + at); g.gain.exponentialRampToValueAtTime(vol, t0 + at + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
      o.connect(g).connect(out); o.start(t0 + at); o.stop(t0 + at + dur + 0.02);
    };
    ping(base * 0.5, base, 0, 0.09, 'square', 0.25);          // 短促上揚「嗶」
    ping(base * 1.5, base * 1.5, 0.085, 0.22, 'sine', 0.6);   // 清亮「滴」
    ping(base * 3, base * 3.02, 0.085, 0.12, 'sine', 0.15);   // 高泛音
  } catch (e) { console.warn('blip', e); }
}
window.__blip = uiBlip;
$('sound').addEventListener('click', e => {
  audio.on = e.target.checked;
  if (audio.on) unlockAudio().then(() => tone(5.2, 0)).catch(err => console.warn('audio', err)); // 打開時先響一聲
  else keepAlive?.pause();
});

(async () => {
  try {
    const [, gj, Q] = await Promise.all([loadTerrain(), loadBoundary(), loadQuakes()]);
    const locate = makeLocator(gj);
    const marker = makeMarker();
    const Y_END = Math.max(...Q.hist.keys());
    let scope = SCOPE_DEFAULT, magV = 3, colorMode = 'depth', year = Y_END, playing = null, selected = null, rankItems = [];
    const U = Q.mat.uniforms;

    // 顏色
    const colorAttr = Q.g.attributes.color;
    const applyColors = () => {
      const pal = PALETTES[colorMode].map(c => new THREE.Color(c)), arr = colorAttr.array, tmp = new THREE.Color();
      for (let i = 0; i < Q.n; i++) {
        let c;
        if (colorMode === 'year') {
          const t = Math.min(1, Math.max(0, (Q.yearA[i] - scope.y0) / (Y_END + 1 - scope.y0))) * (pal.length - 1);
          const k = Math.min(pal.length - 2, Math.floor(t)); c = tmp.copy(pal[k]).lerp(pal[k + 1], t - k);
        } else { let p = 0; while (Q.depA[i] > DEPTH_EDGES[p]) p++; c = pal[p]; }
        arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
      }
      colorAttr.needsUpdate = true;
      const P = PALETTES[colorMode];
      $('legend').innerHTML = colorMode === 'year'
        ? `<div class="grad" style="background:linear-gradient(90deg,${P.join(',')})"></div><div class="gl"><span>${scope.y0}</span><span>${Y_END}</span></div>`
        : P.map((c, i) => `<div><span class="sw" style="background:${c}"></span>${DEPTH_LABELS[i]}</div>`).join('');
    };
    $('colorMode').addEventListener('change', e => { colorMode = e.target.value; applyColors(); });

    // 時間軸（累積顯示：從起始年一路累積到目前年份，當年的點較亮）
    const ys = $('year');
    // 「只顯示單一年份」：只畫目前年份的點（不累積），播放時一年一年換
    const soloEl = $('solo'), solo = () => soloEl.checked;
    const mEff = () => magV; // 最小規模（滑桿；一般 3.0 起，「顯示全部資料」時 0 起）
    const yearN = y => { const h = Q.hist.get(y); return h ? h[Math.round(magV * 2)] : 0; };
    const count = () => { let s = 0; for (let y = solo() ? year : scope.y0; y <= year; y++) s += yearN(y); return s; };
    // 時間軸上方的每年筆數長條圖（跟著資料範圍）
    const bars = $('yearBars');
    const renderBars = () => {
      let mx = 1; for (let y = scope.y0; y <= Y_END; y++) mx = Math.max(mx, yearN(y));
      let h = ''; for (let y = scope.y0; y <= Y_END; y++) h += `<i data-y="${y}" title="${y} 年：${yearN(y).toLocaleString()} 筆" style="height:${(yearN(y) / mx * 100).toFixed(1)}%"></i>`;
      bars.innerHTML = h;
    };
    const markBars = () => { for (const b of bars.children) { const y = +b.dataset.y; b.classList.toggle('cur', y === year); b.classList.toggle('fut', solo() ? y !== year : y > year); } };
    const refreshTime = () => {
      const so = solo();
      U.uY0.value = so ? year : scope.y0; U.uM.value = mEff(); U.uY1.value = year;
      const hl = !so && (playing || year < Y_END); U.uNow.value = hl ? year : -1;
      ys.min = scope.y0; ys.max = Y_END; ys.value = year;
      $('bigYear').textContent = year; $('bigYear').classList.toggle('on', !!(hl || so));
      $('yearText').textContent = so || year === scope.y0 ? `${year} 年` : `${scope.y0}–${year} 年`;
      $('countText').innerHTML = `<span class="long">　</span>${count().toLocaleString()} 筆${hl ? `<span class="long">，亮點＝${year} 年</span>` : ''}`;
      $('magNote').textContent = `目前顯示 ${count().toLocaleString()} 筆`;
      markBars(); closeCardIfHidden();
    };
    const step = () => {
      if (audio.on) {
        const ev = Q.m5.filter(e => e.yr === year && e.mag >= Math.max(6, mEff())).sort((a, b) => b.mag - a.mag).slice(0, 8); // 每年最多 8 聲
        const ms = stepMs();
        for (const e of ev) { tone(e.mag, e.frac * ms / 1000); setTimeout(() => shockwave(e), e.frac * ms); }
      }
      if (playing) { // 規模 7 以上：不論聲音開關都標示
        const ms = stepMs(), life = 1800; // 短暫出現約 1.8 秒
        for (const q of Q.big.filter(q => q.yr === year && q.mag >= 7 && q.mag >= mEff())) {
          setTimeout(() => { if (!playing) return; holdUntil = Math.max(holdUntil, performance.now() + life + 250); m7Alert(q, locate(q.lon, q.lat), life); if (!audio.on) shockwave(q); }, ((+q.dt.slice(5, 7) - 1) * 31 + (+q.dt.slice(8, 10) - 1)) / 372 * ms); // 依月日落在這一年的時間點
        }
        // 右側 Top10：播放到該筆時，對應的那一列短暫加紅框
        rankItems.forEach((q, i) => {
          if (q.yr !== year) return;
          setTimeout(() => {
            if (!playing) return;
            const li = $('rankList').children[i]; if (!li) return;
            li.classList.add('live'); li.scrollIntoView({ block: 'nearest' });
            clearTimeout(li._t); li._t = setTimeout(() => li.classList.remove('live'), life + 250);
          }, ((+q.dt.slice(5, 7) - 1) * 31 + (+q.dt.slice(8, 10) - 1)) / 372 * ms);
        });
      }
      refreshTime();
    };
    const STEP_MS = 700; // 1x：每年 0.7 秒
    const SPEEDS = [0.25, 0.5, 1, 2];
    let speed = 1, holdUntil = 0, loop = false, endWait = 0; // loop：播到最後一年停約 2 拍，再從頭開始
    const stepMs = () => STEP_MS / speed;
    const startTimer = () => { clearInterval(playing); playing = setInterval(() => { const t = performance.now(); if (t < holdUntil || (alerts.length && t < holdUntil + 1500)) return; if (year >= Y_END) { if (!loop) return stop(); if (++endWait < 3) return; endWait = 0; year = scope.y0; step(); return; } year++; step(); }, stepMs()); }; // M7 標示期間停在當年
    const stop = () => { clearInterval(playing); playing = null; $('play').textContent = '▶'; $('play').ariaLabel = '播放'; refreshTime(); };
    const play = () => {
      if (year >= Y_END) year = scope.y0;
      startTimer();
      $('play').textContent = '❚❚'; $('play').ariaLabel = '暫停'; step();
    };
    $('speed').addEventListener('click', () => {
      speed = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
      $('speed').textContent = `${speed}x`; $('speed').ariaLabel = `播放速度 ${speed} 倍`;
      if (playing) startTimer(); // 播放中切換，直接用新速度繼續
    });
    window.__speed = () => ({ speed, stepMs: stepMs() });
    $('loop').addEventListener('click', e => { loop = !loop; endWait = 0; e.currentTarget.setAttribute('aria-pressed', loop); });
    window.__loop = () => loop;
    $('play').addEventListener('click', () => { if (audio.on) unlockAudio().catch(() => {}); playing ? stop() : play(); });
    ys.addEventListener('input', () => { if (playing) stop(); year = +ys.value; refreshTime(); });
    soloEl.addEventListener('change', refreshTime);
    bars.addEventListener('pointerup', e => { // 用指尖的 x 位置換算年份（手機的點擊會被瀏覽器「校正」到隔壁長條）
      const r = bars.getBoundingClientRect(), n = bars.children.length, k = Math.floor((e.clientX - r.left - 7) / (r.width - 14) * n);
      if (k < 0 || k >= n) return; if (playing) stop(); year = scope.y0 + k; refreshTime();
    });
    window.__bars = () => Object.fromEntries([...bars.children].map(b => [b.dataset.y, { n: yearN(+b.dataset.y), h: b.style.height, cur: b.classList.contains('cur') }]));

    // 排行榜（依規模，範圍跟著資料範圍）
    const fmtLoc = q => `${q.lat.toFixed(2)}°N ${q.lon.toFixed(2)}°E`;
    const renderRank = () => {
      rankItems = Q.big.filter(q => q.yr >= scope.y0 && q.mag >= magV).sort((a, b) => b.mag - a.mag || a.dt.localeCompare(b.dt)).slice(0, 10)
        .map(q => ({ ...q, place: locate(q.lon, q.lat) }));
      $('rankScope').textContent = `${scope.y0}–${Y_END} 年`;
      $('rankList').innerHTML = rankItems.map((q, i) => `<li data-i="${i}"><div class="m">${q.mag.toFixed(1)}</div><div class="d">${q.dt.slice(0, 10)}<i class="sp">　</i><b class="pl">${q.place}</b><br class="xb"><span>深 ${Math.round(q.dep)} 公里 · ${fmtLoc(q)}</span></div></li>`).join('');
      selected = null; marker.grp.visible = false;
    };
    const flyTo = q => {
      const dir = camera.position.clone().sub(controls.target).normalize();
      const tgt = new THREE.Vector3(q.x, q.y, q.z);
      fly = { start: performance.now(), p0: camera.position.clone(), t0: controls.target.clone(), p1: tgt.clone().add(dir.multiplyScalar(320)), t1: tgt };
    };
    $('rankList').addEventListener('click', e => {
      const li = e.target.closest('li'); if (!li) return;
      if (selected === +li.dataset.i && marker.grp.visible) { clearRankSel(); return; } // 再點一次同一筆就取消
      const q = rankItems[+li.dataset.i]; selected = +li.dataset.i;
      for (const el of $('rankList').children) el.classList.toggle('sel', el === li);
      if (playing) stop();
      if (solo() ? year !== q.yr : year < q.yr) { year = solo() ? q.yr : Y_END; refreshTime(); }
      marker.set(q); flyTo(q);
      const i = findIdx(q.dt, q.mag); if (i >= 0) openCard(i); // 跟點地圖一樣跳出資料卡
    });
    function clearRankSel() { selected = null; marker.grp.visible = false; for (const el of $('rankList').children) el.classList.remove('sel'); closeCard(); }
    const setRank = open => {
      $('rank').classList.toggle('open', open);
      if (open && narrow()) { $('panel').classList.add('collapsed'); $('collapse').textContent = '設定'; }
      // 手機上排行榜蓋住下半部，把畫面中心往上移，讓選到的地震不被擋住
      if (open && narrow()) camera.setViewOffset(innerWidth, innerHeight, 0, innerHeight * 0.1, innerWidth, innerHeight); else camera.clearViewOffset();
      if (!open) { marker.grp.visible = false; selected = null; for (const el of $('rankList').children) el.classList.remove('sel'); }
    };
    $('rankBtn').addEventListener('click', () => setRank(!$('rank').classList.contains('open')));
    $('rankClose').addEventListener('click', () => setRank(false));

    // 顯示全部資料
    $('allData').addEventListener('change', e => {
      if (playing) stop();
      scope = e.target.checked ? SCOPE_ALL : SCOPE_DEFAULT; year = Y_END;
      const ms = $('magMin'); ms.min = scope.mMin < 0 ? 0 : 3; if (magV < +ms.min) magV = +ms.min; ms.value = magV; magTicks();
      applyColors(); renderRank(); renderBars(); refreshTime(); magLabel();
    });

    // 規模篩選：全部／≥4／≥5／≥6（和年份、單一年份、播放、顯示全部資料一起作用）
    const magLabel = () => { $('magVal').textContent = magV === 0 ? '全部規模' : `M${magV.toFixed(1)} 以上`; };
    const magTicks = () => { const ms = $('magMin'); let h = ''; for (let k = +ms.min; k <= +ms.max; k++) h += `<span>${k}</span>`; $('magTicks').innerHTML = h; };
    let rankKey = '';
    const setMag = (v, final = true) => {
      const ms = $('magMin'); magV = Math.min(+ms.max, Math.max(+ms.min, Math.round(v * 2) / 2)); ms.value = magV;
      magLabel(); renderBars(); refreshTime();
      if (final) { const k = Q.big.filter(q => q.yr >= scope.y0 && q.mag >= magV).length; if (k !== rankKey) { rankKey = k; renderRank(); } } // Top10 只在名單變動時重排
    };
    $('magMin').addEventListener('input', e => setMag(+e.target.value, false));
    $('magMin').addEventListener('change', e => setMag(+e.target.value, true));
    window.__setMag = setMag;

    // ---- 點一下地震：找畫面上最近的「目前看得到的」點（12 px 內），跳出資料卡 ----
    const card = $('qcard'), _m = new THREE.Matrix4(), _p = new THREE.Vector3();
    let picked = -1;
    const visibleIdx = i => Q.yearA[i] >= U.uY0.value && Q.yearA[i] < U.uY1.value + 1 && Q.magA[i] >= U.uM.value;
    const pick = (cx, cy) => {
      camera.updateMatrixWorld(); _m.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      const e = _m.elements, v = camera.matrixWorldInverse.elements, P = Q.g.attributes.position.array, W = innerWidth, H = innerHeight, pr = renderer.getPixelRatio();
      let best = -1, bs = 1e9, inBest = -1, inM = -1, inD = 1e9;
      for (let i = 0; i < Q.n; i++) {
        if (!visibleIdx(i)) continue;
        const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
        const w = e[3] * x + e[7] * y + e[11] * z + e[15]; if (w <= 0) continue;
        const sx = ((e[0] * x + e[4] * y + e[8] * z + e[12]) / w + 1) / 2 * W, sy = (1 - (e[1] * x + e[5] * y + e[9] * z + e[13]) / w) / 2 * H;
        const d = Math.hypot(sx - cx, sy - cy); if (d > 70) continue;
        const mvz = -(v[2] * x + v[6] * y + v[10] * z + v[14]);
        const r = Math.min(64, Math.max(1, Q.sizeA[i] * 900 / mvz)) / 2 / pr; // 和 shader 一樣的點大小（CSS px 半徑）
        if (d <= r) { // 點在圓圈內：規模最大的優先（同規模取較近者）
          const m = Q.magA[i];
          if (m > inM || (m === inM && d < inD)) { inM = m; inD = d; inBest = i; }
        } else if (d <= 12 && d < bs) { bs = d; best = i; } // 都沒點進圓圈裡時，才用 12 px 內最近的
      }
      return inBest >= 0 ? inBest : best;
    };
    const pad = (n, l) => String(n).padStart(l, '0');
    const fmtDT = i => { const d = Q.ymdA[i], t = Q.hmsA[i]; return `${(d / 1e4) | 0}-${pad(((d / 100) | 0) % 100, 2)}-${pad(d % 100, 2)} ${pad((t / 1e4) | 0, 2)}:${pad(((t / 100) | 0) % 100, 2)}:${pad(t % 100, 2)}`; };
    const findIdx = (dt, mag) => { for (let i = 0; i < Q.n; i++) if (Math.abs(Q.magA[i] - mag) < 0.01 && fmtDT(i) === dt) return i; return -1; };
    const quakeInfo = i => {
      const dt = fmtDT(i), mag = Q.magA[i], lon = Q.lonA[i], lat = Q.latA[i];
      const name = mag >= 7 ? QUAKE_NAMES[dt.slice(0, 10)] || null : null; // 只用程式裡已有的名稱（M7 標示用的那張表）
      return { i, dt, lon: +lon.toFixed(3), lat: +lat.toFixed(3), mag: +mag.toFixed(2), dep: +Q.depA[i].toFixed(2), place: locate(lon, lat), name };
    };
    const P3 = i => ({ x: Q.g.attributes.position.array[i * 3], y: Q.g.attributes.position.array[i * 3 + 1], z: Q.g.attributes.position.array[i * 3 + 2] });
    // 地震小知識的掛勾：921 → 卡 6；資料裡震源最深的一筆 → 卡 4（依資料算，不寫死）
    let deepIdx = 0; for (let i = 1; i < Q.n; i++) if (Q.depA[i] > Q.depA[deepIdx]) deepIdx = i;
    edu.deepKm = () => Q.depA[deepIdx];
    window.__deep = () => quakeInfo(deepIdx);
    const eduHook = q => q.dt.startsWith('1999-09-21') && q.mag >= 7 ? eduBtn(6, '這是什麼？') : q.i === deepIdx ? eduBtn(4, '為什麼這麼深？') : '';
    // 只對 2012-12-08 22:26:54、深度 ≥311 km 這一筆。比對年月日時分秒與深度，不用陣列索引。
    const depthCompareLink = i => (Q.ymdA[i] === 20121208 && Q.hmsA[i] === 222654 && Q.depA[i] >= 311)
      ? `<a href="./depth-compare.html" target="_blank" rel="noopener">深度示意</a>` : '';
    const openCard = i => {
      const q = quakeInfo(i); picked = i;
      $('qbody').innerHTML = `${q.name ? `<div class="qn">${q.name}</div>` : ''}<div class="qm">M ${q.mag.toFixed(1)}</div><div>${q.dt}</div><div>${q.place}</div>`
        + `<div class="qs">${q.lat.toFixed(2)}°N ${q.lon.toFixed(2)}°E · 深 ${+q.dep.toFixed(1)} 公里</div>` + depthCompareLink(i) + eduHook(q);
      card.classList.add('show'); marker.set(P3(i)); updateCard(); uiBlip(q.mag);
    };
    const closeCard = () => { if (picked < 0) return; picked = -1; card.classList.remove('show'); if (selected === null) marker.grp.visible = false; };
    function closeCardIfHidden() { if (picked >= 0 && !visibleIdx(picked)) closeCard(); }
    updateCard = () => {
      if (picked < 0) return;
      const q = P3(picked); _p.set(q.x, q.y, q.z).project(camera);
      if (_p.z > 1 || Math.abs(_p.x) > 1.05 || Math.abs(_p.y) > 1.05) { card.style.visibility = 'hidden'; return; }
      card.style.visibility = '';
      const sx = (_p.x + 1) / 2 * innerWidth, sy = (1 - _p.y) / 2 * innerHeight, w = card.offsetWidth, h = card.offsetHeight;
      let lx = sx + 14, ly = sy - h - 14;
      if (lx + w > innerWidth - 8) lx = sx - w - 14;
      if (ly < 8) ly = sy + 14;
      card.style.left = `${Math.max(8, Math.min(innerWidth - w - 8, lx))}px`; card.style.top = `${Math.max(8, Math.min(innerHeight - h - 8, ly))}px`;
    };
    card.querySelector('.x').addEventListener('click', () => { if (selected !== null) clearRankSel(); else closeCard(); });
    { // 只有「點一下」（移動 < 5 px、單指）才選取，拖曳旋轉不算
      const cv = renderer.domElement, down = new Map(); let tap = null;
      cv.addEventListener('pointerdown', e => { down.set(e.pointerId, 1); tap = down.size === 1 ? { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now() } : null; });
      const up = e => {
        down.delete(e.pointerId);
        if (!tap || tap.id !== e.pointerId || e.type === 'pointercancel') { if (e.pointerId === tap?.id) tap = null; return; }
        const dist = Math.hypot(e.clientX - tap.x, e.clientY - tap.y), dt = performance.now() - tap.t; tap = null;
        // 手機：設定面板展開時，在地圖上輕點一下（< 10 px、< 300 ms）只收合面板，不選地震
        if (narrow() && !$('panel').classList.contains('collapsed')) { if (dist < 10 && dt < 300) setPanelCollapsed(true); return; }
        const ok = dist < 5 && dt < 600;
        if (!ok) return;
        const lk = platePick?.(e.clientX, e.clientY);  // 先看是不是點到板塊/海溝標籤
        if (lk) { window.__eduOpen?.(lk); return; }
        const hit = faultPick?.(e.clientX, e.clientY);
        const i = pick(e.clientX, e.clientY);
        if (hit && (i < 0 || hit.d <= 12)) { closeCard(); showFaultTip(hit.name, e.clientX, e.clientY, true); return; }
        if (i >= 0) { closeFaultTip(); openCard(i); return; }
        closeCard(); closeFaultTip();
      };
      cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    }
    window.__pick = (x, y) => { const i = pick(x, y); return i < 0 ? null : quakeInfo(i); };
    window.__card = () => picked < 0 ? null : { ...quakeInfo(picked), text: $('qbody').textContent, shown: card.classList.contains('show') };
    window.__project = i => { camera.updateMatrixWorld(); const q = P3(i); _p.set(q.x, q.y, q.z).project(camera); return [(_p.x + 1) / 2 * innerWidth, (1 - _p.y) / 2 * innerHeight]; };
    window.__find = (dt) => { for (let i = 0; i < Q.n; i++) if (fmtDT(i) === dt) return i; return -1; };

    applyColors(); renderRank(); renderBars(); refreshTime();
    window.__state = () => ({ scope, magMin: mEff(), year, playing: !!playing, colorMode, visible: count(), uniforms: { y0: U.uY0.value, y1: U.uY1.value, m: U.uM.value, now: U.uNow.value },
      rankOpen: $('rank').classList.contains('open'), rank: rankItems.map(q => ({ dt: q.dt, mag: q.mag, dep: q.dep, place: q.place })), selected,
      marker: marker.grp.visible ? marker.ring.position.toArray() : null, target: controls.target.toArray(), camera: camera.position.toArray(), sound: audio.on, tones: audio.tones });
    // v0.5.10：電腦版（寬 1200 以上）右側直接展開「規模最大前 10 名」；按 ✕ 收起，左側按鈕可再打開；較窄視窗與手機維持收起
    if (!narrow() && innerWidth >= 1200) setRank(true);
    window.__QUAKE_READY__ = { quakes: Q.n, years: [Math.min(...Q.hist.keys()), Y_END], visible: count() };
    window.__introDone?.();
    // v0.5.10：開場淡出時自動從資料範圍起點（預設 1990）靜音播放；使用者已先操作時間軸就不自動播放
    let autoTouched = false;
    for (const [id, ev] of [['play', 'click'], ['year', 'input'], ['yearBars', 'pointerup'], ['allData', 'change']]) $(id).addEventListener(ev, () => { autoTouched = true; }, { capture: true });
    const autoStart = () => { if (autoTouched || playing) return; year = scope.y0; play(); window.__autoplay = { started: performance.now(), year0: year, sound: audio.on }; };
    if (!document.getElementById('intro') || window.__introFaded) autoStart(); else window.addEventListener('introfade', autoStart, { once: true });
  } catch (e) {
    console.error(e); setStatus('載入失敗：' + e.message);
    $('yearText').textContent = '資料載入失敗，請重新整理';
    window.__introDone?.(true); // 失敗：立刻收掉開場，讓失敗文字看得到
    window.__QUAKE_READY__ = { error: String(e) };
  }
})();

// ---- 板塊疊圖（預設關閉；第一次勾選才載入，見 src/plates.js）----
var platePick = null;  // 板塊載入後：點 3D 標籤 → 小卡代號
{
  const cb = $('plates'), lg = $('platesLegend');
  const sw = (c, t) => `<div><span class="sw" style="background:${c};opacity:.8"></span>${t}</div>`;
  const ln = (c, t) => `<div><span class="ln" style="background:${c}"></span>${t}</div>`;
  const lnDash = (c, t) => `<div><span class="ln dash" style="border-top-color:${c}"></span>${t}</div>`;
  lg.innerHTML = '<div class="lbl">板塊</div>' + sw(PLATE_COLORS.PS, '菲律賓海板塊' + eduBtn('ps')) + sw(PLATE_COLORS.EU, '歐亞板塊' + eduBtn('eu'))
    + ln('#ffffff', '海溝' + eduBtn('ryu', '琉球') + eduBtn('man', '馬尼拉')) + lnDash(PLATE_TRANSFORM.color, PLATE_TRANSFORM.label) + ln('#b6ff7a', '沖繩海槽' + eduBtn('oki')) + ln('#ffd166', '碰撞帶（示意）' + eduBtn('col'))
    + '<div><span class="sw" style="background:linear-gradient(135deg,' + PLATE_COLORS.PS + ',' + PLATE_COLORS.EU + ');opacity:.45"></span>地下半透明的面＝往下插的板塊' + eduBtn('slab') + '</div>';
  let plates = null, loading = null;
  cb.addEventListener('change', async () => {
    lg.style.display = cb.checked ? '' : 'none';
    if (!plates) {
      loading ||= initPlates({ scene, lid, toX, toZ, DEPTH_SCALE, TERRAIN_EXAG, LAND_EXAG }).catch(e => { console.error(e); setStatus('板塊資料載入失敗：' + e.message); });
      plates = await loading; if (!plates) return;
      plates.setReal(terrainCtl.real); terrainCtl.onReal.push(r => plates.setReal(r));
      platePick = (x, y) => plates.pickLabel(x, y, camera);
      window.__plateLabels = () => { camera.updateMatrixWorld(); return plates.labelScreen(camera); };
      visiblePlateLabels = plates.visibleLabelSprites;
      window.__PLATES_READY__ = { slabs: plates.slabs, boundaries: plates.boundaries };
    }
    plates.setVisible(cb.checked);
  });
}

// ---- 活動斷層（預設關閉；第一次勾選才載入，見 src/faults.js）----
var faultPick = null, faultTick = null, showFaultTip = () => {}, closeFaultTip = () => {};
{
  const cb = $('faults'), tip = $('fcard');
  let faults = null, loading = null, sticky = false, cur = null;
  const html = name => `<div class="fn">${name}</div><div class="fk">活動斷層</div>`
    + `<div class="fw">位置為示意，非精確</div>`
    + `<div class="fw">更新世晚期（距今約十萬年）以來曾活動，未來可能再活動</div>`
    + `<div class="fs">來源：<a href="https://fault.gsmma.gov.tw/About/Fault_map" target="_blank" rel="noopener">經濟部地質調查及礦業管理中心</a></div>`;
  const place = (x, y) => {
    const w = tip.offsetWidth, h = tip.offsetHeight;
    let lx = x + 14, ly = y - h - 12;
    if (lx + w > innerWidth - 8) lx = x - w - 14;
    if (ly < 8) ly = y + 14;
    tip.style.left = `${Math.max(8, Math.min(innerWidth - w - 8, lx))}px`;
    tip.style.top = `${Math.max(8, Math.min(innerHeight - h - 8, ly))}px`;
  };
  showFaultTip = (name, x, y, stick) => {
    cur = name; if (stick) sticky = true;
    tip.innerHTML = html(name); tip.classList.add('show'); place(x, y); faults?.setSelected(name);
  };
  closeFaultTip = () => { cur = null; sticky = false; tip.classList.remove('show'); faults?.setSelected(null); };
  const load = async () => {
    if (faults) return faults;
    // Share initialization as well as the fetch: pending toggles must not
    // register terrain callbacks repeatedly when the same load completes.
    loading ||= initFaults({ scene, lid, toX, toZ, DEPTH_SCALE, TERRAIN_EXAG, LAND_EXAG }).then(f => {
      faults = f;
      faults.setReal(terrainCtl.real); terrainCtl.onReal.push(r => faults.setReal(r));
      faultPick = (x, y) => faults.pick(x, y, camera);
      faultTick = t => faults.tick(t);
      window.__faultSel = () => faults.selected();
      window.__FAULTS_READY__ = { names: faults.names, count: faults.count };
      window.__faultPoint = name => { camera.updateMatrixWorld(); return faults.project(name, camera); };
      return faults;
    }).catch(e => { console.error(e); setStatus('斷層資料載入失敗：' + e.message); });
    return loading;
  };
  cb.addEventListener('change', async () => {
    if (!cb.checked) { if (faults) faults.setVisible(false); closeFaultTip(); return; }
    const f = await load(); if (!f) { cb.checked = false; return; }
    f.setVisible(cb.checked); // Use the latest intent, not the pre-await state.
  });
  // 桌面：滑過就顯示（拖曳旋轉時不跳）
  renderer.domElement.addEventListener('pointermove', e => {
    if (!cb.checked || !faults || e.buttons) return;
    if (e.pointerType === 'touch') return;
    const hit = faults.pick(e.clientX, e.clientY, camera);
    if (hit) showFaultTip(hit.name, e.clientX, e.clientY, false);
    else if (!sticky) closeFaultTip();
  });
  window.__fault = () => cur && tip.classList.contains('show') ? { name: cur, text: tip.textContent } : null;
  window.__setFaults = async on => { cb.checked = !!on; cb.dispatchEvent(new Event('change')); if (on) { const f = await load(); return f ? { names: f.names, count: f.count } : null; } return { off: true }; };
}

const edu = { deepKm: () => null };
initEdu({ deepKm: () => edu.deepKm() });

renderer.setAnimationLoop(() => {
  if (fly) {
    const t = Math.min(1, (performance.now() - fly.start) / (fly.dur || 1200)), e = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
    camera.position.lerpVectors(fly.p0, fly.p1, e); controls.target.lerpVectors(fly.t0, fly.t1, e);
    if (t >= 1) fly = null;
  }
  controls.update(); camera.updateMatrixWorld();
  const now = performance.now(); updateWaves(now); updateAlerts(now); updateRulerTags(); updateYushan(); updateCompass(); updateCities(); updateCard(); faultTick?.(now);
  if (m7ToastAlert) {
    if (m7Toast.classList.contains('show') || now < m7ToastFadeUntil) placeM7Toast();
    else m7ToastAlert = undefined;
  }
  renderer.render(scene, camera);
});
$('ruler').addEventListener('change', e => { depthRuler.visible = e.target.checked; });
{ // 「方框格線」開關（深度框）：預設開，記在 localStorage
  const cb = $('frameBox'), KEY = 'tq3d.frameBox';
  try { if (localStorage.getItem(KEY) === '0') cb.checked = false; } catch {}
  const upd = () => { depthFrame.visible = cb.checked; };
  cb.addEventListener('change', () => { upd(); try { localStorage.setItem(KEY, cb.checked ? '1' : '0'); } catch {} }); upd();
}
window.__setCam = (p, t) => { camera.position.set(...p); controls.target.set(...t); controls.update(); }; // 測試用
$('realH').addEventListener('change', e => terrainCtl.setReal(e.target.checked));
window.__real = () => terrainCtl.real;
