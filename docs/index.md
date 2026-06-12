---
layout: home

title: 智恩创科科技
titleTemplate: AI 大模型 · 全栈开发 · GEO 品牌监测

hero:
  name: 智恩创科科技
  text: 用 AI 与自动化，为品牌创造可见的未来
  tagline: 旗舰产品 OmniGEO — 品牌 AI 可见性诊断平台。覆盖 ChatGPT、Perplexity、Gemini 等主流 AI 搜索，让品牌在 AI 时代「被看见、被推荐、被信任」。
  image:
    src: /projects/omnigeo-landing.png
    alt: OmniGEO 品牌 AI 可见性诊断平台
  actions:
    - theme: brand
      text: 了解 OmniGEO
      link: /products/omnigeo
    - theme: alt
      text: 查看全部产品
      link: /products/omnigeo
    - theme: alt
      text: 联系我们
      link: /contact/

features:
  - icon: 🚀
    title: OmniGEO — GEO 品牌监测
    details: 实时追踪品牌在 10+ AI 平台中的可见性。支持竞品对标、内容优化建议、自动快照采集。旗舰 SaaS 产品。
    link: /products/omnigeo
    linkText: 查看详情 →

  - icon: 🏗️
    title: CTN Express — 跨境电商
    details: 中非贸易全栈平台。Spring Boot + Vue 3，30+ 数据表，多币种结算引擎。
    link: /products/ctn
    linkText: 查看详情 →

  - icon: 🇯🇵
    title: JP Recycle — 日本买取
    details: 日本二手回收电商。Nuxt 4 驱动，在线估价到结算全流程闭环。
    link: /products/jp-recycle
    linkText: 查看详情 →

  - icon: 📅
    title: 智能排课管理系统
    details: 成人自考教务平台，四端分离架构，智能排课引擎，已交付甲方。
    link: /products/course
    linkText: 查看详情 →

  - icon: 🤖
    title: AI 自动化与 RPA
    details: 基于来也科技 RPA 平台，为制造、财务、电商场景定制端到端自动化方案。企业级流程诊断与落地。
    link: /contact/
    linkText: 咨询方案 →

  - icon: 💼
    title: 客户案例
    details: 全仁医疗、時昌迷你倉、普修科技、丰宾电子……服务覆盖医疗、仓储、汽车、制造等行业。
    link: /case/
    linkText: 查看案例 →
---

<div class="home-stats">
  <div class="home-stat">
    <span class="hs-num">4</span>
    <span class="hs-label">核心产品</span>
  </div>
  <div class="home-stat">
    <span class="hs-num">6+</span>
    <span class="hs-label">交付项目</span>
  </div>
  <div class="home-stat">
    <span class="hs-num">10+</span>
    <span class="hs-label">企业客户</span>
  </div>
  <div class="home-stat">
    <span class="hs-num">3</span>
    <span class="hs-label">覆盖市场</span>
  </div>
</div>

<style scoped>
.home-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
.home-stat {
  text-align: center;
}
.hs-num {
  display: block;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.hs-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
@media (max-width: 768px) {
  .home-stats { gap: 1.5rem; flex-wrap: wrap; }
  .hs-num { font-size: 1.6rem; }
}
</style>
