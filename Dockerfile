FROM node:12.18.4-alpine3.12
WORKDIR /app

RUN npm install yarn

COPY . .

RUN yarn

RUN ls

RUN yarn build

CMD ["node", "dist/app.js"]