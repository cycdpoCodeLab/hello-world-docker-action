FROM node:12

RUN mkdir /action
WORKDIR /action

# install deps
COPY ./entrypoint.js ./package.json ./package-lock.json ./
RUN npm ci --only=prod

ENTRYPOINT ["node", "/action/entrypoint.js"]
