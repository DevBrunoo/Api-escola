const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Discipline extends Model {}

Discipline.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'discipline',
    paranoid: true,
    timestamps: true,
  }
);

// Associações
Discipline.belongsToMany(Class, { through: 'ClassDiscipline' });
Discipline.belongsToMany(Professor, { through: 'ProfessorDiscipline' });
Professor.belongsToMany(Discipline, { through: 'ProfessorDiscipline' });

module.exports = Discipline;
