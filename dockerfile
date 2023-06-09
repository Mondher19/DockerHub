FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --force

COPY . .

EXPOSE 4000
CMD [ "node", "server.js" ]



