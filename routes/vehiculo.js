const express = require('express');
const router = express.Router();
const { Vehiculo } = require('../models');

// Crear un nuevo vehículo
router.post('/', async (req, res) => {
  try {
    const vehiculo = await Vehiculo.create(req.body);
    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los vehículos
router.get('/', async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query;

    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage, 10);

    const { count, rows } = await Vehiculo.findAndCountAll({
      offset,
      limit
    });

    res.header('X-Total-Count', count.toString()); // Incluir el encabezado X-Total-Count
    res.header('Content-Range', `vehiculo ${offset}-${offset + rows.length}/${count}`); // Incluir el encabezado Content-Range
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range'); // Permitir que el encabezado sea accesible desde el cliente
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un vehículo por ID
router.get('/:id', async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByPk(req.params.id);
    if (vehiculo) {
      res.status(200).json(vehiculo);
    } else {
      res.status(404).json({ error: 'Vehículo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un vehículo por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Vehiculo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedVehiculo = await Vehiculo.findByPk(req.params.id);
      res.status(200).json(updatedVehiculo);
    } else {
      res.status(404).json({ error: 'Vehículo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un vehículo por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Vehiculo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Vehículo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
