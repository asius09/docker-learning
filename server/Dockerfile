FROM node:22

WORKDIR /server

COPY package.json pnpm-lock.yaml ./

RUN npm install

COPY . .

ENV PORT=8081 \
    MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

CMD ["npx", "tsx", "src/index.ts"]