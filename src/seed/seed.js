const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');
const Producto = require('./../database/models/ProductsSchema');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DATABASE)
.then(async () => {
  console.log('Conectando');

  await Producto.deleteMany();

  const productos = [];

  for (let i = 0; i < 51; i++) {
    productos.push(new Producto({
      id: uuidv4(),
      nombre: faker.commerce.productName().slice(0, 50),
      sku: faker.string.uuid().slice(0, 30),
      precio: faker.number.int({ min: 1, max: 10000 }),
      stock: faker.number.int({ min: 0, max: 500 }),
      activo: faker.datatype.boolean()
    }));
  }

  await Producto.insertMany(productos);

  console.log('Se incertaron los productos');
  mongoose.disconnect();
})
.catch(err => {
  console.error('Error al conectar', err);
});
