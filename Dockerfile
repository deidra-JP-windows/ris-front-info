
FROM node:24-bullseye
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm ci --omit=dev
RUN npm install -g typescript ts-node
