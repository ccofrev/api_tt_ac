// models/residente_temporal.js
module.exports = (sequelize, DataTypes) => {
    const ResidenteTemporal = sequelize.define('ResidenteTemporal', {
      fecha_inicio: DataTypes.DATE,
      fecha_fin: DataTypes.DATE
    });
  
    ResidenteTemporal.associate = function(models) {
      ResidenteTemporal.belongsTo(models.Residente, { foreignKey: 'id' });
    };
  
    return ResidenteTemporal;
  };
  