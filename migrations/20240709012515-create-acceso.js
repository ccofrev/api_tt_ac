'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Acceso', { // Nombre correcto de la tabla
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Personas', // Nombre de la tabla a la que hace referencia
          key: 'id'
        },
        allowNull: false
      },
      metodo_acceso_id_1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso', // Nombre de la tabla a la que hace referencia
          key: 'id'
        },
        allowNull: true
      },
      metodo_acceso_id_2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso', // Nombre de la tabla a la que hace referencia
          key: 'id'
        },
        allowNull: true
      },
      metodo_acceso_id_3: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso', // Nombre de la tabla a la que hace referencia
          key: 'id'
        },
        allowNull: true
      },
      numero_barreras: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('Acceso'); // Nombre correcto de la tabla
  }
};
