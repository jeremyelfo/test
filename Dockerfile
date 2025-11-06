FROM node:18
WORKDIR /app
COPY package*.json ./
COPY server.js ./
RUN npm install
EXPOSE 80
ENV PORT=80
CMD [ "node", "server.js" ]
