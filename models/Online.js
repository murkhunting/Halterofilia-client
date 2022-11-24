import mongoose from "mongoose";

const OnlineSchema = new mongoose.Schema({
  idioma: { type: String },
  titulo: { type: String },
  precio: { type: String },
  dirigido: { type: String },
  objetivo: { type: String },
  descripcion: { type: String },
  img: { type: String },
  pdf: { type: String },
});

export default mongoose.models.Online || mongoose.model("Online", OnlineSchema);
