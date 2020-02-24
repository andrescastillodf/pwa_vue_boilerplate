#!/bin/bash
#source /etc/environment

#/var/docker/config - declare here the port there it should be routed
#environment should have an entrie for this project with the external port
RESTART="always"
LOG_SIZE="10m"

VOLUME="/var/docker/pwa_vue_example"
IMAGE="pwa_vue_example:latest"
CONTAINER="pwa_vue_example"
ARGS="--debug"
# for now the port is fixed  but it should come from /var/docker/config
INTERNAL_PORT="8080"
EXTERNAL_PORT="3005"

docker stop $CONTAINER || true && docker rm $CONTAINER || true

docker run \
       --name=$CONTAINER \
       --log-opt max-size=$LOG_SIZE \
       --restart $RESTART \
       -p $EXTERNAL_PORT:$INTERNAL_PORT \
       -v $VOLUME/config:/usr/src/app/config \
       -v $VOLUME/logs:/usr/src/app/logs \
       -d $IMAGE
       #$ARGS
