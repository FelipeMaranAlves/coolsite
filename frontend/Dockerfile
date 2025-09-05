FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# NÃO copia o restante aqui! Vai montar com volume

EXPOSE 3000

CMD ["npm", "run", "dev"]