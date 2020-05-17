const ASE = require("apollo-server-express");
const ApolloServer = ASE.ApolloServer;
const newResolver = require("./resolvers");
const schema = require("./schema");

module.exports = function ({ store }) {
  const resolver = newResolver({ store });

  const server = new ApolloServer({
    typeDefs: [...Object.values(schema)],
    resolvers: {
      Query: {
        ...resolver.getQuery(),
      },
    },
    cacheControl: {
      defaultMaxAge: 5,
    },
  });
  return server;
};
