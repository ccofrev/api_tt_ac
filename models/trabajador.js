module.exports = (sequelize, DataTypes) => {
  const Trabajador = sequelize.define('Trabajador', {
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
    tableName: 'Trabajador' // Nombre correcto de la tabla
  });

  Trabajador.associate = (models) => {
    Trabajador.belongsTo(models.Persona, { foreignKey: 'persona_id', as: 'persona' });
    Trabajador.belongsTo(models.Residencia, { foreignKey: 'residencia_id', as: 'residencia' });
  };

  return Trabajador;
};
