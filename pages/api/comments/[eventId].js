import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "@/helper/db-util";
async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return res.status(500).json({ message: "Connecting to database failed" });
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      client.close();
      return res.status(422).json({ message: "Invalid Input." });
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;
    try {
      result = await insertDocument(client, "comments", { newComment });
      newComment._id = result.insertedId.toString();
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting document failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const allComments = await getAllDocuments(client, "comments",{ _id: -1 }, { "newComment.eventId": eventId });
      res.status(200).json({ comments: allComments });
    } catch (error) {
      res.status(500).json({
        message: "Failed to read the documents from collection: comments",
      });
    }
  }
  client.close();
}

export default handler;
