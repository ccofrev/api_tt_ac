module.exports = (sequelize, DataTypes) => {
  const MetodoAcceso = sequelize.define('MetodoAcceso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MetodoAcceso' // Nombre correcto de la tabla
  });

  return MetodoAcceso;
};
