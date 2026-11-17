# CODEX_HANDOFF — 3D 台灣地震時空圖譜（tw-quake3d）開發交接

> **[新建 / NEW in handoff]** 本文件是交接時新寫的說明，不是原始開發文件。
> 專案擁有者：jgejoseph。任何會影響正式網站、科學資料或授權的變更，都要專案擁有者同意。

## 0. 版本基準（請先讀）

| 項目 | 值 |
|---|---|
| 正式網站 | https://jgejoseph.github.io/tw-quake3d/ |
| 正式版（production baseline） | **v0.5.11**，`main` commit `3dca77d50121af076575204b871bfb2b058247e4` |
| 正式版檔案 sha256 | `index.html` = `9f7a2bb73c97f4fd2e126e8cfd8a691b258e84c889d48c0d76ab793d6113bb44`；`assets/index-Bop1Cbbb.js` = `6bc0cedab09bf5551275a1c47b20b86ba31ac15c41e158315fc7b8e920fcedfc` |
| 前一版 | v0.5.10 hotfix，`main` commit `c30b99cae026dc71ea7dcb56a1bbd17bf53f0b03`（`index.html` = `d5bc7702…`，JS 同上） |
| 開發起點分支 | **`handoff/full-source-v0510`**（本分支） |

本分支的 commit 結構：

1. `v0.5.10 original source` — 正式版 v0.5.10 實際使用的原始開發檔案，**未修改**。用 `vite build --base ./` 建置，結果與 `c30b99c` 的 `index.html`、JS 逐位元組相同（已驗證）。
2. `v0.5.11: distinct mobile panel background` — 手機版設定面板底色（＋`mobile_panel_check.mjs`）。建置結果與 `3dca77d` 逐位元組相同（已驗證）。
3. `handoff scaffolding` — 交接時**新建或修改**的檔案（見第 2 節），不影響建置產物（已驗證 `npm run build` 仍產生相同 sha256）。

## 1. 專案架構與主要檔案

純前端靜態網站：Three.js 0.170 ＋ Vite 6.4.6（`package-lock.json` 鎖版本），沒有後端、沒有框架。

| 路徑 | 用途 | 來源 |
|---|---|---|
| `index.html` | Vite 入口；所有 CSS（`<style>`）、HTML 介面（設定面板、工具列、時間軸、前 10 名、資料來源）都在這裡 | 原始 |
| `src/main.js` | 主程式：座標換算、場景／相機／OrbitControls、地形、震源點（自訂 ShaderMaterial）、時間軸播放、篩選、前 10 名、縣市、深度尺、開場動畫、自動播放、電腦版工具列、音效 | 原始 |
| `src/quakedata.js` | 讀 `data/earthquakes.bin`（優先）或 `earthquakes.csv`（備援），轉成繪圖陣列；兩條路結果相同 | 原始 |
| `src/plates.js` | 板塊疊圖：Slab2 隱沒板塊面＋PB2002 板塊邊界（預設關閉） | 原始 |
| `src/faults.js` | 活動斷層疊圖（示意位置，預設關閉） | 原始 |
| `src/edu.js` | 「地震小知識」與地圖小卡文字＋官方連結 | 原始 |
| `public/data` → `../data` | 符號連結，讓 Vite 把 `data/` 當靜態檔提供與複製到 `dist/data/` | 原始 |
| `data/` | 執行時讀取的資料（見第 4 節） | 原始（與 main 相同） |
| `scripts/build_csv.py`、`csv2bin.mjs`、`build_terrain.py`、`build_plates.py`、`fetch_cwa.sh`、`scripts_fetch.sh` | 資料下載與轉檔流程 | 原始 |
| `scripts/test_*.mjs`、`t_*.mjs`、`screenshot*.mjs`、`shot_bar.mjs`、`dot.mjs` | 早期臨時測試／截圖腳本，**未維護**，路徑寫死 `/workspace/tw-quake3d/...` | 原始 |
| `reg56.mjs` | 主要回歸測試（資料筆數、規模篩選、視角、時間軸、前 10 名、斷層、手機面板） | 原始（交接時加 `CHROME_PATH`） |
| `v0510_check.mjs` | v0.5.10 版面／自動播放／工具列／年份與紅色提示不重疊 | 原始（交接時加 `CHROME_PATH`、`SHOT_DIR`） |
| `v0510_lay.mjs` | 各寬度版面量測（只印數字、不判定） | 原始（同上） |
| `mobile_panel_check.mjs` | v0.5.11 手機面板底色檢查 | v0.5.11 新增 |
| `README.md`、`THIRD_PARTY_NOTICES.md` | 網站說明、資料來源與授權、第三方授權聲明 | 原始（與 main 相同） |
| `vite.config.js`、`.nvmrc`、`.gitignore`、`scripts/serve-subpath.mjs`、`scripts/run-tests.mjs`、`CODEX_HANDOFF.md`；`package.json` 的 `scripts`／`engines` | 交接用 | **新建／修改（交接時）** |

