module.exports = (sequelize, DataTypes) => {
  const Vehiculo = sequelize.define('Vehiculo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ruta: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Vehiculo' // Nombre correcto de la tabla
  });

  return Vehiculo;
};
