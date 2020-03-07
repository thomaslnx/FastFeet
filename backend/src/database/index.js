import Sequelize from 'sequelize';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import Deliver from '../app/models/Deliver';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, Recipient, Deliver, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => {
      // console.log(`Model retornado no console.log => ${model}`);
      return model.init(this.connection);
    });
  }
}

export default new Database();
