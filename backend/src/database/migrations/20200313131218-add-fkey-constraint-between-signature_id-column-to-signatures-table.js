module.exports = {
  up: queryInterface => {
    return queryInterface.addConstraint('packages', ['signature_id'], {
      type: 'foreign key',
      name: 'signature_id',
      references: {
        table: 'signatures',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: queryInterface => {
    return queryInterface.removeConstraint('packages');
  }
};
