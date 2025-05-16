require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productosRouter = require('./src/modules/productos/routers/ProductosRouter');

app.use(express.json());

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_DATABASE);
      console.log('Conexion exitosa');
    } catch (error) {
      console.error('Conexion fallida', error);
      process.exit(1);
    }
  };

connectDB();

app.use('/productos', productosRouter);

app.get("/", (req, res) =>{
    res.status(200).send("Todo bem");
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});