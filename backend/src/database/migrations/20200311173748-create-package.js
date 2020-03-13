module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('packages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'recipients',
          field: 'id'
        }
      },
      deliveryman_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'delivers',
          field: 'id'
        }
      },
      signature_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false
      },
      canceled_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('packages');
  }
};
