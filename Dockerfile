FROM node:12.18.4-alpine3.12

RUN mkdir /opt/woodie

COPY . /opt/woodie
WORKDIR /opt/woodie

RUN npm install yarn

COPY . /opt/woodie

RUN yarn
RUN yarn build

CMD ["node", "/opt/woodie/dist/app.js"]
