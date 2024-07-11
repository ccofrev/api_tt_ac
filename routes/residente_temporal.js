const express = require('express');
const router = express.Router();
const { ResidenteTemporal } = require('../models');

// Crear un nuevo residente temporal
router.post('/', async (req, res) => {
  try {
    const residenteTemporal = await ResidenteTemporal.create(req.body);
    res.status(201).json(residenteTemporal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los residentes temporales
router.get('/', async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query;

    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage, 10);

    const { count, rows } = await ResidenteTemporal.findAndCountAll({
      offset,
      limit
    });

    res.header('X-Total-Count', count.toString()); // Incluir el encabezado X-Total-Count
    res.header('Content-Range', `residencia_temporal ${offset}-${offset + rows.length}/${count}`); // Incluir el encabezado Content-Range
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range'); // Permitir que el encabezado sea accesible desde el cliente
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un residente temporal por ID
router.get('/:id', async (req, res) => {
  try {
    const residenteTemporal = await ResidenteTemporal.findByPk(req.params.id);
    if (residenteTemporal) {
      res.status(200).json(residenteTemporal);
    } else {
      res.status(404).json({ error: 'Residente temporal no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un residente temporal por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await ResidenteTemporal.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedResidenteTemporal = await ResidenteTemporal.findByPk(req.params.id);
      res.status(200).json(updatedResidenteTemporal);
    } else {
      res.status(404).json({ error: 'Residente temporal no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un residente temporal por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ResidenteTemporal.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Residente temporal no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
