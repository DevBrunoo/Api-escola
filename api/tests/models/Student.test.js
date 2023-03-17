const Student = require('../models/Student');

describe('Student model', () => {
  test('should create a student', async () => {
    const studentData1 = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      birthdate: new Date('1990-01-01'),
      classId: 1
    };

    const student = await Student.create(studentData1);

    expect(student.name).toBe(studentData1.name);
    expect(student.email).toBe(studentData1.email);
    expect(student.birthdate.getTime()).toBe(studentData1.birthdate.getTime());
    expect(student.classId).toBe(studentData1.classId);
  });
});
