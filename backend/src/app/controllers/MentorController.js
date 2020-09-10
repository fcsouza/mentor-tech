import Mentor from '../models/Mentor';

class MentorController {
  async index(req, res) {
    const mentors = await Mentor.findAll({
      where: { active: true },
    });

    return res.json(mentors);
  }

  async store(req, res) {
    const mentorExists = await Mentor.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (mentorExists) {
      return res.status(400).json({ error: 'Mentor already exists' });
    }

    const { id, name, email, tel, address } = await Mentor.create(req.body);

    return res.json({
      id,
      name,
      email,
      tel,
      address,
    });
  }
}

export default new MentorController();
