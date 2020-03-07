import Sequelize, { Model } from 'sequelize';

class Deliver extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        avatar_id: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Deliver;
