# syntax=docker/dockerfile:1

# ---------- build ----------
FROM oven/bun:1 AS builder
WORKDIR /app

# Preset Nitro para gerar um servidor Node autônomo (.output/server/index.mjs)
ENV NITRO_PRESET=node-server
ENV NODE_ENV=production

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ---------- runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
