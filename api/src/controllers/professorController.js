const Professor = require('../models/Professor');
const Discipline = require('../models/Discipline');

module.exports = {
  async create(req, res, next) {
    try {
      const newProfessor = await Professor.create(req.body);
      return res.status(201).json(newProfessor);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const professors = await Professor.findAll({
        include: Discipline,
      });
      return res.json(professors);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const professorId = req.params.id;
      const updatedProfessor = await Professor.update(req.body, {
        where: { id: professorId },
        returning: true,
      });
      return res.json(updatedProfessor[1][0]);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const professorId = req.params.id;
      await Professor.destroy({ where: { id: professorId } });
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
};
