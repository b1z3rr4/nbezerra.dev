FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY . .

RUN npm install

WORKDIR /app/apps/web
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app


COPY --from=builder /app/apps/web/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/public ./public

EXPOSE 8080
CMD ["npm", "start"]
