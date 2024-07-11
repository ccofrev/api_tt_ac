const express = require('express');
const router = express.Router();
const { Visitante } = require('../models');

// Crear un nuevo visitante
router.post('/', async (req, res) => {
  try {
    const visitante = await Visitante.create(req.body);
    res.status(201).json(visitante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los visitantes
router.get('/', async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query;

    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage, 10);

    const { count, rows } = await Visitante.findAndCountAll({
      offset,
      limit
    });

    res.header('X-Total-Count', count.toString()); // Incluir el encabezado X-Total-Count
    res.header('Content-Range', `visitante ${offset}-${offset + rows.length}/${count}`); // Incluir el encabezado Content-Range
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range'); // Permitir que el encabezado sea accesible desde el cliente
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un visitante por ID
router.get('/:id', async (req, res) => {
  try {
    const visitante = await Visitante.findByPk(req.params.id);
    if (visitante) {
      res.status(200).json(visitante);
    } else {
      res.status(404).json({ error: 'Visitante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un visitante por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Visitante.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedVisitante = await Visitante.findByPk(req.params.id);
      res.status(200).json(updatedVisitante);
    } else {
      res.status(404).json({ error: 'Visitante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un visitante por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Visitante.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Visitante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
