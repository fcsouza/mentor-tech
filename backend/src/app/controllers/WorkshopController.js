import Workshop from '../models/Workshop';

class WorkshopController {
  async index(req, res) {
    const workshops = await Workshop.findAll({
      where: { mentor_id: req.params.mentor_id, active: true },
    });

    return res.json(workshops);
  }

  async store(req, res) {
    const workshopExists = await Workshop.findOne({
      where: {
        mentor_id: req.body.mentor_id,
        name: req.body.name,
      },
    });

    if (workshopExists) {
      return res.status(400).json({ error: 'Workshop already exists' });
    }

    const {
      id,
      name,
      mentor_id,
      point_mentor,
      point_student,
    } = await Workshop.create(req.body);

    return res.json({
      id,
      name,
      mentor_id,
      point_mentor,
      point_student,
    });
  }
}

export default new WorkshopController();
