const express = require('express');
const router = express.Router();
const { RegistroAcceso } = require('../models');

// Crear un nuevo registro de acceso
router.post('/', async (req, res) => {
  try {
    const registroAcceso = await RegistroAcceso.create(req.body);
    res.status(201).json(registroAcceso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los registros de acceso
router.get('/', async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query;

    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage, 10);

    const { count, rows } = await RegistroAcceso.findAndCountAll({
      offset,
      limit
    });

    res.header('X-Total-Count', count.toString()); // Incluir el encabezado X-Total-Count
    res.header('Content-Range', `registro_acceso ${offset}-${offset + rows.length}/${count}`); // Incluir el encabezado Content-Range
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range'); // Permitir que el encabezado sea accesible desde el cliente
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un registro de acceso por ID
router.get('/:id', async (req, res) => {
  try {
    const registroAcceso = await RegistroAcceso.findByPk(req.params.id);
    if (registroAcceso) {
      res.status(200).json(registroAcceso);
    } else {
      res.status(404).json({ error: 'Registro de acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un registro de acceso por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await RegistroAcceso.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedRegistroAcceso = await RegistroAcceso.findByPk(req.params.id);
      res.status(200).json(updatedRegistroAcceso);
    } else {
      res.status(404).json({ error: 'Registro de acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un registro de acceso por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await RegistroAcceso.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Registro de acceso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
