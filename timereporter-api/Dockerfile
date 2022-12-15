FROM node:lts as base
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY prisma .
RUN npm run prisma:generate
COPY . .
RUN npm run build

FROM base as production
ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "npm run start:prod"]
