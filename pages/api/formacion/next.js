//GET NEXT FORMACION
import dbConnect from "../../../lib/mongo";
import Formacion from "../../../models/Formacion";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  let formaciones = [];
  try {
    formaciones = await Formacion.aggregate([
      { $match: { agotado: false } },
      { $limit: 1 },
    ]);
    res.status(200).json(formaciones);
  } catch (err) {
    res.status(500).json(err);
  }
}
