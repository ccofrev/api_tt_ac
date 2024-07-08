const express = require('express');
const router = express.Router();
const { MetodoAcceso } = require('../models');

// Crear un nuevo método de acceso
router.post('/', async (req, res) => {
  try {
    const metodoAcceso = await MetodoAcceso.create(req.body);
    res.status(201).json(metodoAcceso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los métodos de acceso
router.get('/', async (req, res) => {
  try {
    const metodosAcceso = await MetodoAcceso.findAll();
    res.status(200).json(metodosAcceso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un método de acceso por ID
router.get('/:id', async (req, res) => {
  try {
    const metodoAcceso = await MetodoAcceso.findByPk(req.params.id);
    if (metodoAcceso) {
      res.status(200).json(metodoAcceso);
    } else {
      res.status(404).json({ error: 'Método de acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un método de acceso por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await MetodoAcceso.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedMetodoAcceso = await MetodoAcceso.findByPk(req.params.id);
      res.status(200).json(updatedMetodoAcceso);
    } else {
      res.status(404).json({ error: 'Método de acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un método de acceso por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await MetodoAcceso.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Método de acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
