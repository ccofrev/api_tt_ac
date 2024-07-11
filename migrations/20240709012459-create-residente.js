'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Residente', { // Nombre correcto de la tabla
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Personas', // Nombre de la tabla a la que hace referencia
          key: 'id'
        }
      },
      residencia_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Residencias', // Nombre de la tabla a la que hace referencia
          key: 'id'
        }
      },
      rol_residencia: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Residente'); // Nombre correcto de la tabla
  }
};
