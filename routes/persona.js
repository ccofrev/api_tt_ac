const express = require('express');
const router = express.Router();
const { Persona } = require('../models');

// Crear una nueva persona
router.post('/', async (req, res) => {
  try {
    const persona = await Persona.create(req.body);
    res.status(201).json(persona);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las personas
router.get('/', async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.status(200).json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una persona por ID
router.get('/:id', async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (persona) {
      res.status(200).json(persona);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una persona por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Persona.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPersona = await Persona.findByPk(req.params.id);
      res.status(200).json(updatedPersona);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar una persona por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Persona.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
