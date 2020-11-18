FROM node:latest
WORKDIR /src
COPY . /src
CMD ["node", "index.js"]