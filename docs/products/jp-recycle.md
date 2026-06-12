---
title: JP Recycle — 日本买取电商平台
---

# JP Recycle — 日本买取电商平台

<div class="hero-badge">
  <span class="badge">Nuxt 4</span>
  <span class="badge">日本市场</span>
</div>

面向日本二手回收市场的在线买取平台。用户可在线估价、申请回收、追踪订单全流程。

## 项目亮点

<div class="value-grid">
  <div class="value-card">
    <div class="value-icon">🇯🇵</div>
    <h3>日本本地化</h3>
    <p>日语 UI、日元计价、日本地址格式，完整本地化适配。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🔄</div>
    <h3>买取全流程</h3>
    <p>在线估价 → 申请回收 → 物流追踪 → 验货结算，端到端闭环。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">⚡</div>
    <h3>Nuxt 4 驱动</h3>
    <p>最新 Nuxt 4 框架，SSR 渲染，Element Plus 管理后台。</p>
  </div>
</div>

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Nuxt 4 · Vue 3 · Element Plus |
| 后端 | Node.js · Railway |
| 数据库 | PostgreSQL |
| 部署 | Railway · Docker |

<p class="cta-center">
  <a href="/contact/" class="cta-btn">了解详情</a>
</p>

<style scoped>
.hero-badge { display: flex; gap: 8px; margin: 1rem 0; }
.badge { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
.value-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2rem 0; }
.value-card { padding: 1.5rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; }
.value-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.value-card h3 { font-size: 1.1rem; margin: 0.5rem 0; border: none; }
.value-card p { font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; }
.cta-center { text-align: center; margin: 2rem 0; }
.cta-btn { display: inline-block; padding: 14px 40px; background: #1a56db; color: #fff; border-radius: 8px; font-size: 1.1rem; font-weight: 600; text-decoration: none; }
@media (max-width: 768px) { .value-grid { grid-template-columns: 1fr; } }
</style>
