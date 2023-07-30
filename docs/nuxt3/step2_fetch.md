# 我从CSR转变到SSR过程中，让我耗时最多的环节，是网络请求...
我查阅了各种教程，大部分教程都在请求自己的服务端。我想说，后端同学已经写好了N个接口，难道我就要写N个服务端接口，然后客户端又写N个接口调自己的服务端接口吗。兄弟看下去，这篇文章教你更优雅的请求方式。

# 网络请求中，如果你跟我一样有以下困扰
- 各种教程都在请求自己写的/server/api下面的接口，拜托我又不是搞全栈。
- 我们公司有后端提供接口，能不能请求转发直接调。
- 我配置请求转发之后本地是成功了，但是线上又不行了。
- 或者我根本不会配请求转发，直接就跨域。
- 我这样配了之后还能保证服务端渲染吗。

# 利用Nuxt3中的混合渲染就能轻松搞定

::: tip 
 - 混合渲染使用 **Route Rules** 允许每个路由使用不同的缓存规则，并决定服务器应如何响应给定 URL 上的新请求。
:::

#### 1、在nuxt.config.ts中添加以下配置
```js
export default defineNuxtConfig({
  routeRules: {
    // 针对路径进行接口转发
    '/dev-api/**': {
      proxy: `https://cnodejs.org/api/v1/**`  // https://cnodejs.org/api/v1 是个公共接口api前缀，将其替换为后端写好的接口调用地址就好
    },
  }
})
```
#### 2、在业务层或者封装好的网络请求工具类中调用 **useFetch()** ，同时设置baseURL为 **/dev-api**
> 需要注意的是，使用useFetch才能有水合作用，$fetch只是一个跟axios类似的网络请求库
``` js
 // 业务代码中 /pages/home/index
<template>
  <div>
    <button @click="getInfo">
      获取一个请求吧
    </button>
    <div>
      {{ info?.title }}
    </div>
  </div>
</template>
<script setup>
const info = ref();
const getInfo = async () => {
  // 请求一个内容
  const { data, error } = await useFetch("/topic/5433d5e4e737cbe96dcef312", {
    baseURL: "/dev-api",
  });
  info.value = data.value.data;
};
getInfo();
</script>

```
#### 3、**pnpm run dev** 运行程序

<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af16e466acde4c25859c1307e918ab3a~tplv-k3u1fbpfcp-watermark.image?" alt="image.png" width="100%" />  
<img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5394279860494f9992e849b5a401ccef~tplv-k3u1fbpfcp-watermark.image?" alt="image.png" width="100%" />

#### 4、页面中点击button也可以正常请求
# 看文档才是第一生产力
 这里推荐两个Nuxt3的中文文档
- [某个高手写的中文文档](https://ezdoc.cn/docs/nuxtjs/getting-started/introduction)
- [非官方中文文档](https://nuxt.com.cn/)  

再推荐一个公共api，可以自己调着玩
- [cnode官方提供](https://cnodejs.org/api)
 
# 第一次写文章，多多包涵啦！
这个方案可能不是我最先发现的，也可能不算是最优解决方案。  
希望朋友们看到类似的文章或者更好的解决方案，可以踢我一脚！！！  
另外这是我开发一个多月的[官网](https://www.lc.plus)，大家可以友善提建议。  
该文章已同步发送到[掘金](https://juejin.cn/post/7252976055094001720)