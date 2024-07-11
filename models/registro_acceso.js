module.exports = (sequelize, DataTypes) => {
  const RegistroAcceso = sequelize.define('RegistroAcceso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    acceso_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Acceso',
        key: 'id'
      },
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'RegistroAcceso' // Nombre correcto de la tabla
  });

  RegistroAcceso.associate = (models) => {
    RegistroAcceso.belongsTo(models.Acceso, { foreignKey: 'acceso_id', as: 'acceso' });
  };

  return RegistroAcceso;
};
