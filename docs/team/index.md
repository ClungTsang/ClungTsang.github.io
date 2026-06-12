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
    avatar: '/logo.png',
    name: '曾楚龙',
    title: '创始人 & CEO',
    org: '智恩创科科技（深圳）有限公司',
    orgLink: 'https://innogrid.asia',
    desc: '全栈工程师，AI 大模型与 RPA 自动化领域深耕者。主导 OmniGEO、CTN Express 等多个产品从 0 到 1 的全流程交付，负责公司整体战略与技术方向。'
  },
  {
    avatar: '/logo.png',
    name: 'Kenny',
    title: '联合创始人 & COO',
    org: '智恩创科科技',
    desc: '香港公司法人，负责整体业务战略与销售拓展。深耕跨境商业领域，推动公司在大湾区及海外市场的客户关系与渠道建设。'
  },
  {
    avatar: '/logo.png',
    name: '袁豪',
    title: 'CTO',
    org: '智恩创科科技',
    desc: '技术架构负责人，专注 Spring 全家桶、Vue 生态与云端基础设施。主导多个企业级系统的架构设计与关键项目交付，保障系统稳定与持续演进。'
  },
  {
    avatar: '/logo.png',
    name: '黄文杰',
    title: '前端开发工程师',
    org: '智恩创科科技',
    desc: '负责 Vue/Nuxt 前端开发与 UI 实现，参与 OmniGEO SaaS 平台、公司官网及多个客户项目的界面开发与交互优化。'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>
      智恩创科科技由一群深耕 AI 大模型、RPA 自动化与企业级全栈开发的技术人才组成，
      核心成员拥有从产品设计到系统交付的完整闭环经验。
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
