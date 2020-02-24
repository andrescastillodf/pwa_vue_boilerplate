#!/bin/bash
#source /etc/environment


IMAGE="pwa_vue_example"
CONTAINER="pwa_vue_example"
BASH_SOURCE="/home/andres/projects/vue-andres-projects/pwa_vue_example/"
DOCKERFILE="/home/andres/projects/vue-andres-projects/pwa_vue_example/ci/Dockerfile"

#use ssh
eval `ssh-agent`
ssh-add /home/andres/.ssh/id_rsa

#function to read the package.json file and get the version
function readJson {
  UNAMESTR=`uname`
  if [[ "$UNAMESTR" == 'Linux' ]]; then
    SED_EXTENDED='-r'
  elif [[ "$UNAMESTR" == 'Darwin' ]]; then
    SED_EXTENDED='-E'
  fi;

  VALUE=`grep -m 1 "\"${2}\"" ${1} | sed ${SED_EXTENDED} 's/^ *//;s/.*: *"//;s/",?//'`

  if [ ! "$VALUE" ]; then
    echo "Error: Cannot find \"${2}\" in ${1}" >&2;
    exit 1;
  else
    echo $VALUE ;
  fi;
}

#using dockerhub
#docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD
#docker pull $IMAGE
#docker logout

cd "/home/andres/projects/vue-andres-projects/pwa_vue_example/"
pwd
git checkout master
git pull


VERSION=`readJson package.json version` || exit 1;
#if there is not package.json use "VERSION" file
#VERSION=`cat VERSION`
#echo "VERSION: ${VERSION}"
sudo docker build -t ${IMAGE}:${VERSION} . -f ${DOCKERFILE}
sudo docker tag pwa_vue_example:${VERSION}  pwa_vue_example:latest


