<!-- ## 记录Vue3中引入Tailwind css和antDesign Vue，使用message出现的样式问题 -->

# 框架中同时引入了Tailwind CSS和ElementPlus第三方组件。
::: warning 注意
会出现样式污染的问题是被引入的Tailwind CSS 的样式影响了
:::

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## 解决方法
方式1：禁用Tailwind CSS的 Preflight 
[跳转查看官方解释](https://www.tailwindcss.cn/docs/preflight#preflight)
``` js
// tailwind.config.js
module.exports = {
  ...
 
  corePlugins: {
    preflight: false,
  },
}
```

方式2：可以在引入的Tailwind CSS样式中，覆盖掉影响Element Plus 样式的Tailwind CSS的一些基本样式。
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
 
// 覆盖影响antd的样式
svg {
  vertical-align: initial;
}
```
