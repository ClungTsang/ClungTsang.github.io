---
title: OmniGEO — AI 品牌监测平台
description: 面向跨境企业的 GEO（生成式引擎优化）品牌监测 SaaS 平台。覆盖 ChatGPT、Perplexity、Gemini 等主流 AI 搜索。
---

<script setup>
import { ref } from 'vue'
const screenshots = [
  { src: '/projects/omnigeo-landing.png', alt: 'OmniGEO 登录页', label: 'SaaS 登录页' },
  { src: '/projects/omnigeo-dashboard.png', alt: 'OmniGEO 总览 Dashboard', label: '品牌总览 Dashboard' },
  { src: '/projects/omnigeo-brand.png', alt: '品牌与竞品分析', label: '品牌 & 竞品分析' },
  { src: '/projects/omnigeo-content.png', alt: 'GEO 内容优化', label: '内容审计 & 爬取' },
  { src: '/projects/omnigeo-insight.png', alt: '洞察中枢', label: '智能洞察 & FAQ' },
  { src: '/projects/omnigeo-admin.png', alt: 'Admin 数据大屏', label: 'Admin 管理后台' },
]
const current = ref(0)
</script>

# <span style="color:#1a56db">OmniGEO</span> — 品牌 AI 可见性诊断平台

<div class="hero-badge">
  <span class="badge">⭐ 旗舰产品</span>
  <span class="badge">SaaS</span>
  <span class="badge">AI-Powered</span>
  <span class="badge">GEO</span>
</div>

> 让品牌在 ChatGPT、Perplexity、Gemini 等 AI 搜索引擎中「被看见、被推荐、被信任」。

## 产品截图

<div class="gallery">
  <div class="gallery-main" @click="current = (current + 1) % screenshots.length">
    <img :src="screenshots[current].src" :alt="screenshots[current].alt" />
    <span class="gallery-label">{{ screenshots[current].label }}</span>
  </div>
  <div class="gallery-thumbs">
    <img v-for="(s, i) in screenshots" :key="i"
         :src="s.src" :alt="s.alt"
         :class="{ active: i === current }"
         @click="current = i" />
  </div>
</div>

## 核心功能

<div class="feature-grid">
  <div class="feature-card">
    <h3>📊 品牌 AI 可见性总览</h3>
    <p>实时追踪品牌在 10+ AI 平台中的可见性得分、提及率、来源可信度。支持多语言市场下钻分析。</p>
  </div>
  <div class="feature-card">
    <h3>🔍 品牌 & 竞品对标</h3>
    <p>对比你与竞品在各 AI 平台上的 SOV（搜索可见度）排名，定位差距与机会。</p>
  </div>
  <div class="feature-card">
    <h3>📸 AI 回答快照</h3>
    <p>440+ 条真实 AI 回答样本，每条标注品牌出现/缺失状态、来源引用数与情感倾向。</p>
  </div>
  <div class="feature-card">
    <h3>✍️ GEO 内容优化</h3>
    <p>Firecrawl 爬取官网内容 → 审计 SEO/GEO 质量 → 智能生成优化建议与 FAQ 模块。</p>
  </div>
  <div class="feature-card">
    <h3>🧠 洞察中枢</h3>
    <p>基于搜索意图自动生成文章大纲 + 结构化 FAQ，SEO + GEO 双优化。</p>
  </div>
  <div class="feature-card">
    <h3>📋 Admin 数据大屏</h3>
    <p>多维度管理：用户、工作区、品牌、快照、邀请码。实时监控采集状态与资源消耗。</p>
  </div>
</div>

## 技术架构

<div class="arch">
  <div class="arch-box client">🖥️ Nuxt 4 SPA<br/><small>omni-geo.cn</small></div>
  <span class="arch-arrow">↓</span>
  <div class="arch-box cdn">🌐 Cloudflare CDN<br/><small>全球加速 · SSL</small></div>
  <span class="arch-arrow">↓</span>
  <div class="arch-box api">⚡ New API Gateway<br/><small>DeepSeek · MiMo · 多模型</small></div>
  <div class="arch-row">
    <div class="arch-box db">🗄️ Supabase<br/><small>PostgreSQL · Realtime</small></div>
    <div class="arch-box worker">🤖 采集引擎<br/><small>Railway Cron</small></div>
  </div>
</div>

## 真实数据

<div class="stats">
  <div><strong>440</strong><span>快照总数</span></div>
  <div><strong>267/440</strong><span>品牌出现率</span></div>
  <div><strong>3</strong><span>AI 平台覆盖</span></div>
  <div><strong>3</strong><span>语言市场</span></div>
</div>

*（基于全仁医疗 Trinity Medical 真实采集数据，2026-06-12）*

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Nuxt 4 · Vue 3 · TypeScript · Element Plus |
| 后端 | Supabase (PostgreSQL + Realtime) · Node.js |
| AI | DeepSeek · MiMo · 通义千问 · 多模型路由 |
| 采集 | Python · Perplexity API · Firecrawl · Railway Cron |
| 基础设施 | Railway (东南亚) · Cloudflare CDN · Docker |

