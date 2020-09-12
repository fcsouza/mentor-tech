import Class from '../models/Class';

class ClassSchoolController {
  async index(req, res) {
    const classes = await Class.findAll({
      where: { school_id: req.params.school_id, finished: false },
    });

    return res.json(classes);
  }

  async store(req, res) {
    req.body.school_id = req.params.school_id;

    const classExists = await Class.findOne({
      where: {
        workshop_id: req.body.workshop_id,
        school_id: req.body.student_id,
        finished: false,
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

export default new ClassSchoolController();
