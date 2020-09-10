import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Mentor from '../app/models/Mentor';
import School from '../app/models/School';
import Workshop from '../app/models/Workshop';
import Class from '../app/models/Class';
import Student from '../app/models/Student';
import Invite from '../app/models/Invite';

const models = [Mentor, School, Workshop, Class, Student, Invite];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
