const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Class extends Model {}

Class.init(
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
    modelName: 'class',
    paranoid: true,
    timestamps: true,
  }
);

// Associações
Class.hasMany(Discipline, { foreignKey: 'classId' });
Class.hasMany(Student, { foreignKey: 'classId' });
Student.belongsTo(Class, { foreignKey: 'classId' });

module.exports = Class;
