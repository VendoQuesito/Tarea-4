const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const ProductoSchema = new mongoose.Schema({
    id: {
      type: String,
      default: uuidv4,
      unique: true
    },
    nombre: {
      type: String,
      required: true,
      maxlength: 50
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      maxlength: 30
    },
    precio: {
      type: Number,
      required: true,
      min: 1
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    },
    activo: {
      type: Boolean,
      default: true
    }
  }, {
    timestamps: true
  });
  
  ProductoSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret.id;
      delete ret._id;
      delete ret.__v;
    }
  });
  
  module.exports = mongoose.model('Producto', ProductoSchema);