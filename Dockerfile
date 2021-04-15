FROM node:14.16.1-alpine3.10 as base
WORKDIR /app
COPY package.json yarn.lock /app
RUN yarn install

FROM base
COPY . .

