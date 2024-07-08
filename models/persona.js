// models/persona.js
module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('Persona', {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      telefono: DataTypes.STRING,
      email: DataTypes.STRING,
      estado: DataTypes.STRING
    });
  
    Persona.associate = function(models) {
      Persona.hasMany(models.Vehiculo, { foreignKey: 'persona_id' });
    };
  
    return Persona;
  };
  