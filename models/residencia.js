// models/residencia.js
module.exports = (sequelize, DataTypes) => {
    const Residencia = sequelize.define('Residencia', {
      calle: DataTypes.STRING,
      numero: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
      imagen: DataTypes.STRING,
      tipo: DataTypes.STRING
    });
  
    Residencia.associate = function(models) {
      Residencia.hasMany(models.Residente, { foreignKey: 'residencia_id' });
      Residencia.hasMany(models.Visitante, { foreignKey: 'residencia_id' });
      Residencia.hasMany(models.Trabajador, { foreignKey: 'residencia_id' });
    };
  
    return Residencia;
  };
  