const Discipline = require('../models/Discipline');

module.exports = {
  async create(req, res, next) {
    try {
      const newDiscipline = await Discipline.create(req.body);
      return res.status(201).json(newDiscipline);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const disciplines = await Discipline.findAll();
      return res.json(disciplines);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const disciplineId = req.params.id;
      const updatedDiscipline = await Discipline.update(req.body, {
        where: { id: disciplineId },
        returning: true,
      });
      return res.json(updatedDiscipline[1][0]);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const disciplineId = req.params.id;
      await Discipline.destroy({ where: { id: disciplineId } });
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
};
