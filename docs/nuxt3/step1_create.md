# 安装、运行nuxt3项目
## 先决条件
- 掌握vue3语法、基礎阅读和科学上网的能力
- Node.js* (最新LTS版本) 👉 [下载](https://nodejs.org/)
- Visual Studio Code 👉 [下载](https://code.visualstudio.com/)
- Volar Extension 👉 [下载](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


<!-- ## 知道怎么安装看这个 
1、[官方教程](https://nuxt.com/docs/getting-started/installation)  
2、[中文官方教程](https://nuxt.com.cn/docs/getting-started/installation)  
3、[github上的脚手架](https://github.com/search?q=nuxt3%20template&type=repositories)   -->


## 新项目
### 1、[下载](https://nodejs.org/)并安装最新稳定版node
![安装node](/public/assets/nuxt3/nodeInstall.webp)
### 2、打开cmd执行命令行，给电脑全局下载pnpm的包管理器，
> pnpm比其他包管理器快2倍。 pnpm 不仅比 npm 快，而且比 yarn 快。无论是冷缓存还是热缓存，它都比 yarn 快。yarn 从缓存中复制文件，而 pnpm 只是从全局存储中链接它们。
``` js
npm i -g pnpm
``` 

### 3、设置pnpm的镜像
``` js
pnpm config set registry https://registry.npmmirror.com/
```
### 4、在你的项目目录中打开cmd，初始化一个新项目
``` js
npx nuxi init my-nuxt-project
```
### 5、复制以下命令，程序就运行起来啦
``` js
cd my-nuxt-project
pnpm i
pnpm run dev -o
```
## 下一步
### 既然已经创建了nux3项目，就可以开始构建应用程序了。