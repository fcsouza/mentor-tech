import Sequelize, { Model } from 'sequelize';

class Workshop extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        point_mentor: Sequelize.INTEGER,
        point_student: Sequelize.INTEGER,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Mentor, { foreignKey: 'mentor_id' });
  }
}

export default Workshop;
