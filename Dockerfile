FROM node:10.16.3
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
ENTRYPOINT [ "sh", "-c", "npm run start" ]