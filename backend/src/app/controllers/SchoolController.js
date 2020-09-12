import School from '../models/School';

class SchoolController {
  async index(req, res) {
    const schools = await School.findAll({
      where: { active: true },
    });

    return res.json(schools);
  }

  async store(req, res) {
    const schoolExists = await School.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (schoolExists) {
      return res.status(400).json({ error: 'School already exists' });
    }

    const { id, name, email, tel, address, director } = await School.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      tel,
      address,
      director,
    });
  }
}

export default new SchoolController();
