import Sequelize, { Model } from 'Sequelize';

class DeliveryProblem extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default DeliveryProblem;
