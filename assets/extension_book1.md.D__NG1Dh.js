import{_ as i,c as a,aQ as n,o as l}from"./chunks/framework.mEXHt24O.js";const c=JSON.parse('{"title":"框架中同时引入了Tailwind CSS和ElementPlus第三方组件。","description":"","frontmatter":{},"headers":[],"relativePath":"extension/book1.md","filePath":"extension/book1.md","lastUpdated":1690561590000}'),t={name:"extension/book1.md"};function e(p,s,h,k,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="框架中同时引入了tailwind-css和elementplus第三方组件。" tabindex="-1">框架中同时引入了Tailwind CSS和ElementPlus第三方组件。 <a class="header-anchor" href="#框架中同时引入了tailwind-css和elementplus第三方组件。" aria-label="Permalink to &quot;框架中同时引入了Tailwind CSS和ElementPlus第三方组件。&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>会出现样式污染的问题是被引入的Tailwind CSS 的样式影响了</p></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> base;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> components;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utilities;</span></span></code></pre></div><h2 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h2><p>方式1：禁用Tailwind CSS的 Preflight <a href="https://www.tailwindcss.cn/docs/preflight#preflight" target="_blank" rel="noreferrer">跳转查看官方解释</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tailwind.config.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  corePlugins: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preflight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>方式2：可以在引入的Tailwind CSS样式中，覆盖掉影响Element Plus 样式的Tailwind CSS的一些基本样式。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> base;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> components;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utilities;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 覆盖影响antd的样式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  vertical-align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">initial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,8)]))}const o=i(t,[["render",e]]);export{c as __pageData,o as default};