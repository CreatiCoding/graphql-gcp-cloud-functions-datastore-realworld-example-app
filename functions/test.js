import schema from "./src/schema";
const admin = require("firebase-admin");
import { newStore } from "./src/resolvers/store";

const credential = admin.credential.cert(
  require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
);

const store = newStore({ credential });
console.log({ store });
