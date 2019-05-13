FROM node:8

MAINTAINER Maximilian Vogel <maximilian.vogel@heig-vd.ch>

COPY src /opt/app/

WORKDIR /opt/app/

RUN npm install

ENTRYPOINT ["node", "/opt/app/auditor.js"]