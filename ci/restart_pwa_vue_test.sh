#!/bin/bash
#source /etc/environment

#/var/docker/config - declare here the port there it should be routed
#environment should have an entrie for this project with the external port
RESTART="always"
LOG_SIZE="10m"

VOLUME="/home/andres/docker/pwa_vue_boilerplate"
IMAGE="pwa_vue_boilerplate:latest"
CONTAINER="pwa_vue_boilerplate"
ARGS="--debug"
# for now the port is fixed  but it should come from /var/docker/config
INTERNAL_PORT="8080"
EXTERNAL_PORT="3005"

IMAGE_ID=$(docker inspect --format='{{.Image}}' $(docker ps -aq -f name=pwa_vue_boilerplate))
echo ${IMAGE_ID}
sudo docker stop $CONTAINER || true && docker rm $CONTAINER || true

 #sudo docker run --restart always -d -p 3005:8080 --name pwa_vue_boilerplate pwa_vue_boilerplate
 #fix logs
sudo docker run \
       --restart $RESTART \
       -d \
       -p $EXTERNAL_PORT:$INTERNAL_PORT \
       --name=$CONTAINER \
       $IMAGE
       #--log-opt max-size=$LOG_SIZE \
       #-v $VOLUME/config:/usr/src/app/config \
       #-v $VOLUME/logs:/usr/src/app/logs \
       #$ARGS

sudo docker rmi ${IMAGE_ID} || true


