import{_ as i,c as a,aQ as t,o as n}from"./chunks/framework.mEXHt24O.js";const c=JSON.parse('{"title":"我从CSR转变到SSR过程中，让我耗时最多的环节，是网络请求...","description":"","frontmatter":{},"headers":[],"relativePath":"nuxt3/step2_fetch.md","filePath":"nuxt3/step2_fetch.md","lastUpdated":1690733455000}'),l={name:"nuxt3/step2_fetch.md"};function e(h,s,p,k,r,o){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="我从csr转变到ssr过程中-让我耗时最多的环节-是网络请求" tabindex="-1">我从CSR转变到SSR过程中，让我耗时最多的环节，是网络请求... <a class="header-anchor" href="#我从csr转变到ssr过程中-让我耗时最多的环节-是网络请求" aria-label="Permalink to &quot;我从CSR转变到SSR过程中，让我耗时最多的环节，是网络请求...&quot;">​</a></h1><p>我查阅了各种教程，大部分教程都在请求自己的服务端。我想说，后端同学已经写好了N个接口，难道我就要写N个服务端接口，然后客户端又写N个接口调自己的服务端接口吗。兄弟看下去，这篇文章教你更优雅的请求方式。</p><h1 id="网络请求中-如果你跟我一样有以下困扰" tabindex="-1">网络请求中，如果你跟我一样有以下困扰 <a class="header-anchor" href="#网络请求中-如果你跟我一样有以下困扰" aria-label="Permalink to &quot;网络请求中，如果你跟我一样有以下困扰&quot;">​</a></h1><ul><li>各种教程都在请求自己写的/server/api下面的接口，拜托我又不是搞全栈。</li><li>我们公司有后端提供接口，能不能请求转发直接调。</li><li>我配置请求转发之后本地是成功了，但是线上又不行了。</li><li>或者我根本不会配请求转发，直接就跨域。</li><li>我这样配了之后还能保证服务端渲染吗。</li></ul><h1 id="利用nuxt3中的混合渲染就能轻松搞定" tabindex="-1">利用Nuxt3中的混合渲染就能轻松搞定 <a class="header-anchor" href="#利用nuxt3中的混合渲染就能轻松搞定" aria-label="Permalink to &quot;利用Nuxt3中的混合渲染就能轻松搞定&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>混合渲染使用 <strong>Route Rules</strong> 允许每个路由使用不同的缓存规则，并决定服务器应如何响应给定 URL 上的新请求。</li></ul></div><h4 id="_1、在nuxt-config-ts中添加以下配置" tabindex="-1">1、在nuxt.config.ts中添加以下配置 <a class="header-anchor" href="#_1、在nuxt-config-ts中添加以下配置" aria-label="Permalink to &quot;1、在nuxt.config.ts中添加以下配置&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  routeRules: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 针对路径进行接口转发</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;/dev-api/**&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      proxy: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`https://cnodejs.org/api/v1/**\`</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // https://cnodejs.org/api/v1 是个公共接口api前缀，将其替换为后端写好的接口调用地址就好</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h4 id="_2、在业务层或者封装好的网络请求工具类中调用-usefetch-同时设置baseurl为-dev-api" tabindex="-1">2、在业务层或者封装好的网络请求工具类中调用 <strong>useFetch()</strong> ，同时设置baseURL为 <strong>/dev-api</strong> <a class="header-anchor" href="#_2、在业务层或者封装好的网络请求工具类中调用-usefetch-同时设置baseurl为-dev-api" aria-label="Permalink to &quot;2、在业务层或者封装好的网络请求工具类中调用 **useFetch()** ，同时设置baseURL为 **/dev-api**&quot;">​</a></h4><blockquote><p>需要注意的是，使用useFetch才能有水合作用，$fetch只是一个跟axios类似的网络请求库</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 业务代码中 /pages/home/index</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click=&quot;getInfo&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      获取一个请求吧</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {{ info?.title }}</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const info = ref();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const getInfo = async () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 请求一个内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const { data, error } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useFetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/topic/5433d5e4e737cbe96dcef312&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    baseURL: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/dev-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  info.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.value.data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getInfo();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="_3、pnpm-run-dev-运行程序" tabindex="-1">3、<strong>pnpm run dev</strong> 运行程序 <a class="header-anchor" href="#_3、pnpm-run-dev-运行程序" aria-label="Permalink to &quot;3、**pnpm run dev** 运行程序&quot;">​</a></h4><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af16e466acde4c25859c1307e918ab3a~tplv-k3u1fbpfcp-watermark.image?" alt="image.png" width="100%"><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5394279860494f9992e849b5a401ccef~tplv-k3u1fbpfcp-watermark.image?" alt="image.png" width="100%"><h4 id="_4、页面中点击button也可以正常请求" tabindex="-1">4、页面中点击button也可以正常请求 <a class="header-anchor" href="#_4、页面中点击button也可以正常请求" aria-label="Permalink to &quot;4、页面中点击button也可以正常请求&quot;">​</a></h4><h1 id="看文档才是第一生产力" tabindex="-1">看文档才是第一生产力 <a class="header-anchor" href="#看文档才是第一生产力" aria-label="Permalink to &quot;看文档才是第一生产力&quot;">​</a></h1><p>这里推荐两个Nuxt3的中文文档</p><ul><li><a href="https://ezdoc.cn/docs/nuxtjs/getting-started/introduction" target="_blank" rel="noreferrer">某个高手写的中文文档</a></li><li><a href="https://nuxt.com.cn/" target="_blank" rel="noreferrer">非官方中文文档</a></li></ul><p>再推荐一个公共api，可以自己调着玩</p><ul><li><a href="https://cnodejs.org/api" target="_blank" rel="noreferrer">cnode官方提供</a></li></ul><h1 id="第一次写文章-多多包涵啦" tabindex="-1">第一次写文章，多多包涵啦！ <a class="header-anchor" href="#第一次写文章-多多包涵啦" aria-label="Permalink to &quot;第一次写文章，多多包涵啦！&quot;">​</a></h1><p>这个方案可能不是我最先发现的，也可能不算是最优解决方案。<br> 希望朋友们看到类似的文章或者更好的解决方案，可以踢我一脚！！！<br> 另外这是我开发一个多月的<a href="https://www.lc.plus" target="_blank" rel="noreferrer">官网</a>，大家可以友善提建议。<br> 该文章已同步发送到<a href="https://juejin.cn/post/7252976055094001720" target="_blank" rel="noreferrer">掘金</a></p>`,22)]))}const E=i(l,[["render",e]]);export{c as __pageData,E as default};