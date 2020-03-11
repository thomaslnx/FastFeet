module.exports = {
  up: queryInterface => {
    return queryInterface.addConstraint('delivers', ['avatar_id'], {
      type: 'foreign key',
      name: 'avatar_id',
      references: { table: 'files', field: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    });
  },

  down: queryInterface => {
    return queryInterface.removeConstraint('delivers', 'avatar_id');
  }
};
