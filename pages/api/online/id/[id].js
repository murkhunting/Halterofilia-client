// GET, UPDATE & DELETE SINGLE ONLINE
import dbConnect from "../../../../lib/mongo";
import Online from "../../../../models/Online";
import cloudinary from "../../../../lib/cloudinary";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  //GET ONLINE BY ID
  if (method === "GET") {
    try {
      const online = await Online.findById(id);
      res.status(200).json(online);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //UPDATE ONLINE BY ID
  if (method === "PUT") {
    try {
      const updatedOnline = await Online.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOnline);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //DELETE ONLINE BY ID
  if (method === "DELETE") {
    try {
      await Online.findByIdAndDelete(id);
      res.status(200).json("La Formacion ha sido borrada");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}
