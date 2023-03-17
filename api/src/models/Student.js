const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Student extends Model {}

Student.init(
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
    modelName: 'student',
    paranoid: true,
    timestamps: true,
  }
);

// Associações
Student.belongsTo(Class);
Class.hasMany(Student);

module.exports = Student;
