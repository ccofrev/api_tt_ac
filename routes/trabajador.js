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
    const { page = 1, perPage = 10 } = req.query;

    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage, 10);

    const { count, rows } = await Trabajador.findAndCountAll({
      offset,
      limit
    });

    res.header('X-Total-Count', count.toString()); // Incluir el encabezado X-Total-Count
    res.header('Content-Range', `trabajador ${offset}-${offset + rows.length}/${count}`); // Incluir el encabezado Content-Range
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range'); // Permitir que el encabezado sea accesible desde el cliente
    res.status(200).json(rows);
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
