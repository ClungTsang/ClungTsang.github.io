---
layout: page
title: Our Team
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
    title: 'Chief Executive Officer',
    desc: 'Responsible for overall corporate strategy and business direction, driving sustainable growth.'
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
    title: 'Chief Technology Officer',
    desc: 'Focuses on Spring and Vue ecosystems and RPA implementation, leading technical architecture and key project delivery.'
  },
  {
    avatar: 'https://hisher-1258325826.cos.ap-guangzhou.myqcloud.com/blog/avatar.webp',
    name: 'COO',
    title: 'Chief Operating Officer',
    desc: 'Oversees operations and project execution, ensuring solutions are successfully implemented for Greater Bay Area enterprises.'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>
      Zhi En Chuangke Technology (Shenzhen) Co., Ltd. is a technical team
      focused on IT services and RPA automation implementation for enterprises
      in the Greater Bay Area, formed by members experienced in the mainstream
      Spring and Vue tech stacks and deeply involved in real-world business scenarios.
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
