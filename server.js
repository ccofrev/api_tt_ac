const express = require('express');
const bodyParser = require('body-parser');
const residenciaRoutes = require('./routes/residencia');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Rutas
app.use('/api/residencias', residenciaRoutes);

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});

