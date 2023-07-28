# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@gitte.com:ClungTsang/ClungTsang.gitte.io.git master

cd -
