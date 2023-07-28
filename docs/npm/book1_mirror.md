# npm怎么切换镜像源
1. 首先，可以使用以下命令检查当前的镜像源：
   ```
   npm config get registry
   ```

2. 如果你希望切换到一个国内的镜像源，常用的有淘宝镜像（https://registry.npm.taobao.org）和腾讯镜像（https://mirrors.cloud.tencent.com/npm） 等。你可以使用以下命令将镜像源修改为淘宝镜像为例：
   ```
   npm config set registry https://registry.npm.taobao.org
   ```

3. 确认镜像源已经切换成功，可以再次运行以下命令验证：
   ```
   npm config get registry
   ```

现在，你的 npm 镜像源已经成功切换到了指定的源。在国内使用国内镜像源通常可以提高下载速度和稳定性。如果需要切换回官方源，可以将镜像源修改为 https://registry.npmjs.org。