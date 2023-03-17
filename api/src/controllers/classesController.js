const Class = require('../models/Class');

module.exports = {
  async create(req, res, next) {
    try {
      const newClass = await Class.create(req.body);
      return res.status(201).json(newClass);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const classes = await Class.findAll();
      return res.json(classes);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const classId = req.params.id;
      const updatedClass = await Class.update(req.body, {
        where: { id: classId },
        returning: true,
      });
      return res.json(updatedClass[1][0]);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const classId = req.params.id;
      await Class.destroy({ where: { id: classId } });
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
};
