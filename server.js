const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Sincronizar con la base de datos
db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
