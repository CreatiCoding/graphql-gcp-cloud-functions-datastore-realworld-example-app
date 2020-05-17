const newStore = require("./../../resolvers/store");
const store = newStore();
exports.Query = {
  posts: async () => {
    const result = await store.findDocuments({ collection: "posts" });
    return result;
  },
  post: () => {
    return store.findDocumentById({
      collection: "posts",
      id: "1",
    });
  },
};
