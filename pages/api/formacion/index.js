//GET ALL & CREATE FORMACION
import dbConnect from "../../../lib/mongo";
import Formacion from "../../../models/Formacion";
import cloudinary from "../../../lib/cloudinary";

export const config = {
  api: {
    responseLimit: false,
  },
};
export default async function handler(req, res) {
  const { method } = req;

  const uploadImg = req.body.img;

  dbConnect();

  //GET ALL
  if (method === "GET") {
    try {
      const formaciones = await Formacion.find();
      res.status(200).json(formaciones.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //CREATE
  if (method === "POST") {
    try {
      const imgUploaded = uploadImg
        ? await cloudinary.uploader.upload(uploadImg, {
            upload_preset: "halterofilia",
          })
        : null;

      const formacion = {
        titulo: req.body.titulo,
        precio: req.body.precio,
        agotado: req.body.agotado,
        inicio: req.body.inicio,
        duracion: req.body.duracion,
        horario: req.body.horario,
        dirigido: req.body.dirigido,
        objetivo: req.body.objetivo,
        link: req.body.link,
        img: imgUploaded
          ? imgUploaded.secure_url
          : "https://res.cloudinary.com/dokghwlwj/image/upload/v1667469370/pexels-victor-freitas-791763_ikp9ro.jpg",
      };
      const newFormacion = new Formacion(formacion);
      const savedFormacion = await newFormacion.save();
      res.status(201).json(savedFormacion);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
