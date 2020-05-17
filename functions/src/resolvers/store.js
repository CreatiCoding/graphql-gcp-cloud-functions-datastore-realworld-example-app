const functions = require("firebase-functions");
const admin = require("firebase-admin");
const LRU = require("lru-cache");

module.exports = () => {
  const self = {};

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const credential = admin.credential.cert(
      require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    );
    admin.initializeApp(credential);
    self.store_cache = new LRU({
      max: 1024,
      length: (n, key) => n * 2 + key.length,
      dispose: (key, value) => {},
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
  } else {
    admin.initializeApp(functions.config().firebase);
    self.store_cache = new LRU({
      max: 1024,
      length: (n, key) => n * 2 + key.length,
      dispose: (key, value) => {},
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
  }
  const firestore = admin.firestore();

  self.findDocumentById = async ({ collection, id }) => {
    if (!collection || !id) return {};
    if (self.store_cache.has(`${collection}-${id}`)) {
      return self.store_cache.get(`${collection}-${id}`);
    } else {
      const snapshot = await firestore.collection(collection).doc(`${id}`).get({
        source: "cache",
      });
      const data = snapshot.data();
      self.store_cache.set(`${collection}-${id}`, data);
      return data;
    }
  };

  self.findDocuments = async ({ collection, page_no = 0, page_size = 10 }) => {
    if (!collection) return {};
    if (self.store_cache.has(`${collection}`)) {
      return self.store_cache.get(`${collection}`);
    } else {
      const snapshot = await firestore.collection(collection).get({
        source: "cache",
      });
      const data = snapshot.docs.map((doc) => doc.data());
      self.store_cache.set(`${collection}`, data);
      return data;
    }
  };
  return self;
};
