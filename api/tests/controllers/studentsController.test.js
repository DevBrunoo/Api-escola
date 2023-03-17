const request = require('supertest');
const app = require('../src/app');

describe('GET /classes', () => {
  it('should return a list of classes', async () => {
    const res = await request(app).get('/classes');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('classes');
  });
});

describe('POST /classes', () => {
  it('should create a new class', async () => {
    const newClass = { name: 'Class 101', students: [1, 2], discipline: 1 };
    const res = await request(app).post('/classes').send(newClass);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Class created successfully');
  });

  it('should return an error if required fields are missing', async () => {
    const newClass = { name: 'Class 101', discipline: 1 };
    const res = await request(app).post('/classes').send(newClass);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Missing required fields');
  });
});

describe('DELETE /classes/:id', () => {
  it('should delete a class', async () => {
    const res = await request(app).delete('/classes/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Class deleted successfully');
  });

  it('should return an error if class does not exist', async () => {
    const res = await request(app).delete('/classes/999');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error', 'Class not found');
  });
});
