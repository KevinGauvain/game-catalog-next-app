import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI || "";
console.log(process.env.MONGODB_URI);
let cachedDb: MongoClient = null;

export function getDatabase(): Promise<MongoClient> {
  if (cachedDb) {
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(MONGODB_URI).then((db) => {
    cachedDb = db;
    return cachedDb;
  });
}

// const mongodb = await getDatabase();
// const pushPrice = mongodb.db().collection("games")
//   .updateMany({}, { $set: { price: 10 } })
//   .then(() => client.close());
