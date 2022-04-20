FROM node:16.14.2-alpine as builder
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:alpine
WORKDIR /home/node/app
COPY --from=builder /home/node/app/build ./build
RUN npm install -g serve
EXPOSE 4000
CMD ["serve", "build"]