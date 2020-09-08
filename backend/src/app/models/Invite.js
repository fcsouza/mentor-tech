import Sequelize, { Model } from 'sequelize';

class Invite extends Model {
  static init(sequelize) {
    super.init(
      {
        id_from: Sequelize.INTEGER,
        id_to: Sequelize.INTEGER,
        status: {
          type: Sequelize.ENUM,
          values: ['PENDENTE', 'ACEITO', 'RECUSADO'],
        },
        agent_create: {
          type: Sequelize.ENUM,
          values: ['MENTOR', 'ESCOLA'],
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Invite;
