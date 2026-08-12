# 部署指南

## 步驟 1: 建立 GitHub Repository

1. 去 [GitHub](https://github.com/new)
2. 建立新 repository，名稱例如 `ai-avatar-portfolio`
3. **不要** init README（之後直接 push 本地代碼）
4. 複製 repository 的 HTTPS URL（例如 `https://github.com/你的帳號/ai-avatar-portfolio.git`）

## 步驟 2: 初始化 Git 並推送

在項目根目錄執行：

```bash
# 初始化 git
git init

# 添加所有文件
git add .

# 建立初始 commit
git commit -m "Initial commit: AI Avatar portfolio base"

# 添加遠端 repository
git remote add origin https://github.com/你的帳號/ai-avatar-portfolio.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

## 步驟 3: 部署到 Vercel

### 選項 A: 通過 GitHub（自動部署）**推薦**

1. 去 [Vercel Dashboard](https://vercel.com/dashboard)
2. 點 "Add New" → "Project"
3. 選擇 "Import Git Repository"
4. 搜尋並選擇 `ai-avatar-portfolio`
5. 保持默認設置，點 "Deploy"
6. 等待部署完成，獲得 Vercel URL（例如 `https://ai-avatar-portfolio-xxxx.vercel.app`）

### 選項 B: CLI 部署

```bash
# 全局安裝 Vercel CLI（若未安裝）
npm i -g vercel

# 部署
vercel
```

按提示選擇，自動連結 GitHub 並部署。

## 步驟 4: 獲獎資格提交

活動當天完成部署後，提交：

```
部署 URL: https://ai-avatar-portfolio-xxxx.vercel.app
```

確保 URL 可訪問且 Avatar 功能已集成。

## 更新部署

之後若修改代碼，只需：

```bash
git add .
git commit -m "Update avatar configuration"
git push
```

Vercel 會自動重新部署。

## Troubleshooting

### 部署失敗？

1. 檢查 `npm run build` 本地是否成功
2. 查看 Vercel 部署日誌（Dashboard → Deployments）
3. 確保環境變數已設置（若需要）

### 需要在本地測試？

```bash
npm install
npm run dev
# 訪問 http://localhost:5173
```

## 當天活動 - Perxona 集成

1. 現場使用 Perxona 工具生成 Avatar
2. 將 SDK 配置代碼加入 `src/components/AvatarWidget.tsx`
3. 本地測試 `npm run dev`
4. 推送到 GitHub 並確認 Vercel 部署成功
5. 提供最終 URL 給評審
