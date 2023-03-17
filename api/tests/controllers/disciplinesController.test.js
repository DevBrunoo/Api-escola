const request = require('supertest');
const app = require('../src/app');
const { sequelize } = require('../src/models');
const { Discipline } = require('../src/models');

describe('Disciplines controller', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  describe('POST /disciplines', () => {
    it('should create a new discipline', async () => {
      const res = await request(app)
        .post('/disciplines')
        .send({
          name: 'Math',
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toEqual('Math');

      const discipline = await Discipline.findOne({ where: { id: res.body.id } });
      expect(discipline).toBeDefined();
      expect(discipline.name).toEqual('Math');
    });

    it('should return 400 if name is not provided', async () => {
      const res = await request(app)
        .post('/disciplines')
        .send({});

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /disciplines/:id', () => {
    it('should return the discipline with the specified id', async () => {
      const discipline = await Discipline.create({
        name: 'Science',
      });

      const res = await request(app)
        .get(`/disciplines/${discipline.id}`);

      expect(res.statusCode).toEqual(200);
      expect(res.body.id).toEqual(discipline.id);
      expect(res.body.name).toEqual('Science');
    });

    it('should return 404 if the discipline is not found', async () => {
      const res = await request(app)
        .get('/disciplines/123');

      expect(res.statusCode).toEqual(404);
    });
  });

  describe('DELETE /disciplines/:id', () => {
    it('should delete the discipline with the specified id', async () => {
      const discipline = await Discipline.create({
        name: 'Biology',
      });

      const res = await request(app)
        .delete(`/disciplines/${discipline.id}`);

      expect(res.statusCode).toEqual(204);

      const deletedDiscipline = await Discipline.findOne({ where: { id: discipline.id } });
      expect(deletedDiscipline).toBeNull();
    });

    it('should return 404 if the discipline is not found', async () => {
      const res = await request(app)
        .delete('/disciplines/123');

      expect(res.statusCode).toEqual(404);
    });
  });
});
