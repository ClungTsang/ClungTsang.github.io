<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)
const currentLang = ref('zh-CN')

const langs = [
  { key: 'zh-CN', label: '简体中文' },
  { key: 'zh-TW', label: '繁體中文' },
  { key: 'en', label: 'English' },
]

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function switchLang(key) {
  currentLang.value = key
  if (key === 'en') window.location.href = '/en/'
  else if (key === 'zh-TW') window.location.href = '/zh-TW/'
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div class="home-root" :class="{ dark: isDark }">
    <!-- ===== Nav ===== -->
    <header class="home-nav">
      <a href="/" class="nav-logo">智恩创科科技</a>
      <nav class="nav-links">
        <a href="/products/omnigeo">产品</a>
        <a href="/about/">关于</a>
        <a href="/case/">案例</a>
        <a href="/team/">团队</a>
        <a href="/contact/">联系</a>
      </nav>
      <div class="nav-utils">
        <select class="lang-select" :value="currentLang" @change="switchLang(($event.target).value)">
          <option v-for="l in langs" :key="l.key" :value="l.key">{{ l.label }}</option>
        </select>
        <button class="dark-toggle" @click="toggleDark" :title="isDark ? '浅色模式' : '深色模式'">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
    </header>

    <!-- ===== Hero ===== -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-tag">AI 大模型 · 全栈开发 · GEO 品牌监测</div>
        <h1 class="hero-title">用 AI 与自动化<br/>为品牌创造可见的未来</h1>
        <p class="hero-desc">旗舰产品 OmniGEO — 帮助品牌在 ChatGPT、Perplexity、Gemini 等 AI 搜索中被看见、被推荐、被信任。</p>
        <div class="hero-actions">
          <a href="/products/omnigeo" class="btn-primary">了解 OmniGEO</a>
          <a href="/contact/" class="btn-outline">联系我们</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="/projects/omnigeo-landing.png" alt="OmniGEO" />
      </div>
    </section>

    <!-- ===== Stats ===== -->
    <section class="stats">
      <div class="stat"><strong>4</strong><span>核心产品</span></div>
      <div class="stat"><strong>8+</strong><span>交付项目</span></div>
      <div class="stat"><strong>15+</strong><span>企业客户</span></div>
      <div class="stat"><strong>3</strong><span>覆盖市场</span></div>
    </section>

    <!-- ===== Services ===== -->
    <section class="section">
      <div class="section-head">
        <span class="section-label">核心能力</span>
        <h2>AI 驱动的全栈技术服务</h2>
      </div>
      <div class="cards-3">
        <div class="card">
          <div class="card-icon">🤖</div>
          <h3>GEO 品牌监测</h3>
          <p>实时追踪品牌在 ChatGPT、Perplexity、Gemini 等 10+ AI 平台中的可见性。竞品对标、内容优化建议、自动快照采集。</p>
          <a href="/products/omnigeo">了解 OmniGEO →</a>
        </div>
        <div class="card">
          <div class="card-icon">💻</div>
          <h3>全栈系统开发</h3>
          <p>Spring Boot / Nuxt 4 / Vue 3 技术栈。从跨境商城、ERP 系统到 SaaS 平台，端到端交付大型商业项目。</p>
          <a href="/products/ctn">查看项目 →</a>
        </div>
        <div class="card">
          <div class="card-icon">⚡</div>
          <h3>RPA & 技术运维</h3>
          <p>来也科技深度合作伙伴。财务自动化、订单同步、库存管理，从流程诊断到系统运维全覆盖。</p>
          <a href="/contact/">咨询方案 →</a>
        </div>
      </div>
    </section>

    <!-- ===== Featured Product: OmniGEO ===== -->
    <section class="section bg-soft">
      <div class="section-head">
        <span class="section-label">旗舰产品</span>
        <h2>OmniGEO — 品牌 AI 可见性诊断平台</h2>
      </div>
      <div class="featured-product">
        <div class="featured-images">
          <img src="/projects/omnigeo-dashboard.png" alt="Dashboard" class="fp-main" />
          <div class="fp-thumbs">
            <img src="/projects/omnigeo-brand.png" alt="品牌分析" />
            <img src="/projects/omnigeo-content.png" alt="内容优化" />
            <img src="/projects/omnigeo-insight.png" alt="洞察中枢" />
          </div>
        </div>
        <div class="featured-info">
          <div class="fp-stats-row">
            <div><strong>440</strong><span>快照总数</span></div>
            <div><strong>267</strong><span>品牌出现</span></div>
            <div><strong>3</strong><span>AI 平台</span></div>
          </div>
          <ul class="fp-features">
            <li>📊 AI 可见性总览 Dashboard</li>
            <li>🔍 品牌 & 竞品 SOV 对标分析</li>
            <li>📸 440+ 条真实 AI 回答快照</li>
            <li>✍️ Firecrawl 内容审计 & GEO 优化</li>
          </ul>
          <a href="/products/omnigeo" class="btn-primary">查看完整介绍 →</a>
        </div>
      </div>
    </section>

    <!-- ===== Featured Case: 氪金达人 ===== -->
    <section class="section">
      <div class="section-head">
        <span class="section-label">标杆案例</span>
        <h2>氪金达人 — 澳门 No.1 游戏充值平台</h2>
        <p>全站开发 · RPA 自动化 · 技术运维 · 年营收 5000 万澳门币</p>
      </div>
      <div class="featured-product">
        <div class="featured-images">
          <img src="/projects/kejin-home.png" alt="氪金达人首页" class="fp-main" />
        </div>
        <div class="featured-info">
          <div class="fp-stats-row">
            <div><strong>5000万+</strong><span>年营收 (MOP)</span></div>
            <div><strong>5</strong><span>线下门店</span></div>
            <div><strong>2</strong><span>独立商城</span></div>
          </div>
          <ul class="fp-features">
            <li>🛒 游戏点数卡商城 + Pokemon TCG 零售商城</li>
            <li>🏪 香港 5 间实体门店线上线下打通</li>
            <li>💰 财务系统 — 多币种结算、自动化对账</li>
            <li>🤖 RPA 自动化 — 订单同步、库存管理、报表生成</li>
            <li>🔧 全套技术搭建、上线、持续运维</li>
          </ul>
          <p style="font-size:0.85rem;color:var(--c-text-2);margin-top:0.5rem;">
            代码量 9.6 万+ 源文件 · Vue 3 + Spring Boot 全栈架构
          </p>
        </div>
      </div>
    </section>

    <!-- ===== Partners ===== -->
    <section class="section bg-soft">
      <div class="section-head">
        <span class="section-label">合作伙伴</span>
        <h2>深度合作的生态伙伴</h2>
      </div>
      <div class="partners-row">
        <div class="partner-logo">
          <div class="partner-icon">🏛️</div>
          <strong>香港科技园</strong>
          <span>HKSTP 孵化伙伴</span>
        </div>
        <div class="partner-logo">
          <div class="partner-icon">🤝</div>
          <strong>深港青创汇</strong>
          <span>港澳青年创业服务</span>
        </div>
        <div class="partner-logo">
          <div class="partner-icon">🌍</div>
          <strong>CTN Express</strong>
          <span>中非跨境贸易平台</span>
        </div>
        <div class="partner-logo highlight">
          <div class="partner-icon">🃏</div>
          <strong>氪金达人</strong>
          <span>年营收 5000 万 MOP</span>
        </div>
      </div>
    </section>

    <!-- ===== Cases ===== -->
    <section class="section">
      <div class="section-head">
        <span class="section-label">更多案例</span>
        <h2>覆盖医疗、仓储、汽车、制造等行业</h2>
      </div>
      <div class="cards-4">
        <div class="case-card">
          <div class="case-logo">🏥</div>
          <h4>全仁医疗</h4>
          <p>GEO 品牌优化 — 品牌提及率从 0% 提升至 50%</p>
        </div>
        <div class="case-card">
          <div class="case-logo">📦</div>
          <h4>時昌迷你倉</h4>
          <p>AI 搜索竞争力诊断 & 内容策略重构</p>
        </div>
        <div class="case-card">
          <div class="case-logo">🏭</div>
          <h4>丰宾电子</h4>
          <p>制造业全流程 RPA 自动化实施</p>
        </div>
        <div class="case-card">
          <div class="case-logo">🚗</div>
          <h4>普修科技</h4>
          <p>Web3D 汽车在线渲染展示平台</p>
        </div>
      </div>
    </section>

    <!-- ===== Tech Stack ===== -->
    <section class="section bg-soft">
      <div class="section-head">
        <span class="section-label">技术能力</span>
        <h2>现代化的技术基础设施</h2>
      </div>
      <div class="tech-grid">
        <div class="tech-col">
          <h4>前端</h4>
          <span>Nuxt 4</span><span>Vue 3</span><span>TypeScript</span><span>Element Plus</span>
        </div>
        <div class="tech-col">
          <h4>后端 & 数据</h4>
          <span>Spring Boot</span><span>Supabase</span><span>PostgreSQL</span><span>MySQL</span>
        </div>
        <div class="tech-col">
          <h4>AI & 模型</h4>
          <span>DeepSeek</span><span>MiMo</span><span>通义千问</span><span>多模型路由</span>
        </div>
        <div class="tech-col">
          <h4>基础设施</h4>
          <span>Railway</span><span>Cloudflare</span><span>Docker</span><span>Linux</span>
        </div>
        <div class="tech-col">
          <h4>自动化</h4>
          <span>Firecrawl</span><span>Python</span><span>RPA (来也)</span><span>Cron Jobs</span>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section">
      <h2>准备好让品牌在 AI 时代被看见了吗？</h2>
      <p>从一次免费诊断开始，了解你的品牌在 AI 搜索中的真实表现。</p>
      <a href="/contact/" class="btn-primary">联系我们 →</a>
    </section>

    <!-- ===== Footer ===== -->
    <footer class="home-footer">
      <div>
        <strong>智恩创科科技（深圳）有限公司</strong><br/>
        深圳市龙岗区创投大厦 B510<br/>
        模力谷 OPC 社区优秀企业
      </div>
      <div>
        <a href="/products/omnigeo">OmniGEO</a>
        <a href="/about/">关于我们</a>
        <a href="/case/">案例</a>
        <a href="/team/">团队</a>
        <a href="/contact/">联系</a>
      </div>
    </footer>
  </div>
</template>

<style>
/* ===== CSS Variables for Dark Mode ===== */
.home-root {
  --c-bg: #ffffff;
  --c-bg-soft: #f8fafc;
  --c-text: #0f172a;
  --c-text-2: #64748b;
  --c-border: #e5e7eb;
  --c-brand: #1a56db;
  --c-brand-soft: #eef2ff;
  --c-card-bg: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', sans-serif;
  color: var(--c-text);
  background: var(--c-bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.home-root.dark {
  --c-bg: #0f172a;
  --c-bg-soft: #1e293b;
  --c-text: #f1f5f9;
  --c-text-2: #94a3b8;
  --c-border: #334155;
  --c-brand: #3b82f6;
  --c-brand-soft: #1e3a5f;
  --c-card-bg: #1e293b;
}
.home-root h2 { font-size: 1.8rem; font-weight: 700; margin: 0; color: var(--c-text); }
.home-root p { margin: 0; color: var(--c-text-2); }

/* Nav */
.home-nav {
  display: flex; justify-content: space-between; align-items: center;
  max-width: 1200px; margin: 0 auto; padding: 1rem 2rem;
  background: var(--c-bg); border-bottom: 1px solid var(--c-border);
}
.nav-logo { font-size: 1.1rem; font-weight: 700; color: var(--c-text); text-decoration: none; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: var(--c-text-2); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: var(--c-brand); }
.nav-utils { display: flex; align-items: center; gap: 10px; }
.lang-select {
  padding: 4px 8px; border: 1px solid var(--c-border); border-radius: 6px;
  background: var(--c-bg); color: var(--c-text); font-size: 0.8rem; cursor: pointer;
}
.dark-toggle {
  background: none; border: 1px solid var(--c-border); border-radius: 6px;
  padding: 4px 8px; cursor: pointer; font-size: 1rem;
}

/* Hero */
.hero {
  display: flex; align-items: center; justify-content: space-between;
  max-width: 1200px; margin: 0 auto; padding: 5rem 2rem 4rem; gap: 3rem;
}
.hero-inner { flex: 1; max-width: 560px; }
.hero-tag { display: inline-block; background: var(--c-brand-soft); color: var(--c-brand); padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
.hero-title { font-size: 2.8rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.03em; margin: 0 0 1rem; color: var(--c-text); }
.hero-desc { font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem; }
.hero-actions { display: flex; gap: 12px; }
.btn-primary { display: inline-block; padding: 12px 28px; background: var(--c-brand); color: #fff !important; border-radius: 8px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: background 0.2s; }
.btn-primary:hover { background: #1e40af; }
.btn-outline { display: inline-block; padding: 12px 28px; border: 1.5px solid var(--c-border); color: var(--c-text); border-radius: 8px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: border-color 0.2s; }
.btn-outline:hover { border-color: var(--c-brand); color: var(--c-brand); }
.hero-visual { flex: 1; max-width: 500px; }
.hero-visual img { width: 100%; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.12); }

/* Stats */
.stats { display: flex; justify-content: center; gap: 3rem; padding: 2rem; border-top: 1px solid var(--c-border); border-bottom: 1px solid var(--c-border); background: var(--c-bg-soft); }
.stat { text-align: center; }
.stat strong { display: block; font-size: 2rem; color: var(--c-brand); font-weight: 800; }
.stat span { font-size: 0.85rem; color: var(--c-text-2); }

/* Sections */
.section { max-width: 1200px; margin: 0 auto; padding: 5rem 2rem; }
.section.bg-soft { background: var(--c-bg-soft); max-width: 100%; }
.section.bg-soft > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
.section-head { text-align: center; margin-bottom: 3rem; }
.section-label { display: inline-block; background: var(--c-brand-soft); color: var(--c-brand); padding: 4px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.8rem; }
.section-head p { margin-top: 0.5rem; }

/* Cards */
.cards-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.card { padding: 2rem; border: 1px solid var(--c-border); border-radius: 12px; background: var(--c-card-bg); transition: box-shadow 0.2s, border-color 0.2s; }
.card:hover { border-color: var(--c-brand); box-shadow: 0 4px 20px rgba(26,86,219,0.08); }
.card-icon { font-size: 2rem; margin-bottom: 0.8rem; }
.card h3 { font-size: 1.15rem; margin: 0 0 0.5rem; font-weight: 700; color: var(--c-text); }
.card p { font-size: 0.9rem; line-height: 1.7; margin-bottom: 1rem; }
.card a { color: var(--c-brand); font-weight: 600; font-size: 0.9rem; text-decoration: none; }

/* Featured Product */
.featured-product { display: flex; gap: 2.5rem; align-items: flex-start; padding: 0 2rem; }
.featured-images { flex: 1.2; }
.fp-main { width: 100%; border-radius: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.1); margin-bottom: 0.8rem; }
.fp-thumbs { display: flex; gap: 8px; }
.fp-thumbs img { width: 32%; border-radius: 6px; border: 1px solid var(--c-border); }
.featured-info { flex: 1; }
.fp-stats-row { display: flex; gap: 1.5rem; margin-bottom: 1.2rem; }
.fp-stats-row div { text-align: center; }
.fp-stats-row strong { display: block; font-size: 1.6rem; color: var(--c-brand); }
.fp-stats-row span { font-size: 0.8rem; color: var(--c-text-2); }
.fp-features { list-style: none; padding: 0; margin: 0 0 1.5rem; }
.fp-features li { padding: 0.4rem 0; font-size: 0.9rem; color: var(--c-text); }
.featured-info .btn-primary { display: inline-block; }

/* Partners */
.partners-row { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; padding: 0 2rem; }
.partner-logo {
  text-align: center; padding: 1.5rem 2rem;
  border: 1px solid var(--c-border); border-radius: 10px;
  background: var(--c-card-bg); min-width: 160px;
  transition: box-shadow 0.2s;
}
.partner-logo:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.partner-logo.highlight { border-color: var(--c-brand); }
.partner-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.partner-logo strong { display: block; font-size: 1rem; color: var(--c-text); margin-bottom: 0.2rem; }
.partner-logo span { font-size: 0.8rem; color: var(--c-text-2); }

/* Case Cards */
.cards-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
.case-card { padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 10px; text-align: center; background: var(--c-card-bg); transition: box-shadow 0.2s; }
.case-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.case-logo { font-size: 2.2rem; margin-bottom: 0.5rem; }
.case-card h4 { font-size: 1rem; margin: 0 0 0.3rem; font-weight: 700; color: var(--c-text); }
.case-card p { font-size: 0.82rem; line-height: 1.5; }

/* Tech Grid */
.tech-grid { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; padding: 0 2rem; }
.tech-col { background: var(--c-card-bg); border: 1px solid var(--c-border); border-radius: 10px; padding: 1.2rem 1.5rem; min-width: 160px; }
.tech-col h4 { font-size: 0.85rem; font-weight: 700; margin: 0 0 0.6rem; color: var(--c-brand); text-transform: uppercase; }
.tech-col span { display: inline-block; background: var(--c-bg-soft); padding: 3px 10px; border-radius: 4px; font-size: 0.8rem; margin: 2px 4px 2px 0; color: var(--c-text-2); }

/* CTA */
.cta-section { text-align: center; padding: 5rem 2rem; background: linear-gradient(135deg, #1a56db 0%, #1e40af 100%); color: #fff; }
.cta-section h2 { color: #fff; margin-bottom: 0.5rem; }
.cta-section p { color: rgba(255,255,255,0.85); margin-bottom: 1.5rem; font-size: 1.05rem; }
.cta-section .btn-primary { background: #fff; color: #1a56db !important; font-size: 1rem; padding: 14px 36px; }
.cta-section .btn-primary:hover { background: #f1f5f9; }

/* Footer */
.home-footer { display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 2rem; font-size: 0.85rem; color: var(--c-text-2); border-top: 1px solid var(--c-border); background: var(--c-bg); }
.home-footer a { color: var(--c-text-2); text-decoration: none; margin-left: 1.5rem; }
.home-footer a:hover { color: var(--c-brand); }

/* Responsive */
@media (max-width: 768px) {
  .hero { flex-direction: column; padding: 3rem 1.5rem; text-align: center; }
  .hero-title { font-size: 1.8rem; }
  .hero-visual { max-width: 100%; margin-top: 2rem; }
  .cards-3, .cards-4 { grid-template-columns: 1fr; }
  .featured-product { flex-direction: column; padding: 0; }
  .tech-grid { justify-content: flex-start; }
  .home-footer { flex-direction: column; gap: 1rem; text-align: center; }
  .home-footer a { margin: 0 0.5rem; }
  .stats { gap: 1.5rem; flex-wrap: wrap; }
  .partners-row { flex-direction: column; align-items: center; }
  .nav-links { display: none; }
}
</style>
