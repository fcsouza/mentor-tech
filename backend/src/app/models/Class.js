import Sequelize, { Model } from 'sequelize';

class Class extends Model {
  static init(sequelize) {
    super.init(
      {
        date_start: Sequelize.DATE,
        finished: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Workshop, { foreignKey: 'workshop_id' });
    this.belongsTo(models.School, { foreignKey: 'school_id' });
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}

export default Class;
