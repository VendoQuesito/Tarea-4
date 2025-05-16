const express = require('express');
const router = express.Router();
const auth = require('../../../middlewares/auth');
const Producto = require('../../../database/models/ProductsSchema');

router.post('/', auth, async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ mensaje: 'Datos invalidos', error: error.message });
    }
    res.status(500).json({ mensaje: 'Error del server' });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const producto = await Producto.findOne({ id: req.params.id });
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.status(200).json(producto);
  } catch (err) {
    res.status(500).json({ mensaje: 'Error del server' });
  }
});

router.get('/', auth, async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const productos = await Producto.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      pagina: Number(page),
      limite: Number(limit),
      total: productos.length,
      datos: productos
    });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error del server' });
  }
});

router.patch('/:id', auth, async (req, res) => {
  try {
    const producto = await Producto.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

    res.status(204).send();
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ mensaje: 'Datos no validos', error: err.message });
    }
    res.status(500).json({ mensaje: 'Error del server' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const producto = await Producto.findOne({ id: req.params.id });
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

    producto.activo = false;
    await producto.save();

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ mensaje: 'Error del server' });
  }
});

module.exports = router;
