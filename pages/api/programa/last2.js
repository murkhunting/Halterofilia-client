//GET 2 LAST PROGRAMS CREATED"
import dbConnect from "../../../lib/mongo";
import Programa from "../../../models/Programa";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  try {
    const lastprogramas = await Programa.find().sort({ $natural: -1 }).limit(2);
    res.status(200).json(lastprogramas);
  } catch (err) {
    res.status(500).json(err);
  }
}
