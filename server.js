const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar el paquete cors
const { sequelize } = require('./models');

// Importar rutas
const residenciaRoutes = require('./routes/residencia'); 
const personaRoutes = require('./routes/persona');
const residenteRoutes = require('./routes/residente');
const residenteTemporalRoutes = require('./routes/residente_temporal');
const usuarioRoutes = require('./routes/usuario');
const visitanteRoutes = require('./routes/visitante');
const trabajadorRoutes = require('./routes/trabajador');
const vehiculoRoutes = require('./routes/vehiculo');
const dispositivoRoutes = require('./routes/dispositivo');    
const metodoAccesoRoutes = require('./routes/metodo_acceso'); 
const accesoRoutes = require('./routes/acceso');
const registroAccesoRoutes = require('./routes/registro_acceso');

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS para exponer los encabezados necesarios
const corsOptions = {
  exposedHeaders: ['X-Total-Count', 'Content-Range']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Usar rutas
app.use('/api/residencias', residenciaRoutes);
app.use('/api/personas', personaRoutes);
app.use('/api/residentes', residenteRoutes);
app.use('/api/residentes_temporales', residenteTemporalRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/visitantes', visitanteRoutes);
app.use('/api/trabajadores', trabajadorRoutes);
app.use('/api/vehiculos', vehiculoRoutes);
app.use('/api/dispositivos', dispositivoRoutes);
app.use('/api/metodos_acceso', metodoAccesoRoutes);
app.use('/api/accesos', accesoRoutes);
app.use('/api/registros_acceso', registroAccesoRoutes);

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});
