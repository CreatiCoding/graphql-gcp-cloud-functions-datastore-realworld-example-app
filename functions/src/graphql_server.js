const ASE = require("apollo-server-express");
const ApolloServer = ASE.ApolloServer;

const schema = require("./schema");
const resolvers = require("./resolvers");

module.exports = function () {
  const server = new ApolloServer({
    typeDefs: [...Object.values(schema)],
    resolvers: {
      Query: {
        ...resolvers,
      },
    },
  });
  return server;
};
