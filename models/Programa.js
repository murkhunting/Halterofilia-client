import mongoose from "mongoose";

const ProgramaSchema = new mongoose.Schema({
  titulo: { type: String },
  precio: { type: String },
  dirigido: { type: String },
  objetivo: { type: String },
  descripcion: { type: String },
  link: { type: String },
  img: { type: String },
  pdf: { type: String },
});

export default mongoose.models.Programa ||
  mongoose.model("Programa", ProgramaSchema);
