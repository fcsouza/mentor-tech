import Workshop from '../models/Workshop';

class WorkshopAllController {
  async index(req, res) {
    const workshops = await Workshop.findAll({
      where: { active: true },
    });

    return res.json(workshops);
  }
}

export default new WorkshopAllController();
