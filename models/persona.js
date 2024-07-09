// models/persona.js
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    apellido2: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    tableName: 'Persona'  // Asegúrate de que el nombre de la tabla esté correcto aquí
  });

  return Persona;
};
