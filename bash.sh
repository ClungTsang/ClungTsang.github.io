#!/bin/sh
git reset --hard

git pull

docker stop blog
docker rm blog
docker rmi blog

docker build -t blog .

docker run \
-dp 80:80 \
-dp 443:443 \
--name blog \
-v /etc/nginx/cert:/etc/nginx/cert \
-d blog:latest
