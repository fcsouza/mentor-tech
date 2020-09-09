module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('invites', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_from: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_to: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('PENDENTE', 'ACEITO', 'RECUSADO'),
        allowNull: false,
        defaultValue: 'PENDENTE',
      },
      agent_create: {
        type: Sequelize.ENUM('MENTOR', 'ESCOLA'),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('invites');
  },
};
