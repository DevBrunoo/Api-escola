const { Class } = require('../models');

describe('Class model', () => {
  test('should create a class', async () => {
    const className = 'Class A';
    const classYear = 2023;
    const classObject = await Class.create({
      name: className,
      year: classYear
    });
    expect(classObject.name).toBe(className);
    expect(classObject.year).toBe(classYear);
  });

  test('should update a class', async () => {
    const className = 'Class B';
    const classYear = 2024;
    const classObject = await Class.create({
      name: 'Class A',
      year: 2023
    });
    const updatedClass = await classObject.update({
      name: className,
      year: classYear
    });
    expect(updatedClass.name).toBe(className);
    expect(updatedClass.year).toBe(classYear);
  });

  test('should delete a class', async () => {
    const classObject = await Class.create({
      name: 'Class A',
      year: 2023
    });
    await classObject.destroy();
    const retrievedClass = await Class.findByPk(classObject.id);
    expect(retrievedClass).toBeNull();
  });
});
