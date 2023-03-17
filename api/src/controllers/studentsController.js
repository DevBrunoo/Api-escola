const Student = require('../models/Student');
const Class = require('../models/Class');
const Discipline = require('../models/Discipline');
const Professor = require('../models/Professor');

module.exports = {
  async create(req, res, next) {
    try {
      const newStudent = await Student.create(req.body);
      return res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const students = await Student.findAll({
        include: {
          model: Class,
          include: [
            {
              model: Discipline,
              include: {
                model: Professor,
              },
            },
          ],
        },
      });
      return res.json(students);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const studentId = req.params.id;
      const updatedStudent = await Student.update(req.body, {
        where: { id: studentId },
        returning: true,
      });
      return res.json(updatedStudent[1][0]);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const studentId = req.params.id;
      await Student.destroy({ where: { id: studentId } });
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
};
