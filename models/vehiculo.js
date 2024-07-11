module.exports = (sequelize, DataTypes) => {
  const Vehiculo = sequelize.define('Vehiculo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    persona_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Persona',
        key: 'id'
      }
    }
  }, {
    tableName: 'Vehiculo' // Nombre correcto de la tabla
  });

  Vehiculo.associate = (models) => {
    Vehiculo.belongsTo(models.Persona, { foreignKey: 'persona_id', as: 'persona' });
  };

  return Vehiculo;
};
