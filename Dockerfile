FROM node:10

RUN mkdir -p /usr/src/desafio-magalu-frontend

WORKDIR /usr/src/desafio-magalu-frontend

COPY . /usr/src/desafio-magalu-frontend

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]