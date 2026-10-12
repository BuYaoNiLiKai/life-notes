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

GitHub 仓库待绑定。绑定仓库后，可将每日一期追加到 `dist/data/knowledge.json` 并提交更新。
