const express = require('express');
const router = express.Router();
const { Dispositivo } = require('../models');

// Crear un nuevo dispositivo
router.post('/', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.create(req.body);
    res.status(201).json(dispositivo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los dispositivos
router.get('/', async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query;

    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage, 10);

    const { count, rows } = await Dispositivo.findAndCountAll({
      offset,
      limit
    });

    res.header('X-Total-Count', count.toString()); // Incluir el encabezado X-Total-Count
    res.header('Content-Range', `dispositivo ${offset}-${offset + rows.length}/${count}`); // Incluir el encabezado Content-Range
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range'); // Permitir que el encabezado sea accesible desde el cliente
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un dispositivo por ID
router.get('/:id', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (dispositivo) {
      res.status(200).json(dispositivo);
    } else {
      res.status(404).json({ error: 'Dispositivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un dispositivo por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Dispositivo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedDispositivo = await Dispositivo.findByPk(req.params.id);
      res.status(200).json(updatedDispositivo);
    } else {
      res.status(404).json({ error: 'Dispositivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un dispositivo por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Dispositivo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Dispositivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
