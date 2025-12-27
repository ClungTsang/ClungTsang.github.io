---
layout: page
title: 我們的團隊
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://hisher-1258325826.cos.ap-guangzhou.myqcloud.com/blog/avatar.webp',
    name: 'CEO',
    title: '首席執行官',
    desc: '負責公司整體戰略規劃與業務方向把控，推動企業持續成長。',
    // links: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/ClungTsang'
    //   }
    // ]
  },
  {
    avatar: 'https://hisher-1258325826.cos.ap-guangzhou.myqcloud.com/blog/avatar.webp',
    name: 'CTO',
    title: '首席技術官',
    desc: '專注 Spring 全家桶、Vue 全家桶與 RPA 落地，負責技術架構與關鍵項目交付。'
  },
  {
    avatar: 'https://hisher-1258325826.cos.ap-guangzhou.myqcloud.com/blog/avatar.webp',
    name: 'COO',
    title: '首席運營官',
    desc: '負責運營管理與項目落地執行，確保解決方案在大灣區企業順利實施。'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我們的團隊</template>
    <template #lead>
      智恩創科科技（深圳）有限公司是一支專注於大灣區企業 IT 服務與 RPA 自動化落地的技術團隊，
      由熟悉 Spring 與 Vue 主流技術棧並深度參與業務場景的成員組成。
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
