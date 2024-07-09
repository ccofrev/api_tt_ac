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
      metodo_acceso_id_1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      metodo_acceso_id_2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      metodo_acceso_id_3: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MetodoAcceso',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      nivel_seguridad: {
        type: Sequelize.INTEGER
      },
      residente_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Residente',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      visitante_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Visitante',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      trabajador_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Trabajador',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dispositivo_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dispositivo',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      temporal: {
        type: Sequelize.BOOLEAN
      },
      inicio_validez: {
        type: Sequelize.DATE
      },
      fin_validez: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING
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
