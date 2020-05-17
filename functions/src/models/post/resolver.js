module.exports = function ({ store }) {
  const self = {};
  self.posts = async () => {
    const result = await store.findDocuments({ collection: "posts" });
    return result;
  };
  self.post = (parent, args, context, info) => {
    const { post_id } = args;
    return store.findDocumentById({
      collection: "posts",
      id: post_id,
    });
  };
  self.createPost = (parent, args, context, info) => {
    const { post_id, title = "test", contents = "내용" } = args;
    return store.createDocument({
      collection: "posts",
      id: post_id,
      payload: {
        post_id,
        title,
        contents,
      },
    });
  };

  self.updatePost = (parent, args, context, info) => {
    const { post_id, title = "", contents = "" } = args;
    const payload = {};
    if (title) payload.title = title;
    if (contents) payload.contents = contents;

    store.updateDocument({
      collection: "posts",
      id: post_id,
      payload,
    });
    return { id: post_id, post_id, ...payload };
  };
  return self;
};
