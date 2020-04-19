const gql = require("apollo-server-express").gql;

exports.schema = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Post {
    title: String
    author: String
  }
`;
