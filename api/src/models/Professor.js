const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Professor extends Model {}

Professor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'professor',
    paranoid: true,
    timestamps: true,
  }
);

// Associações
Professor.belongsToMany(Discipline, { through: 'ProfessorDiscipline' });
Discipline.belongsToMany(Professor, { through: 'ProfessorDiscipline' });

module.exports = Professor;
