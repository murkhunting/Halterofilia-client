//GET ALL & CREATE PROGRAMA
import dbConnect from "../../../lib/mongo";
import Programa from "../../../models/Programa";
import cloudinary from "../../../lib/cloudinary";

export const config = {
  api: {
    responseLimit: false,
  },
};
export default async function handler(req, res) {
  const { method } = req;

  const uploadImg = req.body.img;
  const uploadPdf = req.body.pdf;

  dbConnect();

  //GET ALL
  if (method === "GET") {
    try {
      const programas = await Programa.find();
      res.status(200).json(programas.reverse());
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
      const pdfUploaded = uploadPdf
        ? await cloudinary.uploader.upload(uploadPdf, {
            upload_preset: "halterofilia",
          })
        : null;

      const programa = {
        titulo: req.body.titulo,
        precio: req.body.precio,
        dirigido: req.body.dirigido,
        objetivo: req.body.objetivo,
        descripcion: req.body.descripcion,
        link: req.body.link,
        img: imgUploaded
          ? imgUploaded.secure_url
          : "https://res.cloudinary.com/dokghwlwj/image/upload/v1667469370/pexels-victor-freitas-791763_ikp9ro.jpg",
        pdf: pdfUploaded ? pdfUploaded.secure_url : "",
      };
      const newPrograma = new Programa(programa);
      const savedPrograma = await newPrograma.save();
      res.status(201).json(savedPrograma);
    } catch (error) {
      console.log(error);
    }
  }
}