重要常數（`src/main.js` 開頭）：場景單位＝公里；原點 121°E、23.5°N；`DEPTH_SCALE = 1`（深度不誇張）；`LAND_EXAG = 15`、`TERRAIN_EXAG = 5`（地形高度放大）；深度分級 `DEPTH_EDGES = [15, 30, 70, 150]` 公里與色盤 `PALETTES`；預設範圍 `SCOPE_DEFAULT = { y0: 1990, mMin: 3 }`。點大小在 `src/quakedata.js`：`min(40, 1.2 × 1.75^(M−1))`；點的透明度、混色（`transparent: true, depthWrite: false`）在 `main.js` 的 shader。

## 2. 交接時新建或修改的檔案（不是原始開發檔）

- `vite.config.js`：只設 `base: './'`。原始專案沒有這個檔，正式版是用 CLI `vite build --base ./` 建置；兩者產物相同。
- `.nvmrc`（`24`）、`package.json` 的 `engines`（`node >=20`）：正式版是用 Node v24.22.1、npm 11.21.1 建置。
- `package.json` 的 `scripts`：`build` 改由 `vite.config.js` 帶 base；`preview` 改為子路徑伺服器；新增 `test`、`test:live`。`version` 欄位仍是原本的 `0.2.0`，未更新（不影響建置）。
- `.gitignore`。
- `scripts/serve-subpath.mjs`：把 `dist/` 放在 `http://127.0.0.1:4173/tw-quake3d/`，與 GitHub Pages 相同子路徑。
- `scripts/run-tests.mjs`：起伺服器並依序跑 3 組測試。
- `reg56.mjs`、`v0510_check.mjs`、`v0510_lay.mjs`、`mobile_panel_check.mjs`：只改了 Chrome 路徑可用 `CHROME_PATH` 指定、截圖改寫到 `SHOT_DIR`（預設 `test-results/`），測試邏輯不變。
- `CODEX_HANDOFF.md`（本文件）。

## 3. 安裝、建置、預覽、測試

```bash
nvm use            # Node 24（>=20 應可）
npm ci             # 依 package-lock.json 安裝（three 0.170.0、vite 6.4.6、playwright-core）
npm run build      # = vite build（base './'）→ dist/
npm run preview    # http://127.0.0.1:4173/tw-quake3d/
npm test           # 起子路徑伺服器 + reg56 / v0510_check / mobile_panel_check
npm run dev        # 開發伺服器 http://127.0.0.1:5173/
```

- 測試用 `playwright-core` 開本機 Chrome（預設 `/usr/bin/google-chrome`，可用 `CHROME_PATH=/path/to/chrome` 指定；可用 `npx playwright-core install chromium` 取得 Chromium），以 SwiftShader 軟體 WebGL 執行，一輪約 5–6 分鐘。
- 測正式站：`npm run test:live`（`BASE=https://jgejoseph.github.io/tw-quake3d/`）。
- 交接時已驗證的數字：地震總數 **933,305**；預設篩選（1990 起、M≥3）**75,147**；M3/M4/M5/M6/M7 = 75,147 / 10,634 / 1,338 / 146 / 6。

## 4. 資料

執行時讀取（全部已在 repo，單檔 < 100 MB，不用 LFS）：

| 檔案 | 大小 | 產生方式 | 來源／授權（詳見 README） |
|---|---|---|---|
| `data/earthquakes.csv` | 41.1 MB | `scripts/build_csv.py`（合併下列原始檔） | 中央氣象署地震活動彙整＋氣象資料開放平臺 E-A0073-001/002（政府資料開放授權條款） |
| `data/earthquakes.bin` | 18.7 MB | `node scripts/csv2bin.mjs` | 同上（由 CSV 轉出） |
| `data/terrain_int16.bin`、`terrain_meta.json` | 304 KB、1 KB | `scripts/build_terrain.py` | NOAA ETOPO 2022（CC0） |
| `data/plates.json`、`plates_grid.bin` | 104 KB、152 KB | `scripts/build_plates.py` | USGS Slab2（公有領域）、PB2002 / fraxen（ODC-BY 1.0） |
| `data/faults.json` | 19 KB | 依地礦中心 WMS 影像人工描繪簡化（無腳本） | 地礦中心 2021 活動斷層分布圖（政府資料開放授權條款） |
| `data/county-2025-03-18.geojson` | 56 KB | 取自 plotdb/pdmaptw 簡化版 | 內政部國土測繪中心縣市界（政府資料開放授權條款）、pdmaptw（MIT） |

**未納入**：`data/raw/`（約 67 MB 原始下載檔：氣象署逐年 CSV、開放資料 JSON/XML/ZIP、ETOPO 子集、Slab2、PB2002）。重新取得方式：
- 氣象署地震活動彙整：`scripts/fetch_cwa.sh`（呼叫 `scripts_fetch.sh`，向 https://scweb.cwa.gov.tw/zh-tw/history/csv 逐年查詢，1935–2026，範圍 118–124°E、20–27°N、深度 0–350 km）。
- 氣象資料開放平臺 E-A0073-001 / E-A0073-002：需要使用者自己的授權碼，**一律從環境變數 `CWA_API_KEY` 讀取，不得寫進任何檔案、腳本或 commit**；原始下載是手動進行，沒有留下腳本。
- ETOPO 2022：URL 見 `build_terrain.py` 輸出的 `terrain_meta.json`。Slab2、PB2002：見 README 的 DOI／連結。
- 注意：上述原始腳本路徑寫死 `/workspace/tw-quake3d/`，重跑前要先改成相對路徑（屬於功能修改，需另開 PR）。

