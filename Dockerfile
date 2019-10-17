FROM node:12

RUN mkdir /action
WORKDIR /action

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# install deps
COPY ./package.json ./package-lock.json ./
RUN npm ci --only=prod
COPY entrypoint.js .

ENTRYPOINT ["node", "/action/entrypoint.js"]
