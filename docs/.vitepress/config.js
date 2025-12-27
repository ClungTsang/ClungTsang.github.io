export default {
  lang: 'en-ZH',
  title: '智恩科创',
  description: 'IT Services and RPA Automation Partner in the Greater Bay Area',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        siteTitle: '智恩创科科技',
        title: '智恩创科科技（深圳）有限公司 · IT服务与 RPA 自动化 · 大湾区',
        description: '智恩创科科技（深圳）有限公司，专注大湾区企业 IT 服务与 RPA 自动化落地，基于 Spring 全家桶与 Vue 技术栈，为跨境电商、独立站、财务与小程序等场景提供稳定可靠的数字化解决方案。',
        nav: [
          { text: '关于我们', link: '/about/' },
          { text: '服务方案', link: '/services/' },
          { text: '团队介绍', link: '/team/' },
          { text: '联系我们', link: '/contact/' }
        ],
        outlineTitle: '章节导航',
        docFooter: {
          prev: '←上一篇',
          next: '下一篇→'
        },
        lastUpdatedText: '上次更新时间',
        sidebar: {
          '/': [
            { text: '关于我们', link: '/about/' },
            { text: '服务方案', link: '/services/' },
            { text: '团队介绍', link: '/team/' },
            { text: '联系我们', link: '/contact/' }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        siteTitle: 'Zhi En Chuangke Tech',
        title: 'Zhi En Chuangke Technology (Shenzhen) · IT Services & RPA · GBA',
        description: 'Zhi En Chuangke Technology (Shenzhen) focuses on IT services and RPA automation in the Greater Bay Area, using Spring and Vue stacks to deliver stable digital solutions for cross-border e-commerce, standalone sites, finance and mini programs.',
        nav: [
          { text: 'About Us', link: '/en/about/' },
          { text: 'Services', link: '/en/services/' },
          { text: 'Team', link: '/en/team/' },
          { text: 'Contact Us', link: '/en/contact/' }
        ],
        outlineTitle: 'On this page',
        docFooter: {
          prev: '← Previous',
          next: 'Next →'
        },
        lastUpdatedText: 'Last updated',
        sidebar: {
          '/en/': [
            { text: 'About Us', link: '/en/about/' },
            { text: 'Services & Solutions', link: '/en/services/' },
            { text: 'Team', link: '/en/team/' },
            { text: 'Contact Us', link: '/en/contact/' }
          ]
        }
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      themeConfig: {
        siteTitle: '智恩創科科技',
        title: '智恩創科科技（深圳）有限公司 · IT服務與 RPA 自動化 · 大灣區',
        description: '智恩創科科技（深圳）有限公司，專注大灣區企業 IT 服務與 RPA 自動化落地，基於 Spring 全家桶與 Vue 技術棧，為跨境電商、獨立站、財務與小程序等場景提供穩定可靠的數位化解決方案。',
        nav: [
          { text: '關於我們', link: '/zh-TW/about/' },
          { text: '服務方案', link: '/zh-TW/services/' },
          { text: '團隊介绍', link: '/zh-TW/team/' },
          { text: '聯絡我們', link: '/zh-TW/contact/' }
        ],
        outlineTitle: '章節導航',
        docFooter: {
          prev: '←上一篇',
          next: '下一篇→'
        },
        lastUpdatedText: '上次更新時間',
        sidebar: {
          '/zh-TW/': [
            { text: '關於我們', link: '/zh-TW/about/' },
            { text: '服務方案', link: '/zh-TW/services/' },
            { text: '團隊介绍', link: '/zh-TW/team/' },
            { text: '聯絡我們', link: '/zh-TW/contact/' }
          ]
        }
      }
    }
  },
  themeConfig: {
    sitemap: {
      hostname: 'https://innogrid.asia'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Zhi En Chuangke Technology'
    },
    search: {
      provider: 'local'
    },
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/ClungTsang'
    //   },
    //   {
    //     icon: {
    //       svg: '<svg t="1714848421037" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1530" width="200" height="200"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="1531"></path></svg>'
    //     },
    //     link: 'https://juejin.cn/user/289926802319896'
    //   }
    // ],
    outline: 'deep',
    lastUpdated: true,
    i18nRouting: true
  }
}
