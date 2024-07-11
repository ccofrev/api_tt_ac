module.exports = (sequelize, DataTypes) => {
  const Visitante = sequelize.define('Visitante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    persona_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    residencia_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Visitante' // Nombre correcto de la tabla
  });

  Visitante.associate = (models) => {
    Visitante.belongsTo(models.Persona, { foreignKey: 'persona_id', as: 'persona' });
    Visitante.belongsTo(models.Residencia, { foreignKey: 'residencia_id', as: 'residencia' });
  };

  return Visitante;
};
