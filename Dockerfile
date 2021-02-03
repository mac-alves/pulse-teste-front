FROM node:12.20.1-alpine3.10

WORKDIR /usr/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /usr/app
COPY yarn.lock /usr/app

RUN yarn

COPY . /usr/app/

# FROM nginx:1.12-alpine
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
