---
title: CTN Express — 中非跨境电商平台
---

# CTN Express — 中非跨境电商全栈平台

<div class="hero-badge">
  <span class="badge">全栈项目</span>
  <span class="badge">Spring Boot</span>
  <span class="badge">Vue 3</span>
</div>

面向中非贸易的一站式跨境电商平台，支持商品管理、订单处理、多币种结算与物流追踪。

## 项目亮点

<div class="value-grid">
  <div class="value-card">
    <div class="value-icon">🏗️</div>
    <h3>全栈架构</h3>
    <p>Spring Boot 微服务后端 + Vue 3 Element Plus 管理后台，前后台分离，独立部署。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">💱</div>
    <h3>多币种结算</h3>
    <p>11 种货币汇率实时同步，智能结算引擎，自动换算与对账。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">📦</div>
    <h3>海量商品</h3>
    <p>30+ 数据表、4000+ 商品 SKU，高并发 MySQL 架构，稳定支撑跨境贸易。</p>
  </div>
</div>

## 技术栈

| 层级 | 技术 |
|------|------|
| 后端 | Spring Boot · Spring Cloud · MyBatis Plus |
| 前端 | Vue 3 · Element Plus · Axios |
| 数据库 | MySQL 8.0 · Redis |
| 部署 | Railway · Docker · Nginx |
| 工具 | Maven · Git · GitHub Actions |

## 核心功能

- 🛒 商品管理（SKU、分类、多语言）
- 📋 订单全生命周期（下单 → 支付 → 发货 → 签收）
- 💰 多币种汇率引擎
- 📊 运营 Dashboard（GMV、订单趋势、库存预警）
- 🔐 RBAC 权限管理（管理员、运营、财务）

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
