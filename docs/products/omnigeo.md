---
title: OmniGEO — AI 品牌监测平台
description: 面向跨境企业的 GEO（生成式引擎优化）品牌监测 SaaS 平台
---

<script setup>
import { ref, onMounted } from 'vue'
const images = [
  { src: '/projects/omnigeo-landing.png', alt: 'OmniGEO 登录页 — 品牌 AI 可见性诊断平台', caption: 'SaaS 平台登录页 — 品牌 AI 可见性诊断' },
  { src: '/projects/omnigeo-admin.png', alt: 'OmniGEO Admin Dashboard — 数据大屏', caption: 'Admin 数据大屏 — 用户、工作区、快照一览' },
]
const current = ref(0)
const timer = ref(null)
onMounted(() => {
  timer.value = setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, 4000)
})
</script>

# <span style="color:#1a56db">OmniGEO</span> — 品牌 AI 可见性诊断平台

<div class="hero-badge">
  <span class="badge">⭐ 旗舰产品</span>
  <span class="badge">SaaS</span>
  <span class="badge">AI-Powered</span>
</div>

> **一句话**：让品牌在 ChatGPT、Perplexity、Gemini 等 AI 搜索引擎中「被看见、被推荐、被信任」。

## 产品截图

<div class="screenshot-gallery">
  <div class="gallery-main">
    <img :src="images[current].src" :alt="images[current].alt" class="gallery-img" />
    <p class="gallery-caption">{{ images[current].caption }}</p>
  </div>
  <div class="gallery-dots">
    <span v-for="(img, i) in images" :key="i" 
          :class="['dot', { active: i === current }]" 
          @click="current = i"></span>
  </div>
</div>

## 核心价值

<div class="value-grid">
  <div class="value-card">
    <div class="value-icon">🔍</div>
    <h3>AI 可见性监测</h3>
    <p>实时追踪品牌在 ChatGPT、Perplexity、Gemini、Kimi、元宝等 10+ AI 平台中的出现频率、排名与情感倾向。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">📊</div>
    <h3>竞品对标分析</h3>
    <p>一键对比你的品牌与竞品在各 AI 平台上的可见性差距，定位内容策略的盲区与机会点。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🎯</div>
    <h3>GEO 内容优化</h3>
    <p>基于 AI 引用诊断，提供可执行的品牌内容优化方案，提升品牌在 AI 回答中的引用率与推荐权重。</p>
  </div>
</div>

## 技术架构

<div class="arch-diagram">
  <div class="arch-layer client">🖥️ Nuxt 4 SPA 前端<br/><small>omni-geo.cn</small></div>
  <div class="arch-arrow">↓</div>
  <div class="arch-layer edge">🌐 Cloudflare CDN<br/><small>全球加速 · SSL · 缓存</small></div>
  <div class="arch-arrow">↓</div>
  <div class="arch-layer api">⚡ New API Gateway<br/><small>DeepSeek · MiMo · 多模型路由</small></div>
  <div class="arch-row">
    <div class="arch-layer db">🗄️ Supabase<br/><small>PostgreSQL · Realtime</small></div>
    <div class="arch-layer worker">🤖 Python 采集引擎<br/><small>Railway Cron · 定时采集</small></div>
  </div>
</div>

## 数据一览

<div class="stats-bar">
  <div class="stat"><strong>143</strong><span>总快照</span></div>
  <div class="stat"><strong>3</strong><span>工作区</span></div>
  <div class="stat"><strong>3</strong><span>活跃品牌</span></div>
  <div class="stat"><strong>10+</strong><span>AI 平台覆盖</span></div>
</div>

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Nuxt 4 · Vue 3 · TypeScript · Element Plus · Chart.js |
| 后端 | Supabase (PostgreSQL + Realtime) · Node.js API Proxy |
| 采集 | Python 引擎 · Perplexity API · Firecrawl · Railway Cron |
| AI 模型 | DeepSeek · MiMo · 通义千问 · 多模型聚合路由 |
| 基础设施 | Railway (东南亚) · Cloudflare CDN · Docker |
| Admin | Vue 3 独立项目 · 密码门控 · 6 模块管理 |

## 定价方案

