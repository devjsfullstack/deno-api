# API Deno Oak Example

## TODO API

CRUD created with middleware framework for Deno's http server, including a router middleware.

## Modules

[![oak ci](https://github.com/oakserver/oak/workflows/oak%20ci/badge.svg)](https://github.com/oakserver/oak)

[![tag](https://img.shields.io/github/tag/manyuanrong/deno_mongo.svg)](https://github.com/manyuanrong/deno_mongo/releases)

## Database

Connection to Mongodb

## Execute server with deno

**deno run --allow-net --allow-write --allow-read --allow-plugin --unstable --inspect server.ts**

## Execute server with denon (nodemon to deno)

**denon start**

# API

*[GET] /api/v1/todos*

*[GET] /api/v1/todo/5edfcc3500cc3198003ec638*

*[GET]* /api/v1/pagination?skip=1&limit=5

*[POST] /api/v1/create*

*[PUT] /api/v1/update*

*[DELETE] /api/v1/delete*
