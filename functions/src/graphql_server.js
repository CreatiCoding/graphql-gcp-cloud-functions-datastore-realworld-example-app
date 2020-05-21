const ASE = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json").GraphQLJSON;
const ApolloServer = ASE.ApolloServer;
const schema = require("./schema");
const newResolver = require("./resolver");

module.exports = function ({ store }) {
  const resolver = newResolver({ store });

  const server = new ApolloServer({
    typeDefs: [...Object.values(schema)],
    resolvers: {
      Query: {
        ...resolver,
      },
      JSON: {
        __serialize(value) {
          return GraphQLJSON.parseValue(value);
        },
      },
    },
    cacheControl: {
      defaultMaxAge: 5,
    },
  });
  return server;
};
