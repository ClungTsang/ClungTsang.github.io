#!/bin/sh
git reset --hard

git pull

docker stop blog
docker rm blog
docker rmi blog

docker build -t blog .

docker run \
--name blog \
-d blog:latest
