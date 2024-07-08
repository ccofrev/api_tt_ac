// models/visitante.js
module.exports = (sequelize, DataTypes) => {
    const Visitante = sequelize.define('Visitante', {
      tipo: DataTypes.STRING,
      residencia_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Residencia',
          key: 'id'
        }
      }
    });
  
    Visitante.associate = function(models) {
      Visitante.belongsTo(models.Residencia, { foreignKey: 'residencia_id' });
      Visitante.belongsTo(models.Persona, { foreignKey: 'id' });
    };
  
    return Visitante;
  };
  