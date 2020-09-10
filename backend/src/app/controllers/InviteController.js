import { Op } from 'sequelize';
import Invite from '../models/Invite';

class InviteController {
  async index(req, res) {
    const invites = await Invite.findAll({
      where: {
        id_from: req.params.id_from,
        status: 'PENDENTE',
        agent_create: req.params.agent_create,
      },
    });

    return res.json(invites);
  }

  async store(req, res) {
    const inviteExists = await Invite.findOne({
      where: {
        id_from: req.body.id_from,
        id_to: req.body.id_to,
        status: {
          [Op.notIn]: ['PENDENTE'],
        },
      },
    });

    if (inviteExists) {
      return res.status(400).json({ error: 'Invite already exists' });
    }

    const { id, id_from, id_to, status, agente_create } = await Invite.create(
      req.body
    );

    return res.json({
      id,
      id_from,
      id_to,
      status,
      agente_create,
    });
  }
}

export default new InviteController();
