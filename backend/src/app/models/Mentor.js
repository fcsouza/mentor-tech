import Sequelize, { Model } from 'sequelize';

class Mentor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        tel: Sequelize.STRING,
        address: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Mentor;
