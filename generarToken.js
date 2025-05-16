const jwt = require('jsonwebtoken');
require('dotenv').config();

const payload = {
  rol: 'admin',
  app: 'Tarea 4'
};

const opciones = {
  expiresIn: '60d'
};

const token = jwt.sign(payload, process.env.JWT_SECRET, opciones);

console.log('Token generado:\n');
console.log(token);

