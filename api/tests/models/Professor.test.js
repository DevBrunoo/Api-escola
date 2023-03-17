const request = require("supertest");
const app = require("../app");
const database = require("../config/database");
const Professor = require("../src/models/Professor");
const Discipline = require("../src/models/Discipline");

describe("Professors", () => {
  const testProfessor = {
    name: "John Doe",
    email: "johndoe@test.com",
  };

  const testDiscipline = {
    name: "Math",
  };

  beforeEach(async () => {
    await database.sync({ force: true });
  });

  afterAll(async () => {
    await database.close();
  });

  describe("POST /professors", () => {
    test("should create a new professor", async () => {
      const response = await request(app)
        .post("/professors")
        .send(testProfessor)
        .expect(201);

      expect(response.body.name).toBe(testProfessor.name);
      expect(response.body.email).toBe(testProfessor.email);
    });

    test("should return 400 if name is not provided", async () => {
      const response = await request(app)
        .post("/professors")
        .send({
          email: testProfessor.email,
        })
        .expect(400);

      expect(response.body.error).toBe("Missing required field: name");
    });

    test("should return 400 if email is not provided", async () => {
      const response = await request(app)
        .post("/professors")
        .send({
          name: testProfessor.name,
        })
        .expect(400);

      expect(response.body.error).toBe("Missing required field: email");
    });

    test("should return 400 if email is invalid", async () => {
      const response = await request(app)
        .post("/professors")
        .send({
          name: testProfessor.name,
          email: "invalidemail",
        })
        .expect(400);

      expect(response.body.error).toBe("Invalid email");
    });
  });

  describe("GET /professors/:id", () => {
    test("should return the requested professor with their disciplines", async () => {
      const professor = await Professor.create(testProfessor);
      const discipline = await Discipline.create(testDiscipline);
      await professor.addDiscipline(discipline);

      const response = await request(app).get(`/professors/${professor.id}`);

      expect(response.body.name).toBe(professor.name);
      expect(response.body.email).toBe(professor.email);
      expect(response.body.disciplines.length).toBe(1);
      expect(response.body.disciplines[0].name).toBe(discipline.name);
    });

    test("should return 404 if professor is not found", async () => {
      const response = await request(app).get("/professors/999").expect(404);

      expect(response.body.error).toBe("Professor not found");
    });
  });
});
