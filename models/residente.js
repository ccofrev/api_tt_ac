// models/residente.js
module.exports = (sequelize, DataTypes) => {
    const Residente = sequelize.define('Residente', {
      residencia_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Residencia',
          key: 'id'
        }
      },
      rol_residencia: DataTypes.STRING
    });
  
    Residente.associate = function(models) {
      Residente.belongsTo(models.Residencia, { foreignKey: 'residencia_id' });
      Residente.belongsTo(models.Persona, { foreignKey: 'id' });
      Residente.hasMany(models.Usuario, { foreignKey: 'id' });
      Residente.hasMany(models.ResidenteTemporal, { foreignKey: 'id' });
    };
  
    return Residente;
  };
  