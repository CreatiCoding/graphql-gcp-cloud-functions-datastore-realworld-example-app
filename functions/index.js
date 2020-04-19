const https = require("firebase-functions").https;
const express = require("express");
const ApolloServer = require("apollo-server-express").ApolloServer;
const schema = require("./schema").schema;
const resolvers = require("./resolvers").resolvers;

const server = new ApolloServer({
  typeDefs: [...Object.values(schema)],
  resolvers: {
    Query: {
      ...resolvers,
    },
  },
});

const app = express();
server.applyMiddleware({ app });
// https://github.com/arjunyel/firestore-apollo-graphql
// /api/graphql?query={books{title%20author}}

exports.api = https.onRequest(app);
exports.helloWorld = https.onRequest((request, response) => {
  request;
  response.send("Hello from Firebase!");
});
// export const api = https.onRequest(app);
// export const helloWorld = https.onRequest((request, response) => {
//   request;
//   response.send("Hello from Firebase!");
// });
