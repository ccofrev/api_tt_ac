// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); // Asegúrate de que esta ruta es correcta
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas (puedes definir tus rutas aquí o importarlas desde otros archivos)
// Ejemplo básico de una ruta:
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sincronizar la base de datos y arrancar el servidor
db.sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully.');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to synchronize database:', err);
  });

module.exports = app;
