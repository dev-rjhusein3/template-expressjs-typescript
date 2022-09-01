FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN mkdir -p /app/letsencrypt/archive/warpedearth.com

RUN npm run build

EXPOSE 5443
EXPOSE 5580


CMD [ "npm", "run", "buildrun" ]