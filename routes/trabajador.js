const express = require('express');
const router = express.Router();
const { Trabajador } = require('../models');

// Crear un nuevo trabajador
router.post('/', async (req, res) => {
  try {
    const trabajador = await Trabajador.create(req.body);
    res.status(201).json(trabajador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los trabajadores
router.get('/', async (req, res) => {
  try {
    const trabajadores = await Trabajador.findAll();
    res.status(200).json(trabajadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un trabajador por ID
router.get('/:id', async (req, res) => {
  try {
    const trabajador = await Trabajador.findByPk(req.params.id);
    if (trabajador) {
      res.status(200).json(trabajador);
    } else {
      res.status(404).json({ error: 'Trabajador no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un trabajador por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Trabajador.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTrabajador = await Trabajador.findByPk(req.params.id);
      res.status(200).json(updatedTrabajador);
    } else {
      res.status(404).json({ error: 'Trabajador no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un trabajador por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Trabajador.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Trabajador no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
