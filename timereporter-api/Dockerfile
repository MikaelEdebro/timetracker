FROM node:18-alpine as base
WORKDIR /src
COPY package*.json ./
RUN ls
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
RUN ls
COPY --chown=node:node . ./
USER node
CMD ["npm", "run", "start:docker"]
