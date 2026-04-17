FROM node:20
WORKDIR /app
COPY . .

RUN npm install -g @angular/cli
RUN npm install

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]