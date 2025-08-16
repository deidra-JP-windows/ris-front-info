
FROM node:24-bullseye
WORKDIR /app

RUN npm ci --omit=dev
RUN npm install -g typescript ts-node
