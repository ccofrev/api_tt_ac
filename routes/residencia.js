const express = require('express');
const router = express.Router();
const { Residencia } = require('../models');

// Crear una nueva residencia
router.post('/', async (req, res) => {
  try {
    const residencia = await Residencia.create(req.body);
    res.status(201).json(residencia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las residencias
router.get('/', async (req, res) => {
  try {
    const residencias = await Residencia.findAll();
    res.status(200).json(residencias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una residencia por ID
router.get('/:id', async (req, res) => {
  try {
    const residencia = await Residencia.findByPk(req.params.id);
    if (residencia) {
      res.status(200).json(residencia);
    } else {
      res.status(404).json({ error: 'Residencia no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una residencia por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Residencia.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedResidencia = await Residencia.findByPk(req.params.id);
      res.status(200).json(updatedResidencia);
    } else {
      res.status(404).json({ error: 'Residencia no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar una residencia por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Residencia.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Residencia no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
