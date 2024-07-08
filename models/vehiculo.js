// models/vehiculo.js
module.exports = (sequelize, DataTypes) => {
    const Vehiculo = sequelize.define('Vehiculo', {
      matricula: DataTypes.STRING,
      modelo: DataTypes.STRING,
      marca: DataTypes.STRING,
      color: DataTypes.STRING,
      persona_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Persona',
          key: 'id'
        }
      }
    });
  
    Vehiculo.associate = function(models) {
      Vehiculo.belongsTo(models.Persona, { foreignKey: 'persona_id' });
    };
  
    return Vehiculo;
  };
  