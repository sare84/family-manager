FROM node:latest

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app
RUN npm install

EXPOSE 4200

#  CMD [ “npm”, “start” ]
CMD ["npm", "run", "dev"]