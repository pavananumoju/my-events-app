import { connectDatabase, insertDocument } from "@/helper/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      return res.status(422).json({ message: "Invalid email address" });
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Connecting with database failed" });
    }

    try {
      await insertDocument(client, "emails", { email: userEmail });
      client.close();
    } catch (error) {
      return res.status(500).json({ message: "Inserting data failed" });
    }

    return res.status(201).json({ received: "Signed Up" });
  }
}

export default handler;
