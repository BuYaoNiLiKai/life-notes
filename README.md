# 日常有知

每天五条，轻松读懂的实用生活科普。网页以「最新一期」展示内容，并提供主题筛选、简短原理说明和来源链接。

## 维护内容

- 页面：`dist/index.html`、`dist/styles.css`、`dist/app.js`
- 每日内容：`dist/data/knowledge.json`
- 站点配置：`.openai/hosting.json`

在 `knowledge.json` 的 `days` 数组中新增一天。每期放 5 条，每条包含 `category`、`title`、`body`、`why`、`action`、`source` 和 `url`；网页会按日期自动显示最新一期。

## 本地预览

在项目根目录运行：

```powershell
python -m http.server 8000 --directory dist
```

然后访问 `http://localhost:8000`。

## GitHub

项目目录：`E:\codexworkspace\life-notes`

仓库：[BuYaoNiLiKai/life-notes](https://github.com/BuYaoNiLiKai/life-notes)（私有，默认分支 `main`）。

每天上午 9:00 的生活科普更新应在生成当日五条内容后，核对来源，将新一期追加到 `dist/data/knowledge.json`，再提交并推送到这个仓库。每条内容保持简短、实用、易懂，并附可核对的来源链接。
