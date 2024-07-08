// models/acceso.js
module.exports = (sequelize, DataTypes) => {
    const Acceso = sequelize.define('Acceso', {
      persona_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Persona',
          key: 'id'
        }
      },
      metodo_acceso_id_1: {
        type: DataTypes.INTEGER,
        references: {
          model: 'MetodoAcceso',
          key: 'id'
        }
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
      num_barreras: DataTypes.INTEGER,
      valido_desde: DataTypes.DATE,
      valido_hasta: DataTypes.DATE
    });
  
    Acceso.associate = function(models) {
      Acceso.belongsTo(models.Persona, { foreignKey: 'persona_id' });
      Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_1' });
      Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_2' });
      Acceso.belongsTo(models.MetodoAcceso, { foreignKey: 'metodo_acceso_id_3' });
    };
  
    return Acceso;
  };
  