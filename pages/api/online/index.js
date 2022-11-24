//GET ALL & CREATE ONLINES
import dbConnect from "../../../lib/mongo";
import Online from "../../../models/Online";
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
      const onlines = await Online.find();
      res.status(200).json(onlines.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //CREATE
  if (method === "POST") {
    const data = new FormData();
    data.append("uploadImg", uploadImg);
    data.append("upload_preset", "uploads");
    try {
      const imgUploaded = await cloudinary.uploader.upload(uploadImg, {
        upload_preset: "halterofilia",
      });
      const pdfUploaded = await cloudinary.uploader.upload(uploadPdf, {
        upload_preset: "halterofilia",
      });

      const online = {
        idioma: req.body.idioma,
        titulo: req.body.titulo,
        precio: req.body.precio,
        dirigido: req.body.dirigido,
        objetivo: req.body.objetivo,
        descripcion: req.body.descripcion,
        img: imgUploaded.secure_url,
        pdf: pdfUploaded.secure_url,
      };
      const newOnline = new Online(online);
      const savedOnline = await newOnline.save();
      res.status(201).json(savedOnline);
    } catch (error) {
      console.log(error);
    }
  }
}
