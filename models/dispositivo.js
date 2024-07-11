module.exports = (sequelize, DataTypes) => {
  const Dispositivo = sequelize.define('Dispositivo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    protocolo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    topico: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtopico: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Dispositivo' // Nombre correcto de la tabla
  });

  return Dispositivo;
};
