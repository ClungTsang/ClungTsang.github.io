export default {
  themeConfig: {
    head: ['link', { rel: 'icon', href: '/favicon.ico' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present HIsheR'
    },
    lang: 'zh-CN',
    siteTitle: "HIsheR",
    title: 'HIsheR`s blog',
    description: '成年人没有四季，只有工作日和周末，在无需onCall就能安睡的周末夜晚，总是不约而同梦见',
    logo: "https://hisher.site/pic/star.webp",
    nav: [
      { text: "Nuxt3", link: "/nuxt3/index" },
      { text: "Vue3", link: "/vue/index" },
      { text: "JS", link: "/js/index" },
      { text: "CSS", link: "/css/index" },
    ],
    socialLinks: [{
      icon: 'github',
      link: "https://github.com/ClungTsang"
    }, {
      icon: {
        svg: '<svg t="1671270414569" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2135" width="64" height="64"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D" p-id="2136"></path></svg>'
      },
      link: "https://gitee.com/TsangClung"
    }],
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
        // {
        //   text: "技术文章",
        //   items: [
        {
          text: "目录",
          link: "/book/index",
          items: [
            {
              text: 'js技巧',
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
                  text: '隐式转化面试题',
                  link: '/js/book3_trans.md'
                }
              ]
            },
            {
              text: 'css', link: '/css/index', items: [
                { text: '如何使用transform', link: '/css/book1_transform.md' },
                { text: '8种让元素水平垂直居中的方式', link: '/css/book2_center.md' },
              ]
            },
            {
              text: 'http', link: '/http/index', items: [
                { text: '浏览器中的缓存机制', link: '/http/book1_cache.md' },
              ]
            },
            {
              text: 'vue', link: '/vue/index', items: [
                { text: 'vue3响应式原理', link: '/vue/book1_proxy.md' },
                { text: 'ref和reactive的区别', link: '/vue/book2_ref&reactive.md' },
                // { text: '在vue中实现拖动', link: '/vue/book3_drag.md' },
              ]
            },
            {
              text: 'nuxt3', link: '/nuxt3/index', items: [
                { text: '安装、运行nuxt3项目', link: '/nuxt3/step1_create.md' },
                { text: 'nuxt3中最优雅的请求方式', link: '/nuxt3/step2_fetch.md' }
              ]
            },
            {
              text: 'npm技巧', link: '/npm/index.md', items: [
                { text: '切换镜像源', link: '/npm/book1_mirror.md' },
                { text: '额外指令', link: '/npm/book2_extra.md' },
              ]
            },
          ],
        },
      ],
    },
  },
}
