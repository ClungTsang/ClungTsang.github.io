<script setup>
import { ref, onMounted } from 'vue'

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
<div class="root" :class="{ dark: isDark }">

<!-- Nav -->
<header class="nav">
  <a href="/" class="nav-logo">智恩创科科技</a>
  <nav class="nav-links">
    <a href="/products/omnigeo">产品</a><a href="/about/">关于</a><a href="/case/">案例</a><a href="/team/">团队</a><a href="/contact/">联系</a>
  </nav>
  <div class="nav-utils">
    <select class="lang-sel" :value="currentLang" @change="switchLang(($event.target).value)">
      <option v-for="l in langs" :key="l.key" :value="l.key">{{ l.label }}</option>
    </select>
    <button class="dark-btn" @click="toggleDark">{{ isDark ? '☀️' : '🌙' }}</button>
  </div>
</header>

<!-- Hero -->
<section class="hero">
  <div class="hero-txt">
    <div class="hero-tag">AI 大模型 · RPA 自动化 · GEO 生成引擎优化</div>
    <h1>专注 AI 大模型 + RPA 自动化<br/>深港澳·东莞领先的互联网转型技术服务商</h1>
    <p>来也科技 RPA 官方合作伙伴 · 香港科技园 IDEATION 计划成员 · 深港青创汇常驻技术合作伙伴</p>
    <div class="hero-btns">
      <a href="/products/omnigeo" class="btn">了解 OmniGEO</a>
      <a href="/contact/" class="btn-o">联系我们</a>
    </div>
  </div>
  <div class="hero-img">
    <img src="/projects/omnigeo-landing.png" alt="OmniGEO" />
  </div>
</section>

<!-- Stats -->
<section class="stats">
  <div><strong>8+</strong><span>重点案例</span></div>
  <div><strong>$12M+</strong><span>CTN 月交易额</span></div>
  <div><strong>5,000万+</strong><span>氪金达人年营收(MOP)</span></div>
  <div><strong>70%+</strong><span>RPA 人工节省</span></div>
</section>

<!-- Services -->
<section class="sec">
  <div class="sec-hd"><span class="lbl">核心能力</span><h2>AI 驱动的全栈技术服务</h2></div>
  <div class="grid3">
    <div class="card">
      <div class="card-icon">🤖</div>
      <h3>GEO 生成引擎优化</h3>
      <p>自研 OmniGEO 平台，在 AI 搜索时代为品牌构建结构化答案信号。持续监测品牌在 ChatGPT、Perplexity 等 AI 中被引用率和正面提及率。</p>
      <a href="/products/omnigeo">了解 OmniGEO →</a>
    </div>
    <div class="card">
      <div class="card-icon">⚡</div>
      <h3>RPA 流程自动化</h3>
      <p>来也科技官方合作伙伴，深耕制造业 ERP（鼎捷/SAP）深度集成。月处理量千万级，人工操作节省 70%+，效率提升 60-80%。</p>
      <a href="/case/">查看案例 →</a>
    </div>
    <div class="card">
      <div class="card-icon">💻</div>
      <h3>全栈定制开发</h3>
      <p>精通跨境电商、教育 SaaS、Web3D 交互等复杂系统。从架构设计到部署运维的全生命周期服务，交付完整 SOW 与架构文档。</p>
      <a href="/products/ctn">查看项目 →</a>
    </div>
  </div>
</section>

<!-- Featured: CTN -->
<section class="sec bg">
  <div class="sec-hd"><span class="lbl">标杆项目</span><h2>CTN Express — 中非跨境贸易平台</h2><p>连接非洲与中国的 B2B/B2C 贸易桥梁</p></div>
  <div class="feat">
    <div class="feat-info">
      <div class="big-stats">
        <div><strong>4,300+</strong><span>在线商品数</span></div>
        <div><strong>50,000+</strong><span>月均订单量</span></div>
        <div><strong>$12M+</strong><span>月均交易额</span></div>
        <div><strong>150,000+</strong><span>注册用户数</span></div>
      </div>
      <ul class="feat-list">
        <li>🏗️ Spring Boot 微服务 + Vue 3 前后台分离架构</li>
        <li>💱 11 种货币自动汇率换算与多币种结算引擎</li>
        <li>📦 30+ 数据表、4300+ 商品 SKU 高并发支撑</li>
      </ul>
      <a href="/products/ctn" class="btn">查看详情 →</a>
    </div>
  </div>
</section>

