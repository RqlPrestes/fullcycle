FROM node:latest AS build

WORKDIR /usr/src/app

COPY . .

FROM node:15-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]
