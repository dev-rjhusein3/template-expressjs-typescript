FROM node:19-alpine
WORKDIR /app
COPY . .
CMD ["npm", "run", "dev-start"]
EXPOSE 8080