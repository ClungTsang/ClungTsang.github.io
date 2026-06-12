<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div class="home-root">
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
    </header>

    <!-- ===== Hero Banner ===== -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-tag">AI 大模型 · 全栈开发 · GEO 品牌监测</div>
        <h1 class="hero-title">用 AI 与自动化<br/>为品牌创造可见的未来</h1>
        <p class="hero-desc">
          旗舰产品 OmniGEO — 帮助品牌在 ChatGPT、Perplexity、Gemini 等 AI 搜索中被看见、被推荐、被信任。
        </p>
        <div class="hero-actions">
          <a href="/products/omnigeo" class="btn-primary">了解 OmniGEO</a>
          <a href="/contact/" class="btn-outline">联系我们</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="/projects/omnigeo-landing.png" alt="OmniGEO 产品截图" />
      </div>
    </section>

    <!-- ===== Stats ===== -->
    <section class="stats">
      <div class="stat"><strong>4</strong><span>核心产品</span></div>
      <div class="stat"><strong>6+</strong><span>交付项目</span></div>
      <div class="stat"><strong>10+</strong><span>企业客户</span></div>
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
          <p>Spring Boot / Nuxt 4 / Vue 3 技术栈。从企业官网到 SaaS 平台，从电商系统到教务管理，端到端交付。</p>
          <a href="/products/ctn">查看项目 →</a>
        </div>
        <div class="card">
          <div class="card-icon">⚡</div>
          <h3>RPA 自动化</h3>
          <p>来也科技深度合作伙伴。为制造业、财务、电商场景定制端到端流程自动化方案，让人力聚焦高价值工作。</p>
          <a href="/contact/">咨询方案 →</a>
        </div>
      </div>
    </section>

    <!-- ===== Featured Product: OmniGEO ===== -->
    <section class="section bg-soft">
      <div class="section-head">
        <span class="section-label">旗舰产品</span>
        <h2>OmniGEO — 品牌 AI 可见性诊断平台</h2>
        <p>让品牌在 AI 搜索时代「被看见、被推荐、被信任」</p>
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
            <li>🧠 智能洞察 — 自动生成大纲 & FAQ</li>
          </ul>
          <a href="/products/omnigeo" class="btn-primary">查看完整介绍 →</a>
        </div>
      </div>
    </section>

    <!-- ===== Cases ===== -->
    <section class="section">
      <div class="section-head">
        <span class="section-label">客户案例</span>
        <h2>服务覆盖医疗、仓储、汽车、制造等行业</h2>
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
          <span>Railway</span><span>Cloudflare</span><span>Docker</span><span>Supabase</span>
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

    <!-- ===== Footer Info ===== -->
    <footer class="home-footer">
      <div>
        <strong>智恩创科科技（深圳）有限公司</strong><br/>
        深圳市龙岗区创投大厦 B510<br/>
        模力谷 OPC 社区优秀企业
      </div>
      <div>
        <a href="/products/omnigeo">OmniGEO</a>
        <a href="/about/">关于我们</a>
        <a href="/team/">团队</a>
        <a href="/contact/">联系</a>
      </div>
    </footer>
  </div>
</template>

<style>
/* ===== Reset & Root ===== */
.home-root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', sans-serif;
  color: #1a1a2e;
  background: #fff;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.home-root h2 { font-size: 1.8rem; font-weight: 700; margin: 0; }
