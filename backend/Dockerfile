FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# NÃO copia o restante aqui! Deixe para o volume no docker-compose

# Instale dev tools, ex: ts-node-dev
RUN npm install -D ts-node-dev

EXPOSE 4000

CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/index.ts"]