// models/registro_acceso.js
module.exports = (sequelize, DataTypes) => {
    const RegistroAcceso = sequelize.define('RegistroAcceso', {
      acceso_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Acceso',
          key: 'id'
        }
      },
      tipo_acceso: DataTypes.STRING,
      fecha_hora: DataTypes.DATE
    });
  
    RegistroAcceso.associate = function(models) {
      RegistroAcceso.belongsTo(models.Acceso, { foreignKey: 'acceso_id' });
    };
  
    return RegistroAcceso;
  };
  