.home-root p { margin: 0; color: #555; }

/* ===== Nav ===== */
.home-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}
.nav-logo { font-size: 1.1rem; font-weight: 700; color: #0f172a; text-decoration: none; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: #64748b; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: #1a56db; }

/* ===== Hero ===== */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem 4rem;
  gap: 3rem;
}
.hero-inner { flex: 1; max-width: 560px; }
.hero-tag {
  display: inline-block;
  background: #eef2ff;
  color: #1a56db;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
  color: #0f172a;
}
.hero-desc {
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.hero-actions { display: flex; gap: 12px; }
.btn-primary {
  display: inline-block;
  padding: 12px 28px;
  background: #1a56db;
  color: #fff !important;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary:hover { background: #1e40af; }
.btn-outline {
  display: inline-block;
  padding: 12px 28px;
  border: 1.5px solid #d1d5db;
  color: #374151;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s;
}
.btn-outline:hover { border-color: #1a56db; color: #1a56db; }
.hero-visual { flex: 1; max-width: 500px; }
.hero-visual img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.12);
}

/* ===== Stats ===== */
.stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  background: #fafbfc;
}
.stat { text-align: center; }
.stat strong { display: block; font-size: 2rem; color: #1a56db; font-weight: 800; }
.stat span { font-size: 0.85rem; color: #64748b; }

/* ===== Sections ===== */
.section { max-width: 1200px; margin: 0 auto; padding: 5rem 2rem; }
.section.bg-soft { background: #f8fafc; max-width: 100%; }
.section.bg-soft > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
.section-head { text-align: center; margin-bottom: 3rem; }
.section-label {
  display: inline-block;
  background: #eef2ff;
  color: #1a56db;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.8rem;
}
.section-head p { margin-top: 0.5rem; }

/* ===== Cards ===== */
.cards-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.card {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.card:hover { border-color: #1a56db; box-shadow: 0 4px 20px rgba(26,86,219,0.08); }
.card-icon { font-size: 2rem; margin-bottom: 0.8rem; }
.card h3 { font-size: 1.15rem; margin: 0 0 0.5rem; font-weight: 700; }
.card p { font-size: 0.9rem; line-height: 1.7; margin-bottom: 1rem; }
.card a { color: #1a56db; font-weight: 600; font-size: 0.9rem; text-decoration: none; }

/* ===== Featured Product ===== */
.featured-product {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  padding: 0 2rem;
}
.featured-images { flex: 1.2; }
.featured-images .fp-main {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  margin-bottom: 0.8rem;
}
.fp-thumbs { display: flex; gap: 8px; }
.fp-thumbs img {
  width: 32%;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}
.featured-info { flex: 1; }
.fp-stats-row { display: flex; gap: 1.5rem; margin-bottom: 1.2rem; }
.fp-stats-row div { text-align: center; }
.fp-stats-row strong { display: block; font-size: 1.6rem; color: #1a56db; }
.fp-stats-row span { font-size: 0.8rem; color: #64748b; }
.fp-features { list-style: none; padding: 0; margin: 0 0 1.5rem; }
.fp-features li { padding: 0.4rem 0; font-size: 0.9rem; color: #374151; }
.featured-info .btn-primary { display: inline-block; }

/* ===== Case Cards ===== */
.cards-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
.case-card {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  text-align: center;
  transition: box-shadow 0.2s;
}
.case-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.case-logo { font-size: 2.2rem; margin-bottom: 0.5rem; }
.case-card h4 { font-size: 1rem; margin: 0 0 0.3rem; font-weight: 700; }
.case-card p { font-size: 0.82rem; color: #64748b; line-height: 1.5; }

/* ===== Tech Grid ===== */
.tech-grid { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; padding: 0 2rem; }
.tech-col {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
  min-width: 160px;
}
.tech-col h4 { font-size: 0.85rem; font-weight: 700; margin: 0 0 0.6rem; color: #1a56db; text-transform: uppercase; }
.tech-col span {
  display: inline-block;
  background: #f1f5f9;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin: 2px 4px 2px 0;
  color: #374151;
}

/* ===== CTA ===== */
.cta-section {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a56db 0%, #1e40af 100%);
  color: #fff;
}
.cta-section h2 { color: #fff; margin-bottom: 0.5rem; }
.cta-section p { color: rgba(255,255,255,0.85); margin-bottom: 1.5rem; font-size: 1.05rem; }
.cta-section .btn-primary {
  background: #fff;
  color: #1a56db !important;
  font-size: 1rem;
  padding: 14px 36px;
}
.cta-section .btn-primary:hover { background: #f1f5f9; }

/* ===== Footer ===== */
.home-footer {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 0.85rem;
  color: #64748b;
  border-top: 1px solid #f1f5f9;
}
.home-footer a { color: #64748b; text-decoration: none; margin-left: 1.5rem; }
.home-footer a:hover { color: #1a56db; }

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .hero { flex-direction: column; padding: 3rem 1.5rem; text-align: center; }
  .hero-title { font-size: 1.8rem; }
  .hero-visual { max-width: 100%; margin-top: 2rem; }
  .cards-3, .cards-4 { grid-template-columns: 1fr; }
  .featured-product { flex-direction: column; padding: 0; }
  .tech-grid { justify-content: flex-start; }
  .home-footer { flex-direction: column; gap: 1rem; text-align: center; }
  .home-footer a { margin: 0 0.5rem; }
  .stats { gap: 1.5rem; }
}
</style>
