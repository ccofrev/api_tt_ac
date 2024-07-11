module.exports = (sequelize, DataTypes) => {
  const Acceso = sequelize.define('Acceso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    persona_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Personas', // Asegúrate de que este nombre coincida con el nombre de la tabla 'Personas'
        key: 'id'
      },
      allowNull: false
    },
    metodo_acceso_id_1: {
      type: DataTypes.INTEGER,
      references: {
        model: 'MetodoAcceso',
        key: 'id'
      },
      allowNull: true
    },
    metodo_acceso_id_2: {
      type: DataTypes.INTEGER,
      references: {
        model: 'MetodoAcceso',
        key: 'id'
      },
      allowNull: true
    },
    metodo_acceso_id_3: {
      type: DataTypes.INTEGER,
      references: {
        model: 'MetodoAcceso',
        key: 'id'
      },
      allowNull: true
    },
    numero_barreras: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Acceso' // Nombre correcto de la tabla
  });

  Acceso.associate = (models) => {
    Acceso.belongsTo(models.Persona, { foreignKey: 'persona_id', as: 'persona' });
    Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_1', as: 'metodo_acceso_1' });
    Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_2', as: 'metodo_acceso_2' });
    Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_3', as: 'metodo_acceso_3' });
  };

  return Acceso;
};
