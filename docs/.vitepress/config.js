export default {
  themeConfig: {
    head: ['link', { rel: 'icon', href: '/favicon.ico' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present HIsheR'
    },
    search: {
      provider: 'local'
    },
    lang: 'zh-CN',
    siteTitle: "HIsheR",
    title: 'HIsheR`s blog',
    description: '成年人没有四季，只有工作日和周末，在无需onCall就能安睡的周末夜晚，总是不约而同梦见',
    logo: "https://www.hisher.site/pic/star.webp",
    nav: [
      { text: "Nuxt3", link: "/nuxt3/index" },
      { text: "Vue3", link: "/vue/index" },
      { text: "性能调优", link: "/performance/index" },
      { text: "自我介绍", link: "/intro/index" },
    ],
    socialLinks: [{
      icon: 'github',
      link: "https://github.com/ClungTsang"
    },
    {
      icon: {
        svg:'<svg t="1714848421037" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1530" width="200" height="200"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="1531"></path></svg>'
      },
      link: "https://juejin.cn/user/289926802319896"

    }
    ],
    // 右侧边栏标题
    outline: 'deep',
    outlineTitle: '章节导航',

    // 上下篇文本提示文字
    docFooter: {
      prev: '←上一篇',
      next: '下一篇→'
    },
    // 上次更新时间提示文字
    lastUpdatedText: '上次更新时间',
    lastUpdated: true,
    sidebar: {
      "/": [
        {
          text: 'js技巧',
          collapsed: true, // 默认展开
          link: '/js/index',
          items: [
            {
              text: 'for...in和for...of的区别',
              link: '/js/book1_for.md'
            },
            {
              text: 'js执行原理',
              link: '/js/book2_loop.md'
            },
            {
              text: '隐式转化引申的拓展问题',
              link: '/js/book3_trans.md'
            },
            {
              text: '运算符优先级',
              link: '/js/book4_trans_extra.md'
            },
            {
              text: 'ES6中Symbol的用法',
              link: '/js/book5_Symbol.md'
            },
            {
              text: '手写call方法',
              link: '/js/book6_rewrite_call.md'
            }
          ]
        },
        {
          collapsed: true, // 默认展开
          text: 'css', link: '/css/index', items: [
            { text: '如何使用transform', link: '/css/book1_transform.md' },
            { text: '8种让元素水平垂直居中的方式', link: '/css/book2_center.md' },
            { text: 'white-space的用法', link: '/css/book3_whitespace.md' },
          ]
        },
        {
          collapsed: true, // 默认展开
          text: '性能调优', link: '/performance/index', items: [
            { text: '考虑使用函数或计算属性来生成ref', link: '/performance/book1.md' },
          ]
        },
        {
          collapsed: true, // 默认展开
          text: 'vue', link: '/vue/index', items: [
            { text: 'vue3响应式原理', link: '/vue/book1_proxy.md' },
            { text: 'ref和reactive的区别', link: '/vue/book2_ref&reactive.md' },
          ]
        },
        
        {
          collapsed: true, // 默认展开
          text: 'nuxt3', link: '/nuxt3/index', items: [
            { text: '安装、运行nuxt3项目', link: '/nuxt3/step1_create.md' },
            { text: 'nuxt3中最优雅的请求方式', link: '/nuxt3/step2_fetch.md' }
          ]
        },
        {
          collapsed: true, // 默认展开
          text: 'http', link: '/http/index', items: [
            { text: '浏览器中的缓存机制', link: '/http/book1_cache.md' },
          ]
        },
        {
          collapsed: true, // 默认展开
          text: 'npm技巧', link: '/npm/index.md', items: [
            { text: '切换镜像源', link: '/npm/book1_mirror.md' },
            { text: '额外指令', link: '/npm/book2_extra.md' },
          ]
        },
        { text: '个人简历', link: '/intro/index.md' }
      ],
    },
  },
}
