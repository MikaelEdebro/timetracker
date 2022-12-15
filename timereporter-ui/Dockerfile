FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 8080

FROM nginx:1.16.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY deploy/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
