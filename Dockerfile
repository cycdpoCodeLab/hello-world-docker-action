FROM node:12

RUN mkdir /action
WORKDIR /action

# install deps
COPY ./package.json ./package-lock.json ./
RUN npm ci --only=prod
COPY entrypoint.js .

ENTRYPOINT ["node", "/action/entrypoint.js"]
