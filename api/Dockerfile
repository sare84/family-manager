FROM node:latest

WORKDIR /usr/src/app
RUN ls -a

RUN mkdir -p /usr/src/app
RUN ["npm","install","global","@nestjs/cli"]
RUN ["npm", "install"]

EXPOSE 3000

#  CMD [ “npm”, “start” ]
# start:debug
CMD ["npm", "run", "start:debug"]