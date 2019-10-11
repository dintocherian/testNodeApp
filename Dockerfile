FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
ENTRYPOINT [ "sh", "-c", "npm run start" ]