// models/trabajador.js
module.exports = (sequelize, DataTypes) => {
    const Trabajador = sequelize.define('Trabajador', {
      tipo: DataTypes.STRING,
      residencia_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Residencia',
          key: 'id'
        },
        allowNull: true
      }
    });
  
    Trabajador.associate = function(models) {
      Trabajador.belongsTo(models.Residencia, { foreignKey: 'residencia_id' });
      Trabajador.belongsTo(models.Persona, { foreignKey: 'id' });
    };
  
    return Trabajador;
  };
  