---
layout: page
title: 我们的团队
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
    title: '首席执行官',
    desc: '负责公司整体战略规划与业务方向把控，推动企业持续成长。',
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
    title: '首席技术官',
    desc: '专注 Spring 全家桶、Vue 全家桶与 RPA 落地，负责技术架构与关键项目交付。'
  },
  {
    avatar: 'https://hisher-1258325826.cos.ap-guangzhou.myqcloud.com/blog/avatar.webp',
    name: 'COO',
    title: '首席运营官',
    desc: '负责运营管理与项目落地执行，确保解决方案在大湾区企业顺利实施。'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>
      智恩创科科技（深圳）有限公司是一支专注于大湾区企业 IT 服务与 RPA 自动化落地的技术团队，
      由熟悉 Spring 与 Vue 主流技术栈并深度参与业务场景的成员组成。
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
