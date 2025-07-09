# Usa una imagen base de Node.js
FROM node:18

# Establece la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./
RUN npm install

COPY . .

# Expone el puerto que utiliza tu servidor
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "start"]
