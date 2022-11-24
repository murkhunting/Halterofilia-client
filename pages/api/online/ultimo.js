//GET 2 LAST ONLINES CREATED"
import dbConnect from "../../../lib/mongo";
import Online from "../../../models/Online";

export default async function handler(req, res) {
  dbConnect();

  try {
    const lastonline = await Online.find().sort({ $natural: -1 }).limit(1);
    res.status(200).json(lastonline);
  } catch (err) {
    res.status(500).json(err);
  }
}
