const newStore = require("./../../resolvers/store");
const store = newStore();
exports.Query = {
  posts: async () => {
    const result = await store.findDocuments({ collection: "posts" });
    return result;
  },
  post: (parent, args, context, info) => {
    const { post_id } = args;
    return store.findDocumentById({
      collection: "posts",
      id: post_id,
    });
  },
};
