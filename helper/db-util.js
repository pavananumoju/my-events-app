import { MongoClient } from "mongodb";

const username = encodeURIComponent("dbUser");
const password = encodeURIComponent("Pb~b_g=;7#q]S*M");

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.sfgyftj.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
    console.log(filter);
  const db = client.db();
  const allComments = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return allComments;
}
