// GET, UPDATE & DELETE SINGLE FORMACION
import dbConnect from "../../../../lib/mongo";
import Formacion from "../../../../models/Formacion";
import cloudinary from "../../../../lib/cloudinary";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  const token = cookies.token;

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
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
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
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      await Formacion.findByIdAndDelete(id);
      res.status(200).json("La Formacion ha sido borrada");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}
