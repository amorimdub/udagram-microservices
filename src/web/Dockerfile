### STAGE 1: Build ###
FROM node:alpine AS builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod


FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/www /usr/share/nginx/html