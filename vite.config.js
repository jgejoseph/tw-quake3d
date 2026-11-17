// [新建 / NEW in handoff] 原始專案沒有 vite.config.js，正式版一直是用 `vite build --base ./` 建置。
// 這裡把 base 固定為 './'，讓 `npm run build` 與正式版建置結果逐位元組相同。
// 不要改成 '/'：GitHub Pages 網址在子路徑 /tw-quake3d/ 底下，用絕對路徑會讓網站卡在「載入中…」（v0.5.10 曾發生）。
import { defineConfig } from 'vite';
import { dataIntegrityPlugin } from './scripts/verify-data.mjs';
export default defineConfig({ base: './', plugins: [dataIntegrityPlugin()] });
