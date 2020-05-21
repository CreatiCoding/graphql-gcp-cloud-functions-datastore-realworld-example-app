const gql = require("apollo-server-express").gql;

module.exports = {
  query: gql`
    scalar JSON
    type Query {
      getList(type: String!): [JSON]
      getOne(type: String!, id: ID!): JSON
      createOne(type: String!, id: ID!, payload: String): JSON
      updateOne(type: String!, id: ID!, payload: String): JSON
    }
  `,
};
