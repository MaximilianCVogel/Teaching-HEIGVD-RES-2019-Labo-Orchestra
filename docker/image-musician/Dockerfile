FROM node:8

MAINTAINER Vogel Maximilian <maximilian.vogel@heig-vd.ch>

COPY src /opt/app/
WORKDIR /opt/app/

RUN npm install

EXPOSE 2205

ENTRYPOINT ["node", "/opt/app/musician.js"]