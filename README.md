## 智恩创科科技官网（VitePress）

這是一個基於 **VitePress 1.x** 構建的多語言企業官網專案，主要用於展示智恩創科科技（深圳）有限公司在 IT 服務與 RPA 自動化領域的能力與案例，並提供線上聯絡／商務合作入口。

### 技術棧與特性

- 靜態站點框架：VitePress
- 前端框架：Vue 3
- UI：VitePress 預設主題 + Element Plus（用於部分互動表單）
- 套件管理：pnpm
- 多語言支持：
  - `root`：簡體中文
  - `/en/`：英文
  - `/zh-TW/`：繁體中文

主要配置檔案：[`docs/.vitepress/config.js`](file:///e:/Project/ClungTsang.github.io/docs/.vitepress/config.js)

### 專案腳本

在專案根目錄下執行（建議使用 pnpm）：

- 安裝依賴

  ```bash
  pnpm install
  ```

- 啟動本地開發伺服器

  ```bash
  pnpm run docs:dev
  ```

- 建置靜態檔案

  ```bash
  pnpm run docs:build
  ```

- 本地預覽建置結果

  ```bash
  pnpm run docs:serve
  ```

- 部署（視 `deploy.sh` 實作而定）

  ```bash
  pnpm run deploy
  ```

### 專案結構概覽

- `docs/`
  - `.vitepress/`
    - `config.js`：VitePress 主配置，包含多語系、導航、側邊欄與開發代理設定
  - `index.md`：首頁
  - `about/`：關於我們
  - `services/`：服務方案
  - `case/`：成功案例
  - `team/`：團隊介紹
  - `contact/`：簡體中文聯絡頁
  - `en/**`：英文內容
  - `zh-TW/**`：繁體中文內容

### 聯絡我們 · 商務合作表單

簡體中文「聯絡我們」頁面（[`docs/contact/index.md`](file:///e:/Project/ClungTsang.github.io/docs/contact/index.md)）包含一個商務合作表單，基於 Element Plus 的 `el-form` 實作，並透過後端 API 提交資料。

#### 前端提交行為

- 表單驗證通過後，發送 `POST /api/cooperation/submit` 請求
- 請求 Body 為 JSON，包含欄位：

  ```json
  {
    "company_name": "公司名稱",
    "contact_person": "聯絡人姓名",
    "contact_info": "電話或其他聯絡方式",
    "email": "電子郵箱",
    "contact_type": "需求類型",
    "cooperation_content": "合作／需求內容描述"
  }
  ```

- 郵箱欄位附帶正則驗證，格式不合法時會阻止提交

#### 本地開發代理設定

為避免開發環境跨域問題，在 VitePress 配置中配置了代理：

```js
// docs/.vitepress/config.js
export default {
  // ...
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true
        }
      }
    }
  }
}
```

因此在開發時：

- 前端實際請求：`/api/cooperation/submit`
- 由 dev server 轉發到：`http://localhost:3001/api/cooperation/submit`

請確保本地有一個後端服務在 `http://localhost:3001` 監聽對應路由，並正確處理上述 JSON 資料。

### 線上部署說明（概念）

建置後的靜態檔案位於 `docs/.vitepress/dist`，可部署到任意靜態網站託管平臺，例如：

- 自建 Nginx / Apache
- GitHub Pages / GitLab Pages
- Vercel / Netlify 等

如需在正式環境使用 `/api` 路徑，通常會在反向代理層（例如 Nginx）將 `/api` 轉發到實際後端服務，或者在後端開啟 CORS 以允許官網域名訪問。
