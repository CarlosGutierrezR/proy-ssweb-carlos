FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npx prisma generate
ENV NODE_ENV=production
ENV LOG_LEVEL=info
ENV PORT=3000
EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && node src/index.ts"]
