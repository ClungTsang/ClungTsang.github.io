# npm怎么切换镜像源
1. 首先，可以使用以下命令检查当前的镜像源：

``` shell
npm config get registry
```

1. 如果你希望切换到一个国内的镜像源，你可以使用以下命令将镜像源修改为对应镜像源：
::: info 淘宝镜像
``` shell 
npm config set registry https://registry.npm.taobao.org 
```
:::
::: info 腾讯云镜像
``` shell
npm config set registry https://mirrors.cloud.tencent.com/npm
```
:::
::: info 国内源
``` shell
npm config set registry https://registry.npmmirror.com
```
:::
::: danger 注意
上面的命令是将本地的源换成国内源 npmmirror ，经过几轮测试，发现它的下载速度快且同步率高，同步频率 10 分钟一次，如果您之前的源是这个 http://registry.npm.taobao.org ，那您必须换成 npmmirror 啦，因为原淘宝 npm 域名即将停止解析
:::



1. 确认镜像源已经切换成功，可以再次运行以下命令验证：
``` shell
npm config get registry
```

现在，你的 npm 镜像源已经成功切换到了指定的源。在国内使用国内镜像源通常可以提高下载速度和稳定性。如果需要切换回官方源

``` shell
npm config set registry https://registry.npmjs.org。
```
