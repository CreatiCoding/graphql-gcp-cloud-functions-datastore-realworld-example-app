const admin = require("firebase-admin");

exports.newStore = async function ({ credential }) {
  const self = {};

  admin.initializeApp(credential);
  const firestore = admin.firestore();

  self.findDocumentById = async ({ collection, id }) => {
    return (await firestore.collection(collection).doc(id).get()).data();
  };

  self.findDocuments = async ({ collection, page_no, page_size }) => {
    return (await firestore.collection(collection).doc(id).get()).data();
  };
  return self;
};
