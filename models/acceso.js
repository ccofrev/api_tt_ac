module.exports = (sequelize, DataTypes) => {
  const Acceso = sequelize.define('Acceso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    nivel_seguridad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    residente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Personas',
        key: 'id'
      },
      allowNull: true
    },
    visitante_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Visitantes',
        key: 'id'
      },
      allowNull: true
    },
    trabajador_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Trabajadores',
        key: 'id'
      },
      allowNull: true
    },
    dispositivo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Dispositivos',
        key: 'id'
      },
      allowNull: true
    },
    temporal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    inicio_validez: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fin_validez: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Acceso' // Nombre correcto de la tabla
  });

  Acceso.associate = (models) => {
    Acceso.belongsTo(models.Persona, { foreignKey: 'residente_id', as: 'residente' });
    Acceso.belongsTo(models.Visitante, { foreignKey: 'visitante_id', as: 'visitante' });
    Acceso.belongsTo(models.Trabajador, { foreignKey: 'trabajador_id', as: 'trabajador' });
    Acceso.belongsTo(models.Dispositivo, { foreignKey: 'dispositivo_id', as: 'dispositivo' });
    Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_1', as: 'metodo_acceso_1' });
    Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_2', as: 'metodo_acceso_2' });
    Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_3', as: 'metodo_acceso_3' });
  };

  return Acceso;
};
