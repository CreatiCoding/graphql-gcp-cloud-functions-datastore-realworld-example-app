const functions = require("firebase-functions");
const newExpress = require("express");
const newHttps = require("./src/modules/https");
const newGraphQLServer = require("./src/graphql_server");

const server = newGraphQLServer();
const app = newExpress();

server.applyMiddleware({ app });

const https_modules = newHttps({ functions, exports });
https_modules.run({ app });