<div class="pricing-grid">
  <div class="pricing-card">
    <h3>Free</h3>
    <div class="price">¥0<span>/月</span></div>
    <ul>
      <li>1 个品牌</li>
      <li>每月 10 次快照</li>
      <li>基础 Dashboard</li>
    </ul>
    <a href="https://omni-geo.cn" class="pricing-btn">免费试用</a>
  </div>
  <div class="pricing-card featured">
    <div class="pricing-badge">推荐</div>
    <h3>Pro</h3>
    <div class="price">¥299<span>/月</span></div>
    <ul>
      <li>3 个品牌</li>
      <li>每日自动快照</li>
      <li>竞品分析</li>
      <li>CSV 数据导出</li>
    </ul>
    <a href="https://omni-geo.cn" class="pricing-btn primary">开始使用</a>
  </div>
  <div class="pricing-card">
    <h3>Enterprise</h3>
    <div class="price">联系我们</div>
    <ul>
      <li>无限品牌</li>
      <li>API 接入</li>
      <li>专属支持</li>
      <li>定制 Dashboard</li>
    </ul>
    <a href="/contact/" class="pricing-btn">联系我们</a>
  </div>
</div>

<p class="cta-center">
  <a href="https://omni-geo.cn" class="cta-btn">🚀 访问 OmniGEO</a>
</p>

<style scoped>
.hero-badge { display: flex; gap: 8px; margin: 1rem 0; }
.badge { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
.screenshot-gallery { margin: 2rem 0; }
.gallery-main { border-radius: 8px; overflow: hidden; border: 1px solid var(--vp-c-divider); }
.gallery-img { width: 100%; display: block; }
.gallery-caption { text-align: center; padding: 0.5rem; color: var(--vp-c-text-2); font-size: 0.9rem; }
.gallery-dots { display: flex; justify-content: center; gap: 8px; margin-top: 0.8rem; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: var(--vp-c-divider); cursor: pointer; transition: background 0.2s; }
.dot.active { background: var(--vp-c-brand-1); }
.value-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2rem 0; }
.value-card { padding: 1.5rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; }
.value-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.value-card h3 { font-size: 1.1rem; margin: 0.5rem 0; border: none; }
.value-card p { font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; }
.arch-diagram { text-align: center; margin: 2rem 0; padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; }
.arch-layer { background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); padding: 0.8rem; border-radius: 6px; margin: 0.3rem auto; max-width: 340px; }
.arch-arrow { font-size: 1.2rem; color: var(--vp-c-brand-1); }
.arch-row { display: flex; gap: 1rem; justify-content: center; margin-top: 0.3rem; }
.arch-row .arch-layer { flex: 1; max-width: 200px; }
.arch-layer.client { border-color: var(--vp-c-brand-1); }
.arch-layer.db { border-color: #10b981; }
.arch-layer.worker { border-color: #f59e0b; }
.stats-bar { display: flex; justify-content: space-around; padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; margin: 1.5rem 0; }
.stat { text-align: center; }
.stat strong { display: block; font-size: 1.8rem; color: var(--vp-c-brand-1); }
.stat span { font-size: 0.85rem; color: var(--vp-c-text-2); }
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2rem 0; }
.pricing-card { padding: 2rem 1.5rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; text-align: center; position: relative; }
.pricing-card.featured { border-color: var(--vp-c-brand-1); box-shadow: 0 0 0 1px var(--vp-c-brand-1); }
.pricing-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--vp-c-brand-1); color: #fff; padding: 2px 16px; border-radius: 12px; font-size: 0.8rem; }
.price { font-size: 2.2rem; font-weight: 700; margin: 1rem 0; }
.price span { font-size: 1rem; font-weight: 400; color: var(--vp-c-text-2); }
.pricing-card ul { list-style: none; padding: 0; margin: 1rem 0; text-align: left; }
.pricing-card li { padding: 0.4rem 0; font-size: 0.9rem; }
.pricing-card li::before { content: '✓ '; color: #10b981; }
.pricing-btn { display: inline-block; padding: 10px 28px; border: 1px solid var(--vp-c-divider); border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.95rem; }
.pricing-btn.primary { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }
.cta-center { text-align: center; margin: 2rem 0; }
.cta-btn { display: inline-block; padding: 14px 40px; background: var(--vp-c-brand-1); color: #fff; border-radius: 8px; font-size: 1.1rem; font-weight: 600; text-decoration: none; }
@media (max-width: 768px) { .value-grid, .pricing-grid { grid-template-columns: 1fr; } .arch-row { flex-direction: column; } .stats-bar { flex-wrap: wrap; gap: 1rem; } }
</style>
