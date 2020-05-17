const gql = require("apollo-server-express").gql;

module.exports = gql`
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    posts: [Post]
    post(post_id: ID!): Post
    createPost(post_id: ID!, title: String, contents: String): Post
    updatePost(post_id: ID!, title: String, contents: String): Post
  }
`;