<!-- Featured: 氪金达人 -->
<section class="sec">
  <div class="sec-hd"><span class="lbl">标杆项目</span><h2>氪金达人 — 澳门头部游戏充值平台</h2><p>覆盖日港澳地区 · 多币种 · 多仓联动 · 年营收 5,000 万 MOP</p></div>
  <div class="feat">
    <div class="feat-img"><img src="/projects/kejin-home.png" alt="氪金达人" /></div>
    <div class="feat-info">
      <div class="big-stats">
        <div><strong>5</strong><span>香港实体门店</span></div>
        <div><strong>3</strong><span>收购模式</span></div>
        <div><strong>9.6万+</strong><span>源代码文件</span></div>
      </div>
      <ul class="feat-list">
        <li>🛒 游戏点数卡商城 + Pokemon TCG 零售商城双平台</li>
        <li>🏪 澳门、香港多仓库存实时同步，仓库智能锁定/解锁</li>
        <li>🇯🇵 日本收购站 — 深度串接 Zaico 库存 API + eKYC 身份验证</li>
        <li>🛡️ 高价值卡牌交易多维度风控体系（行为分析 + 设备指纹）</li>
      </ul>
    </div>
  </div>
</section>

<!-- Partners -->
<section class="sec bg">
  <div class="sec-hd"><span class="lbl">合作伙伴与资质</span><h2>深度合作生态</h2></div>
  <div class="partners">
    <div class="p-card">
      <img src="/partners/sz-hk-youth.jpeg" alt="深港青创汇" class="p-logo" />
      <strong>深港青创汇</strong><span>常驻技术合作伙伴</span>
    </div>
    <div class="p-card">
      <div class="p-icon">🏛️</div>
      <strong>香港科技园 HKSTP</strong><span>IDEATION 计划成员</span>
    </div>
    <div class="p-card">
      <div class="p-icon">🤖</div>
      <strong>来也科技</strong><span>RPA 官方合作伙伴</span>
    </div>
    <div class="p-card hi">
      <div class="p-icon">🃏</div>
      <strong>澳门氪金达人</strong><span>深度技术支持单位</span>
    </div>
  </div>
</section>

<!-- All Cases -->
<section class="sec">
  <div class="sec-hd"><span class="lbl">项目案例</span><h2>跨行业、多领域的实战积累</h2></div>
  <div class="grid4">
    <div class="c-card"><div class="c-icon">🏭</div><h4>丰宾电子</h4><p>制造业 RPA — 鼎捷+SAP 双系统协同，节省 70% 人工</p></div>
    <div class="c-card"><div class="c-icon">🏭</div><h4>华睿智连</h4><p>电子贸易 RPA — 月处理千万级，效率提升 60-80%</p></div>
    <div class="c-card"><div class="c-icon">🏥</div><h4>全仁医疗</h4><p>GEO 优化 — AI 搜索排名优化，品牌提及率 0→50%</p></div>
    <div class="c-card"><div class="c-icon">📦</div><h4>時昌迷你倉</h4><p>GEO 诊断 — AI 答案信号密度对比 × 内容重构</p></div>
    <div class="c-card"><div class="c-icon">🚗</div><h4>普修科技</h4><p>四期合作 — SEO / Web3D 渲染 / 性能优化 / 长期运维</p></div>
    <div class="c-card"><div class="c-icon">📅</div><h4>智能排课系统</h4><p>千人规模冲突检测 — 排课缩短至 15min，效率 20x</p></div>
    <div class="c-card"><div class="c-icon">🌍</div><h4>CTN Express</h4><p>中非跨境 B2B/B2C — $12M 月交易额 · 15万用户</p></div>
    <div class="c-card"><div class="c-icon">🃏</div><h4>氪金达人</h4><p>澳门 No.1 — 5 门店 · 双平台 · 年营收 5000 万 MOP</p></div>
  </div>
</section>

<!-- Tech -->
<section class="sec bg">
  <div class="sec-hd"><span class="lbl">技术能力</span><h2>全栈技术栈</h2></div>
  <div class="tech-row">
    <div class="t-col"><h4>前端</h4><span>Nuxt 4</span><span>Vue 3</span><span>TypeScript</span><span>Element Plus</span><span>Three.js</span></div>
    <div class="t-col"><h4>后端</h4><span>Spring Boot</span><span>Spring Cloud</span><span>MyBatis Plus</span><span>Node.js</span></div>
    <div class="t-col"><h4>AI & 模型</h4><span>DeepSeek</span><span>MiMo</span><span>通义千问</span><span>GLM</span></div>
    <div class="t-col"><h4>数据 & 基建</h4><span>Supabase</span><span>MySQL</span><span>Railway</span><span>Docker</span><span>Cloudflare</span></div>
    <div class="t-col"><h4>自动化</h4><span>来也 RPA</span><span>Firecrawl</span><span>Python</span><span>Cron Jobs</span></div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <h2>准备好让品牌在 AI 时代被看见了吗？</h2>
  <p>从一次免费 GEO 诊断开始，了解你的品牌在 AI 搜索中的真实表现。</p>
  <a href="/contact/" class="btn-w">联系我们 →</a>
