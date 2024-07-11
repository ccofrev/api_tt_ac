module.exports = (sequelize, DataTypes) => {
  const ResidenteTemporal = sequelize.define('ResidenteTemporal', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    residente_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ResidenteTemporal' // Nombre correcto de la tabla
  });

  ResidenteTemporal.associate = (models) => {
    ResidenteTemporal.belongsTo(models.Residente, { foreignKey: 'residente_id', as: 'residente' });
  };

  return ResidenteTemporal;
};
