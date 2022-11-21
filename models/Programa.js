import mongoose from "mongoose";

const ProgramaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  precio: { type: String, unique: false },
  dirigido: { type: String, required: true },
  objetivo: { type: String, required: true },
  descripcion: { type: String, required: true },
  img: { type: String },
  pdf: { type: String },
});

export default mongoose.models.Programa ||
  mongoose.model("Programa", ProgramaSchema);
