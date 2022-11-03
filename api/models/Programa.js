const mongoose = require("mongoose");

const ProgramaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  precio: { type: String, unique: false },
  dirigido: { type: String, required: true },
  objetivo: { type: String, required: true },
  descripcion: { type: String, required: true },
  img: { type: String },
  pdf: { type: String },
});

module.exports = mongoose.model("Programa", ProgramaSchema);
