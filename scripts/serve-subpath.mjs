// [新建 / NEW in handoff] 以 GitHub Pages 相同的子路徑 /tw-quake3d/ 提供 dist/，用來預覽與跑測試。
// 用法：node scripts/serve-subpath.mjs [dir=dist] [port=4173]  ->  http://127.0.0.1:4173/tw-quake3d/
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const dir = path.resolve(process.argv[2] || 'dist'); const port = +(process.argv[3] || process.env.PORT || 4173); const PREFIX = '/tw-quake3d/';
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.json':'application/json', '.geojson':'application/json', '.csv':'text/csv; charset=utf-8', '.bin':'application/octet-stream', '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml' };
http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (u === '/tw-quake3d') { res.writeHead(301, { Location: PREFIX }); return res.end(); }
  if (!u.startsWith(PREFIX)) { res.writeHead(404); return res.end('not found (site lives under /tw-quake3d/)'); }
  let f = path.join(dir, u.slice(PREFIX.length)); if (!f.startsWith(dir)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  fs.stat(f, (e, st) => { if (e) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream', 'Content-Length': st.size }); fs.createReadStream(f).pipe(res); });
}).listen(port, '127.0.0.1', () => console.log(`serving ${dir} at http://127.0.0.1:${port}${PREFIX}`));
