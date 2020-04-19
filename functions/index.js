const functions = require("firebase-functions");
const newExpress = require("express");
const newHttps = require("./src/modules/https");
const newGraphQLServer = require("./src/graphql_server");

const server = newGraphQLServer();
const app = newExpress();

server.applyMiddleware({ app });

// https://github.com/arjunyel/firestore-apollo-graphql
// http://localhost:5001/graphql-fd-realword/us-central1/api/graphql?query={posts{title%20author}}

const https_modules = newHttps({ functions, exports });
https_modules.run({ app });
