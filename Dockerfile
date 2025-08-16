
FROM node:24-bullseye
WORKDIR /app

RUN npm install
RUN npm install -g typescript
