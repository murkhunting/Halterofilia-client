import mongoose from "mongoose";

const FormacionSchema = new mongoose.Schema({
  titulo: { type: String },
  precio: { type: String, unique: false },
  agotado: { type: Boolean },
  inicio: { type: String },
  duracion: { type: String },
  horario: { type: String },
  dirigido: { type: String },
  objetivo: { type: String },
  link: { type: String },
  img: { type: String },
});

export default mongoose.models.Formacion ||
  mongoose.model("Formacion", FormacionSchema);
