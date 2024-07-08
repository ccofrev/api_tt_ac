// models/usuario.js
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      nombre_usuario: DataTypes.STRING,
      contrasena: DataTypes.STRING,
      rol_usuario: DataTypes.STRING
    });
  
    Usuario.associate = function(models) {
      Usuario.belongsTo(models.Residente, { foreignKey: 'id' });
    };
  
    return Usuario;
  };
  