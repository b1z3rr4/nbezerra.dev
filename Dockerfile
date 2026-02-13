FROM oven/bun:1.2-alpine AS base
WORKDIR /app

FROM base AS builder
WORKDIR /app

COPY package.json bun.lock* ./
COPY apps ./apps
COPY packages ./packages

RUN bun install --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN bun run --filter web build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./.next/static
COPY --from=builder /app/apps/web/public ./public

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
