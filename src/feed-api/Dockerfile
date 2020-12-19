
FROM node:alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN yarn
RUN yarn build

FROM node:alpine
WORKDIR  /usr/app
COPY package*.json ./
RUN yarn --production
COPY --from=builder /usr/src/app/dist /usr/app
EXPOSE 8080
CMD  ["yarn", "start"]
