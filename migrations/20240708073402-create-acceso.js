// migrations/xxxxxx-create-acceso.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Acceso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Persona',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      metodo_acceso_id_1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso',
          key: 'id'
        }
      },
      metodo_acceso_id_2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso',
          key: 'id'
        },
        allowNull: true
      },
      metodo_acceso_id_3: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso',
          key: 'id'
        },
        allowNull: true
      },
      num_barreras: {
        type: Sequelize.INTEGER
      },
      valido_desde: {
        type: Sequelize.DATE
      },
      valido_hasta: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Acceso');
  }
};
