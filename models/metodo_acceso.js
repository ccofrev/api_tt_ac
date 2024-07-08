// models/metodo_acceso.js
module.exports = (sequelize, DataTypes) => {
    const MetodoAcceso = sequelize.define('MetodoAcceso', {
      tipo: DataTypes.STRING,
      dato: DataTypes.STRING,
      dispositivo_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Dispositivo',
          key: 'id'
        },
        allowNull: true
      }
    });
  
    MetodoAcceso.associate = function(models) {
      MetodoAcceso.belongsTo(models.Dispositivo, { foreignKey: 'dispositivo_id' });
    };
  
    return MetodoAcceso;
  };
  