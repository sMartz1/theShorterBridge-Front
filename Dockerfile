FROM node:17
RUN mkdir /app
WORKDIR /app
ADD . /app
EXPOSE 3000
RUN npm install
CMD npm start

