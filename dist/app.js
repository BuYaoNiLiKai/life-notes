const grid = document.querySelector("#story-grid");
const empty = document.querySelector("#empty-state");
const dateNode = document.querySelector("#edition-date");
const totalNode = document.querySelector("#total-count");

function prettyDate(date) {
  const [year, month, day] = date.split("-");
  return `${year}.${month}.${day}`;
}

function render(items, filter = "全部") {
  const visible = filter === "全部" ? items : items.filter((item) => item.category === filter);
  grid.replaceChildren();
  empty.hidden = visible.length > 0;
  visible.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = `story-card${index === 0 && filter === "全部" ? " featured" : ""}`;
    article.style.setProperty("--accent", `var(--${item.tone || "blue"})`);
    article.innerHTML = `
      <div class="card-top"><span class="category-tag">${item.category}</span><span class="card-icon" aria-hidden="true">${item.icon || "✳"}</span></div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-body">${item.body}</p>
      <p class="why"><strong>为什么？</strong> ${item.why}</p>
      <div class="card-bottom"><span class="takeaway">${item.action}</span><a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">来源：${item.source}</a></div>`;
    grid.append(article);
  });
}

fetch("./data/knowledge.json")
  .then((response) => {
    if (!response.ok) throw new Error("内容暂时无法载入");
    return response.json();
  })
  .then((data) => {
    const days = [...(data.days || [])].sort((a, b) => b.date.localeCompare(a.date));
    const latest = days[0];
    if (!latest) throw new Error("还没有每日内容");
    dateNode.textContent = prettyDate(latest.date);
    totalNode.textContent = String(latest.items.length).padStart(2, "0");
    render(latest.items);
    document.querySelectorAll(".filter-chip").forEach((button) => {
      button.addEventListener("click", () => {
        const selected = document.querySelector(".filter-chip.selected");
        selected?.classList.remove("selected");
        selected?.setAttribute("aria-pressed", "false");
        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");
        render(latest.items, button.dataset.filter);
      });
    });
  })
  .catch(() => {
    grid.innerHTML = '<div class="empty-state">今天的内容暂时没有载入，请稍后再试。</div>';
  });

document.querySelector("#share-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(window.location.href);
    button.innerHTML = '链接已复制 <span aria-hidden="true">✓</span>';
  } catch {
    button.innerHTML = '复制失败，请手动复制地址 <span aria-hidden="true">!</span>';
  }
});
