FROM node:12.6.0 as builder
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
#COPY .env_develop .env

#RUN npm run test:unit

RUN npm run build

FROM nginx:1.15.8
COPY ./etc/nginx_config/default.conf /etc/nginx/conf.d
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/pwa_vue_example/
EXPOSE 3005
CMD ["nginx", "-g", "daemon off;"]
