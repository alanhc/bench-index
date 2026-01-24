# Web Benchmarks Index (GitHub Pages)

這是一個純靜態的「連結總表」首頁，專門用來收齊你常用的 WebGL / WebGPU / JS / WASM / AI benchmark 與工具頁面。

## 特色
- ✅ 搜尋 / 分類篩選
- ✅ 每個項目都有「可分享的跳轉連結」
- ✅ 支援 `?go=slug` 或 `#slug` 直接跳轉到目標頁面（適合丟給 QA/同事）

## 使用方式（GitHub Pages）
1. 新建一個 repo（例如 `web-benchmarks-index`）
2. 把這個 zip 解壓縮後的檔案全部放進 repo（根目錄）
3. GitHub → Settings → Pages
   - Build and deployment: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
4. 等待 Pages 上線後，你會得到像這樣的網址：
   - `https://<username>.github.io/web-benchmarks-index/`

## 直接跳轉
- `https://<username>.github.io/web-benchmarks-index/?go=<slug>`
- `https://<username>.github.io/web-benchmarks-index/#<slug>`

你也可以在首頁每張卡片按「複製跳轉連結」取得完整 URL。

## 維護連結清單
連結清單在：`assets/data.js`
- 新增 / 移除 / 分類：修改該檔案即可（重新 push 之後 Pages 會自動更新）