## 5. GitHub Pages 部署方式（只有專案擁有者同意才可做）

- 部署來源：**`main` 分支的根目錄**（GitHub 內建 `pages-build-deployment`，「Deploy from a branch」；repo 沒有 `.github/workflows`）。其他分支不會發布。
- 正式站檔案就是 `main` 根目錄的 `index.html`、`assets/`、`data/`、`.nojekyll`、README 等。
- 發布步驟：`npm ci && npm run build` → 只把 `dist/index.html` 與 `dist/assets/` 覆蓋到 `main` 根目錄（刪掉舊的 `assets/index-*.js`）；`data/` 有變動才另外更新。發布前比對 sha256，發布後用正式網址跑 `npm run test:live`。
- **base 一定要是 `./`**。用預設 `/` 建置會讓網站去 `/assets/...` 找檔案，正式站會卡在「載入中…」（v0.5.10 曾發生，已以 `c30b99c` 修正）。
- 不要更改 GitHub Pages 設定。

## 6. 不可擅自改動的規則

1. **科學資料與視覺定義**：地震筆數與內容、座標換算（原點、`KM_LAT`/`KM_LON`）、深度（`DEPTH_SCALE = 1`）、地形放大倍數、深度分級與色盤、點大小公式、透明度與混色、預設範圍（1990 起、M≥3）、板塊／斷層／縣市資料，**未經專案擁有者同意一律不得改**。測試中的 933,305 / 75,147 等數字改變即視為違規。
2. **資料來源與授權文字**（README「資料來源」「使用限制」、THIRD_PARTY_NOTICES）不得刪減。
3. **獨立開發**：本專案靈感來自 101事務所的影片，但為獨立開發。**不得下載、閱讀、參考或重用 101事務所／studio-101 的任何程式碼或素材。**
4. **不得新增或更改授權（LICENSE）**：專案擁有者尚未決定授權方式。
5. **不得提交任何機密**：API 金鑰（含 `CWA_API_KEY`）、Token、帳號密碼、`.env`、雲端環境設定、私人或公司資料。提交前請 `git grep` 檢查。
6. 不得直接修改 `main`、合併 PR、發布網站或更改 Pages 設定。

## 7. 已知問題與待改善

- 電腦版寬度約 641–900 px 且前 10 名打開時，上方工具列會換行並超出可用區域（v0.5.10 已知）。
- `package.json` 的 `version` 仍是 `0.2.0`，沒有對應網站版本號；頁面上也沒有顯示版本。
- 單一 JS 檔約 590 KB（Vite 會警告 >500 kB），尚未拆分。
- 測試只在 headless Chrome＋SwiftShader 跑過；iPhone／Android 實機觸控、效能、iOS 靜音開關對音效的影響尚未驗證。
- `scripts/` 的資料腳本與早期測試腳本路徑寫死，不可直接重跑。
- `data/raw/` 不在 repo；開放資料平臺下載沒有腳本。
- 地震資料只到 2026-09-30；2025-03-01 06:36 之後只有 M≥3。
- README 的地形引用寫「ETOPO 2022 15 Arc-Second」，但實際下載的是 ETOPO 2022 **30 秒**版本（見 `terrain_meta.json` 的 URL）；引用文字待專案擁有者確認後再修正。
- 琉球段震源與 Slab2 板塊面的偏差原因未查證（見 README）。
- 縣市界簡化後少了幾個小島（烈嶼、彭佳嶼、釣魚臺、部分澎湖小島）。
- 排行只能依規模（資料沒有震度）；主震與餘震分開列。
- 本 repo 的 commit 多由 AI agent 產生（作者顯示為 Cursor Agent 或 Grok Bot，並標註 Co-authored-by jgejoseph）。
- 原始專案另有內容草稿 `docs/edu_cards_draft.md`、`docs/map_info_draft.md`（`src/edu.js` 註解有提到）與 `BACKLOG.md`，因含內部討論紀錄，**交接時暫不放入**，需專案擁有者決定是否公開。

## 8. 開發與 PR 流程

1. 從 `handoff/full-source-v0510` 開新分支，例如 `codex/<簡短說明>`。
2. 一個 PR 只做一件事；在說明裡寫清楚改了什麼、為什麼、是否影響第 6 節的任何項目。
3. PR 目標分支：`handoff/full-source-v0510`（或日後約定的開發分支），**不得以 `main` 為目標**。
4. PR 必須附：`npm ci && npm run build && npm test` 的結果（PASS/FAIL 數）、建置產物 sha256、手機與電腦截圖（`test-results/`）。
5. 由 Grok（專案擁有者的 AI 助理）或專案擁有者審查；**合併與正式發布只能由專案擁有者決定**。
