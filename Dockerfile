FROM node:22-slim AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --no-frozen-lockfile
COPY docs/ docs/
RUN pnpm docs:build

FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Runtime: substitute $PORT using envsubst
CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/conf.d/default.conf > /tmp/nginx.conf && mv /tmp/nginx.conf /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
