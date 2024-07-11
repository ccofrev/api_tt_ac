module.exports = (sequelize, DataTypes) => {
  const Residente = sequelize.define('Residente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    persona_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    residencia_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rol_residencia: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Residente' // Nombre correcto de la tabla
  });

  Residente.associate = (models) => {
    Residente.belongsTo(models.Persona, { foreignKey: 'persona_id', as: 'persona' });
    Residente.belongsTo(models.Residencia, { foreignKey: 'residencia_id', as: 'residencia' });
  };

  return Residente;
};
