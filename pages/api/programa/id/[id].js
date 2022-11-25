// GET, UPDATE & DELETE SINGLE PROGRAMA
import dbConnect from "../../../../lib/mongo";
import Programa from "../../../../models/Programa";
import cloudinary from "../../../../lib/cloudinary";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  //GET PROGRAMA BY ID
  if (method === "GET") {
    try {
      const programa = await Programa.findById(id);
      res.status(200).json(programa);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //UPDATE PROGRAMA BY ID
  if (method === "PUT") {
    try {
      const updatedPrograma = await Programa.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPrograma);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //DELETE PROGRAMA BY ID
  if (method === "DELETE") {
    try {
      await Programa.findByIdAndDelete(id);
      res.status(200).json("La Formacion ha sido borrada");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}
