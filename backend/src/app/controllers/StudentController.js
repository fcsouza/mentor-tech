import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      where: { school_id: req.params.school_id, active: true },
    });

    return res.json(students);
  }

  async store(req, res) {
    const studentExists = await Student.findOne({
      where: {
        school_id: req.body.school_id,
        email: req.body.email,
      },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const { id, name, email, tel, school_id } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email,
      tel,
      school_id,
    });
  }
}

export default new StudentController();