</section>

<!-- Footer -->
<footer class="ft">
  <div><strong>智恩创科科技（深圳）有限公司</strong><br/>深圳市龙岗区创投大厦 B510<br/>业务咨询：18680271761</div>
  <div><a href="/products/omnigeo">OmniGEO</a><a href="/about/">关于</a><a href="/case/">案例</a><a href="/team/">团队</a><a href="/contact/">联系</a></div>
</footer>

</div>
</template>

<style>
.root {
  --bg: #fff; --bg2: #f8fafc; --tx: #0f172a; --tx2: #64748b; --bd: #e5e7eb;
  --br: #1a56db; --br2: #eef2ff; --card: #fff;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', sans-serif;
  color: var(--tx); background: var(--bg); line-height: 1.6; -webkit-font-smoothing: antialiased;
}
.root.dark { --bg: #0f172a; --bg2: #1e293b; --tx: #f1f5f9; --tx2: #94a3b8; --bd: #334155; --br: #3b82f6; --br2: #1e3a5f; --card: #1e293b; }
h2 { font-size: 1.8rem; font-weight: 700; margin: 0; }
p { margin: 0; color: var(--tx2); }

.nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 1rem 2rem; border-bottom: 1px solid var(--bd); }
.nav-logo { font-size: 1.1rem; font-weight: 700; color: var(--tx); text-decoration: none; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: var(--tx2); text-decoration: none; font-size: .9rem; font-weight: 500; }
.nav-links a:hover { color: var(--br); }
.nav-utils { display: flex; align-items: center; gap: 10px; }
.lang-sel { padding: 4px 8px; border: 1px solid var(--bd); border-radius: 6px; background: var(--bg); color: var(--tx); font-size: .8rem; cursor: pointer; }
.dark-btn { background: none; border: 1px solid var(--bd); border-radius: 6px; padding: 4px 8px; cursor: pointer; font-size: 1rem; }

