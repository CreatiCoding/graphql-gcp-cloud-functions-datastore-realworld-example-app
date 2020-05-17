module.exports = function ({ functions, exports, store_cache }) {
  const controller = exports;
  return {
    run: function ({ app }) {
      controller.createPost = functions.firestore
        .document("posts/{post_id}")
        .onCreate((snap) => {
          console.log("createPost");
          const data = snap.data();
          store_cache.set(`${"posts"}-${data.post_id}`, data);
          store_cache.del(`${"posts"}`);
        });
      controller.updatePost = functions.firestore
        .document("posts/{post_id}")
        .onUpdate((snap) => {
          console.log("updatePost");
          const data = snap.data();
          store_cache.set(`${"posts"}-${data.post_id}`, data);
          store_cache.del(`${"posts"}`);
        });
    },
  };
};
