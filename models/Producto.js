import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    
    nombre: {type: String},
    precio: Number,
    descripcion: {type: String},
    talle: {type: String},
    color: {type: String},
    stock: Number,
    coleccion: {type: String},
    categoria: [String],
    imagen: {type: String},
    galeria: [String]
    
  });
  
export default mongoose.models.Producto || mongoose.model('Producto', productoSchema);
  