// models/dispositivo.js
module.exports = (sequelize, DataTypes) => {
    const Dispositivo = sequelize.define('Dispositivo', {
      tipo: DataTypes.STRING,
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
      protocolo: DataTypes.STRING,
      topico: DataTypes.STRING,
      subtopico: DataTypes.STRING
    });
  
    return Dispositivo;
  };
  