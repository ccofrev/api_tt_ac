const express = require('express');
const router = express.Router();
const { Residente } = require('../models');

// Crear un nuevo residente
router.post('/', async (req, res) => {
  try {
    const residente = await Residente.create(req.body);
    res.status(201).json(residente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los residentes
router.get('/', async (req, res) => {
  try {
    const residentes = await Residente.findAll();
    res.status(200).json(residentes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un residente por ID
router.get('/:id', async (req, res) => {
  try {
    const residente = await Residente.findByPk(req.params.id);
    if (residente) {
      res.status(200).json(residente);
    } else {
      res.status(404).json({ error: 'Residente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un residente por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Residente.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedResidente = await Residente.findByPk(req.params.id);
      res.status(200).json(updatedResidente);
    } else {
      res.status(404).json({ error: 'Residente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un residente por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Residente.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Residente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
