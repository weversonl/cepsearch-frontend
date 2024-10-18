FROM node:22.10.0-alpine3.20
WORKDIR /app
COPY . .
RUN npm install && npm ci && npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]