---
title: 智能排课管理系统
---

# 智能排课管理系统

<div class="hero-badge">
  <span class="badge">Vue 3</span>
  <span class="badge">教务管理</span>
  <span class="badge">已交付</span>
</div>

为成人自考 / 继续教育学院打造的一体化教务排课管理平台，覆盖学校管理端、排课管理端、学生端、教师端四大角色。

## 项目亮点

<div class="value-grid">
  <div class="value-card">
    <div class="value-icon">🧩</div>
    <h3>四端分离</h3>
    <p>学校管理、排课管理、学生端、教师端，权限精细化管控，角色互不干扰。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">📅</div>
    <h3>智能排课引擎</h3>
    <p>多维度约束算法：教室容量、教师时间、课程时长、班级冲突，一键自动排课。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">📱</div>
    <h3>强制通知机制</h3>
    <p>学生端进入时弹出重要通知 Dialog（5 秒倒计时），确保关键信息触达率 100%。</p>
  </div>
</div>

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vue 3 · Vite · Element Plus |
| 可视化 | Canvas API 排课图表 |
| 状态管理 | Pinia |
| 工具 | pnpm · ESLint |

## 核心功能

- 🔐 四端分离架构，独立权限管理
- 📅 智能排课（教室 / 教师 / 课程多维约束）
- 📢 学生端强制弹窗通知
- 📊 排课可视化（Canvas 时间表）
- 📄 完整操作手册 + 产品文档交付

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