## 定价

<div class="pricing">
  <div class="plan">
    <h4>Free</h4>
    <div class="price">¥0<span>/月</span></div>
    <ul><li>1 品牌</li><li>月 10 次快照</li><li>基础 Dashboard</li></ul>
    <a href="https://omni-geo.cn" class="btn">免费试用</a>
  </div>
  <div class="plan featured">
    <span class="tag">推荐</span>
    <h4>Pro</h4>
    <div class="price">¥299<span>/月</span></div>
    <ul><li>3 品牌</li><li>每日自动快照</li><li>竞品分析</li><li>CSV 导出</li></ul>
    <a href="https://omni-geo.cn" class="btn primary">开始使用</a>
  </div>
  <div class="plan">
    <h4>Enterprise</h4>
    <div class="price">定制</div>
    <ul><li>无限品牌</li><li>API 接入</li><li>专属支持</li></ul>
    <a href="/contact/" class="btn">联系我们</a>
  </div>
</div>

<p class="cta"><a href="https://omni-geo.cn" class="btn-primary">🚀 访问 OmniGEO →</a></p>

<style scoped>
.hero-badge { display: flex; gap: 8px; margin: 1rem 0; flex-wrap: wrap; }
.badge { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); padding: 4px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
.gallery { margin: 2rem 0; }
.gallery-main { position: relative; border-radius: 10px; overflow: hidden; border: 1px solid var(--vp-c-divider); cursor: pointer; }
.gallery-main img { width: 100%; display: block; }
.gallery-label { position: absolute; bottom: 8px; left: 8px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 12px; border-radius: 4px; font-size: 0.8rem; }
.gallery-thumbs { display: flex; gap: 6px; margin-top: 8px; overflow-x: auto; padding-bottom: 4px; }
.gallery-thumbs img { width: 140px; height: 88px; object-fit: cover; border-radius: 6px; border: 2px solid transparent; cursor: pointer; opacity: 0.6; transition: all 0.2s; }
.gallery-thumbs img.active { border-color: var(--vp-c-brand-1); opacity: 1; }
.gallery-thumbs img:hover { opacity: 0.9; }
.feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin: 2rem 0; }
.feature-card { padding: 1.3rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; }
.feature-card h3 { font-size: 1rem; margin: 0 0 0.5rem; border: none; }
.feature-card p { font-size: 0.88rem; color: var(--vp-c-text-2); margin: 0; line-height: 1.6; }
.arch { text-align: center; margin: 2rem 0; padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; }
.arch-box { background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); padding: 0.7rem; border-radius: 6px; margin: 0.3rem auto; max-width: 300px; }
.arch-arrow { font-size: 1.2rem; color: var(--vp-c-brand-1); display: block; }
.arch-row { display: flex; gap: 1rem; justify-content: center; margin-top: 0.3rem; }
.arch-row .arch-box { flex: 1; max-width: 180px; }
.arch-box.client { border-color: var(--vp-c-brand-1); }
.arch-box.db { border-color: #10b981; }
.arch-box.worker { border-color: #f59e0b; }
.stats { display: flex; justify-content: space-around; padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; margin: 1rem 0; }
.stats div { text-align: center; }
.stats strong { display: block; font-size: 1.8rem; color: var(--vp-c-brand-1); }
.stats span { font-size: 0.8rem; color: var(--vp-c-text-2); }
.pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin: 1.5rem 0; }
.plan { padding: 1.5rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; text-align: center; position: relative; }
.plan.featured { border-color: var(--vp-c-brand-1); }
.tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--vp-c-brand-1); color: #fff; padding: 2px 14px; border-radius: 12px; font-size: 0.75rem; }
.price { font-size: 2rem; font-weight: 700; margin: 0.8rem 0; }
.price span { font-size: 0.9rem; font-weight: 400; color: var(--vp-c-text-2); }
.plan ul { list-style: none; padding: 0; margin: 0.8rem 0; text-align: left; }
.plan li { padding: 0.3rem 0; font-size: 0.85rem; }
.plan li::before { content: '✓ '; color: #10b981; }
.btn { display: inline-block; padding: 8px 24px; border: 1px solid var(--vp-c-divider); border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.9rem; margin-top: 0.5rem; }
.btn.primary { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }
.cta { text-align: center; margin: 2rem 0; }
.btn-primary { display: inline-block; padding: 14px 42px; background: var(--vp-c-brand-1); color: #fff; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; }
@media (max-width: 768px) { .feature-grid, .pricing { grid-template-columns: 1fr; } .arch-row { flex-direction: column; } .gallery-thumbs img { width: 100px; height: 64px; } }
</style>
