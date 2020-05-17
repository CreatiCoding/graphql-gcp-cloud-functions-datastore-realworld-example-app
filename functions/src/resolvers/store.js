const functions = require("firebase-functions");
const admin = require("firebase-admin");

module.exports = () => {
  const self = {};

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const credential = admin.credential.cert(
      require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    );
    admin.initializeApp(credential);
  } else {
    admin.initializeApp(functions.config().firebase);
  }
  const firestore = admin.firestore();

  self.findDocumentById = async ({ collection, id }) => {
    return (await firestore.collection(collection).doc(id).get()).data();
  };

  self.findDocuments = async ({ collection, page_no = 0, page_size = 10 }) => {
    const snapshot = await firestore.collection(collection).get();
    return snapshot.docs.map((doc) => doc.data());
  };
  return self;
};
