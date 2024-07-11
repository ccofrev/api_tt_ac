const express = require('express');
const router = express.Router();
const { Acceso } = require('../models');

// Crear un nuevo acceso
router.post('/', async (req, res) => {
  try {
    const acceso = await Acceso.create(req.body);
    res.status(201).json(acceso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los accesos
router.get('/', async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query;

    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage, 10);

    const { count, rows } = await Acceso.findAndCountAll({
      offset,
      limit
    });

    res.header('X-Total-Count', count.toString()); // Incluir el encabezado X-Total-Count
    res.header('Content-Range', `acceso ${offset}-${offset + rows.length}/${count}`); // Incluir el encabezado Content-Range
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range'); // Permitir que el encabezado sea accesible desde el cliente
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un acceso por ID
router.get('/:id', async (req, res) => {
  try {
    const acceso = await Acceso.findByPk(req.params.id);
    if (acceso) {
      res.status(200).json(acceso);
    } else {
      res.status(404).json({ error: 'Acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un acceso por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Acceso.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAcceso = await Acceso.findByPk(req.params.id);
      res.status(200).json(updatedAcceso);
    } else {
      res.status(404).json({ error: 'Acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un acceso por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Acceso.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
