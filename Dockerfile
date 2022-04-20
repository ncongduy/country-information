FROM node:16.14.2-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

EXPOSE 4000

CMD ["node", "server/index.js"]