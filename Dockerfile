FROM node:12 AS base
WORKDIR /app

RUN npm install yarn

COPY . .

RUN yarn

RUN ls

CMD ["yarn", "start"]