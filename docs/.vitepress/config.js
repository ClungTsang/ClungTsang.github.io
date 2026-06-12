export default {
  lang: 'en-ZH',
  title: '智恩科创',
  description: 'IT Services and RPA Automation Partner',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        siteTitle: '智恩创科科技',
        title: '智恩创科科技 · AI 大模型 · GEO · 全栈开发',
        description: '智恩创科科技，专注 AI 大模型应用、GEO 品牌监测与全栈开发。',
        nav: [
          { text: '产品', link: '/products/omnigeo', activeMatch: '/products/' },
          { text: '关于我们', link: '/about/' },
          { text: '案例', link: '/case/' },
          { text: '团队', link: '/team/' },
          { text: '联系我们', link: '/contact/' }
        ],
        docFooter: { prev: '←上一篇', next: '下一篇→' },
        lastUpdatedText: '上次更新时间',
      }
    },
    en: {
      label: 'English', lang: 'en', link: '/en/',
      themeConfig: {
        siteTitle: 'Zhi En Chuangke Tech',
        nav: [
          { text: 'About', link: '/en/about/' },
          { text: 'Cases', link: '/en/case/' },
          { text: 'Contact', link: '/en/contact/' }
        ],
      }
    },
    'zh-TW': {
      label: '繁體中文', lang: 'zh-TW', link: '/zh-TW/',
      themeConfig: {
        siteTitle: '智恩創科科技',
        nav: [
          { text: '關於我們', link: '/zh-TW/about/' },
          { text: '案例', link: '/zh-TW/case/' },
          { text: '聯絡我們', link: '/zh-TW/contact/' }
        ],
      }
    }
  },
  themeConfig: {
    sitemap: { hostname: 'https://innogrid.asia' },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Zhi En Chuangke Technology'
    },
    search: { provider: 'local' },
    outline: false,
    lastUpdated: true,
    i18nRouting: true
  }
}
