import mongoose from "mongoose";

const FormacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  precio: { type: String, unique: false },
  oferta: { type: Boolean },
  precioferta: { type: String },
  agotado: { type: Boolean },
  inicio: { type: String, required: true },
  duracion: { type: String, required: true },
  horario: { type: String, required: true },
  dirigido: { type: String, required: true },
  objetivo: { type: String, required: true },
  img: { type: String },
});

export default mongoose.models.Formacion ||
  mongoose.model("Formacion", FormacionSchema);
