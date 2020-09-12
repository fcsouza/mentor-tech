import Class from '../models/Class';
import Workshop from '../models/Workshop';

class ClassMentorController {
  async index(req, res) {
    const classes = await Class.findAll({
      where: { finished: false },
      include: {
        model: Workshop,
        where: { mentor_id: req.params.mentor_id },
      },
    });

    return res.json(classes);
  }

  async store(req, res) {
    const classExists = await Class.findOne({
      where: {
        school_id: req.body.school_id,
        finished: false,
      },
      include: {
        model: Workshop,
        where: { mentor_id: req.params.mentor_id },
      },
    });

    if (classExists) {
      return res.status(400).json({ error: 'Class already exists' });
    }

    const {
      id,
      workshop_id,
      school_id,
      student_id,
      date_start,
    } = await Class.create(req.body);

    return res.json({
      id,
      workshop_id,
      school_id,
      student_id,
      date_start,
    });
  }
}

export default new ClassMentorController();
