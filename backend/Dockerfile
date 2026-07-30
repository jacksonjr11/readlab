# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
WORKDIR /usr/src/app
ENV YARN_CACHE_FOLDER=/tmp/.yarn-cache
COPY package.json yarn.lock ./

FROM base AS development
ENV NODE_ENV=development
RUN corepack enable && yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["yarn", "start:dev"]

FROM base AS build
ENV NODE_ENV=development
RUN corepack enable && yarn install --frozen-lockfile
COPY . .
RUN yarn build
RUN yarn install --frozen-lockfile --production=true && yarn cache clean

FROM node:22-alpine AS production
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package.json ./package.json
EXPOSE 3000
CMD ["node", "dist/main"]
