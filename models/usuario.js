module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    residente_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol_usuario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Usuario' // Nombre correcto de la tabla
  });

  Usuario.associate = (models) => {
    Usuario.belongsTo(models.Residente, { foreignKey: 'residente_id', as: 'residente' });
  };

  return Usuario;
};
