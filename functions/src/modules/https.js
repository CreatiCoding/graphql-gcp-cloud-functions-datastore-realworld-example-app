module.exports = function ({ functions, exports }) {
  const controller = exports;
  return {
    run: function ({ app }) {
      controller.helloWorld = functions.https.onRequest((request, response) => {
        request;
        response.send("Hello from Firebase!");
      });

      // http://localhost:5001/graphql-fd-realword/us-central1/api/graphql?query={posts{title%20post_id}}
      controller.api = functions.https.onRequest(app);

      console.log("https load completed");
    },
  };
};
