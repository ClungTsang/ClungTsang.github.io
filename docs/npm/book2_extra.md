# 在运行 `npm install` 命令时，可以添加一些额外的指令来执行特定的操作。以下是一些常用的额外指令：
1. `--save` 或 `-S`: 将安装的包添加到 `dependencies` 字段中的 `package.json` 文件中。
   ```
   npm install package-name --save
   ```

2. `--save-dev` 或 `-D`: 将安装的包添加到 `devDependencies` 字段中的 `package.json` 文件中。
   ```
   npm install package-name --save-dev
   ```

3. `--global` 或 `-g`: 将包安装为全局包，而不是项目的局部依赖。
   ```
   npm install package-name --global
   ```

4. `--production`: 只安装项目的生产依赖，跳过开发依赖的安装。
   ```
   npm install --production
   ```

5. `--no-save`: 安装包时不将其添加到 `package.json` 文件中的任何依赖字段。
   ```
   npm install package-name --no-save
   ```

6. `--ignore-scripts`：在安装过程中跳过执行包的安装脚本。
   ```
   npm install package-name --ignore-scripts
   ```

7. `--legacy-peer-deps`：在安装过程中使用旧版本的对等依赖解决算法。
   ```
   npm install package-name --legacy-peer-deps
   ```

8. `--prefer-offline`：优先使用本地缓存的包进行安装，而不是从网络下载。
   ```
   npm install package-name --prefer-offline
   ```

9. `--no-package-lock`：在安装过程中不生成或更新 `package-lock.json` 文件。
   ```
   npm install package-name --no-package-lock
   ```

10. `--dry-run`：模拟安装过程，显示将要执行的操作，但不实际安装包。
   ```
   npm install package-name --dry-run
   ```

这些是一些常见的额外指令，可以根据具体情况在 `npm install` 命令后面添加。记得查阅 npm 的[官方文档](https://www.npmjs.cn/)以获取更多详细信息和用法示例。
