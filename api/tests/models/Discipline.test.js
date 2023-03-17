const Discipline = require('../models/Discipline');

describe('Discipline', () => {
  beforeEach(async () => {
    await Discipline.destroy({ where: {} });
  });

  afterAll(async () => {
    await Discipline.destroy({ where: {} });
  });

  it('should create a new discipline', async () => {
    const disciplineData = {
      name: 'Math',
      description: 'Mathematics',
    };

    const discipline = await Discipline.create(disciplineData);

    expect(discipline.id).toBeDefined();
    expect(discipline.name).toBe(disciplineData.name);
    expect(discipline.description).toBe(disciplineData.description);
  });

  it('should not create a discipline without a name', async () => {
    const disciplineData = {
      description: 'Mathematics',
    };

    await expect(Discipline.create(disciplineData)).rejects.toThrow();
  });

  it('should update a discipline', async () => {
    const disciplineData = {
      name: 'Math',
      description: 'Mathematics',
    };

    const updatedData = {
      name: 'Physics',
      description: 'Physics science',
    };

    const discipline = await Discipline.create(disciplineData);
    await discipline.update(updatedData);

    const updatedDiscipline = await Discipline.findByPk(discipline.id);

    expect(updatedDiscipline.id).toBe(discipline.id);
    expect(updatedDiscipline.name).toBe(updatedData.name);
    expect(updatedDiscipline.description).toBe(updatedData.description);
  });

  it('should delete a discipline', async () => {
    const disciplineData = {
      name: 'Math',
      description: 'Mathematics',
    };

    const discipline = await Discipline.create(disciplineData);
    await discipline.destroy();

    const deletedDiscipline = await Discipline.findByPk(discipline.id);

    expect(deletedDiscipline).toBeNull();
  });
});