.hero { display: flex; align-items: center; max-width: 1200px; margin: 0 auto; padding: 5rem 2rem 4rem; gap: 3rem; }
.hero-txt { flex: 1; max-width: 600px; }
.hero-tag { display: inline-block; background: var(--br2); color: var(--br); padding: 6px 16px; border-radius: 20px; font-size: .85rem; font-weight: 600; margin-bottom: 1rem; }
.hero-txt h1 { font-size: 2.4rem; font-weight: 800; line-height: 1.25; letter-spacing: -.02em; margin: 0 0 .8rem; color: var(--tx); }
.hero-txt p { font-size: .95rem; line-height: 1.7; margin-bottom: 1.5rem; }
.hero-btns { display: flex; gap: 12px; }
.btn { display: inline-block; padding: 12px 28px; background: var(--br); color: #fff !important; border-radius: 8px; font-weight: 600; font-size: .95rem; text-decoration: none; }
.btn:hover { background: #1e40af; }
.btn-o { display: inline-block; padding: 12px 28px; border: 1.5px solid var(--bd); color: var(--tx); border-radius: 8px; font-weight: 600; font-size: .95rem; text-decoration: none; }
.btn-o:hover { border-color: var(--br); color: var(--br); }
.btn-w { display: inline-block; padding: 14px 36px; background: #fff; color: #1a56db !important; border-radius: 8px; font-weight: 700; font-size: 1rem; text-decoration: none; }
.hero-img { flex: 1; max-width: 480px; }
.hero-img img { width: 100%; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,.12); }

.stats { display: flex; justify-content: center; gap: 3rem; padding: 2rem; border-top: 1px solid var(--bd); border-bottom: 1px solid var(--bd); background: var(--bg2); text-align: center; }
.stats strong { display: block; font-size: 1.8rem; color: var(--br); font-weight: 800; }
.stats span { font-size: .85rem; color: var(--tx2); }

.sec { max-width: 1200px; margin: 0 auto; padding: 5rem 2rem; }
.sec.bg { background: var(--bg2); max-width: 100%; }
.sec.bg > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
.sec-hd { text-align: center; margin-bottom: 3rem; }
.lbl { display: inline-block; background: var(--br2); color: var(--br); padding: 4px 14px; border-radius: 20px; font-size: .8rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; margin-bottom: .8rem; }
.sec-hd p { margin-top: .5rem; }

.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.card { padding: 2rem; border: 1px solid var(--bd); border-radius: 12px; background: var(--card); }
.card:hover { border-color: var(--br); box-shadow: 0 4px 20px rgba(26,86,219,.08); }
.card-icon { font-size: 2rem; margin-bottom: .8rem; }
.card h3 { font-size: 1.15rem; margin: 0 0 .5rem; font-weight: 700; }
.card p { font-size: .9rem; line-height: 1.7; margin-bottom: 1rem; }
.card a { color: var(--br); font-weight: 600; font-size: .9rem; text-decoration: none; }

.feat { display: flex; gap: 2.5rem; align-items: flex-start; padding: 0 2rem; }
.feat-img { flex: 1; }
.feat-img img { width: 100%; border-radius: 10px; box-shadow: 0 8px 30px rgba(0,0,0,.1); }
.feat-info { flex: 1; }
.big-stats { display: flex; gap: 1.2rem; margin-bottom: 1rem; flex-wrap: wrap; }
.big-stats div { text-align: center; min-width: 90px; }
.big-stats strong { display: block; font-size: 1.5rem; color: var(--br); font-weight: 800; }
.big-stats span { font-size: .78rem; color: var(--tx2); }
.feat-list { list-style: none; padding: 0; margin: 0 0 1.5rem; }
.feat-list li { padding: .35rem 0; font-size: .9rem; color: var(--tx); }

.partners { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; padding: 0 2rem; }
.p-card { text-align: center; padding: 1.5rem 2rem; border: 1px solid var(--bd); border-radius: 10px; background: var(--card); min-width: 150px; }
.p-card.hi { border-color: var(--br); }
.p-icon { font-size: 2rem; margin-bottom: .5rem; }
.p-logo { height: 48px; margin-bottom: .5rem; }
.p-card strong { display: block; font-size: .95rem; color: var(--tx); margin-bottom: .2rem; }
.p-card span { font-size: .78rem; color: var(--tx2); }

.grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.c-card { padding: 1.3rem; border: 1px solid var(--bd); border-radius: 10px; text-align: center; background: var(--card); }
.c-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.06); }
.c-icon { font-size: 1.8rem; margin-bottom: .4rem; }
.c-card h4 { font-size: .95rem; margin: 0 0 .2rem; font-weight: 700; }
.c-card p { font-size: .8rem; line-height: 1.5; }

.tech-row { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; padding: 0 2rem; }
.t-col { background: var(--card); border: 1px solid var(--bd); border-radius: 10px; padding: 1rem 1.3rem; min-width: 150px; }
.t-col h4 { font-size: .8rem; font-weight: 700; margin: 0 0 .5rem; color: var(--br); text-transform: uppercase; }
.t-col span { display: inline-block; background: var(--bg2); padding: 3px 10px; border-radius: 4px; font-size: .78rem; margin: 2px 3px 2px 0; color: var(--tx2); }

.cta { text-align: center; padding: 5rem 2rem; background: linear-gradient(135deg, #1a56db 0%, #1e40af 100%); color: #fff; }
.cta h2 { color: #fff; margin-bottom: .5rem; }
.cta p { color: rgba(255,255,255,.85); margin-bottom: 1.5rem; font-size: 1.05rem; }

.ft { display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 2rem; font-size: .85rem; color: var(--tx2); border-top: 1px solid var(--bd); }
.ft a { color: var(--tx2); text-decoration: none; margin-left: 1.2rem; }
.ft a:hover { color: var(--br); }

@media (max-width: 768px) {
  .hero { flex-direction: column; padding: 3rem 1.5rem; text-align: center; }
  .hero-txt h1 { font-size: 1.6rem; }
  .hero-img { max-width: 100%; margin-top: 2rem; }
  .grid3, .grid4 { grid-template-columns: 1fr; }
  .feat { flex-direction: column; padding: 0; }
  .big-stats { justify-content: center; }
  .tech-row { justify-content: flex-start; }
  .ft { flex-direction: column; gap: 1rem; text-align: center; }
  .ft a { margin: 0 .5rem; }
  .stats { gap: 1.2rem; flex-wrap: wrap; }
  .partners { flex-direction: column; align-items: center; }
  .nav-links { display: none; }
}
</style>
