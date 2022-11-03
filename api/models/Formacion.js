const mongoose = require("mongoose");

const FormacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  precio: { type: String, required: true },
  oferta: { type: Boolean },
  precioferta: { type: String },
  agotado: { type: Boolean },
  inicio: { type: String, required: true },
  duracion: { type: String, required: true },
  horario: { type: String, required: true },
  dirigido: { type: String, required: true },
  objetivo: { type: String, required: true },
  descripcion: { type: String, required: true },
  img: { type: String },
});

module.exports = mongoose.model("Formacion", FormacionSchema);
