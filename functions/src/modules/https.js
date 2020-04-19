module.exports = function ({ functions, exports }) {
  const controller = exports;
  return {
    run: function ({ app }) {
      controller.helloWorld = functions.https.onRequest((request, response) => {
        request;
        response.send("Hello from Firebase!");
      });

      controller.api = functions.https.onRequest(app);

      console.log("https load completed");
    },
  };
};
