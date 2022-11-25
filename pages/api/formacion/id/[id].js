// GET, UPDATE & DELETE SINGLE FORMACION
import dbConnect from "../../../../lib/mongo";
import Formacion from "../../../../models/Formacion";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  //GET FORMACION BY ID
  if (method === "GET") {
    try {
      const formacion = await Formacion.findById(id);
      res.status(200).json(formacion);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //UPDATE FORMACION BY ID
  if (method === "PUT") {
    try {
      const updatedFormacion = await Formacion.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedFormacion);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //DELETE FORMACION BY ID
  if (method === "DELETE") {
    try {
      await Formacion.findByIdAndDelete(id);
      res.status(200).json("La Formacion ha sido borrada");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}
