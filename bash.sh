#!/bin/sh
git reset --hard

git pull

docker stop blog
docker rm blog
docker rmi blog

docker build -t blog .

docker run \
-p 8080:80 \
-p 8443:443 \
--name blog \
-d blog:latest
