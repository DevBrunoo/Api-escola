const request = require("supertest");
const app = require("../src/app");
const Professor = require("../src/models/Professor");
const Discipline = require("../src/models/Discipline");
const { setupDatabase, professorOne, professorTwo, disciplineOne, disciplineTwo } = require("./fixtures/db");

beforeEach(setupDatabase);

describe("POST /professors", () => {
  it("should create a new professor", async () => {
    const response = await request(app)
      .post("/professors")
      .send({
        name: "John Doe",
        email: "johndoe@example.com",
      })
      .expect(201);

    const professor = await Professor.findById(response.body._id);
    expect(professor).not.toBeNull();
    expect(professor.name).toBe("John Doe");
    expect(professor.email).toBe("johndoe@example.com");
  });

  it("should not create a new professor with invalid name", async () => {
    await request(app)
      .post("/professors")
      .send({
        email: "johndoe@example.com",
      })
      .expect(400);
  });

  it("should not create a new professor with invalid email", async () => {
    await request(app)
      .post("/professors")
      .send({
        name: "John Doe",
      })
      .expect(400);
  });

  it("should not create a new professor with email that already exists", async () => {
    await request(app)
      .post("/professors")
      .send({
        name: "John Doe",
        email: professorOne.email,
      })
      .expect(400);
  });
});

describe("GET /professors/:id", () => {
  it("should return a professor with his disciplines", async () => {
    const response = await request(app)
      .get(`/professors/${professorOne._id}`)
      .expect(200);

    const professor = response.body;
    expect(professor.name).toBe(professorOne.name);
    expect(professor.email).toBe(professorOne.email);
    expect(professor.disciplines).toHaveLength(2);
  });

  it("should return 404 if professor not found", async () => {
    await request(app).get(`/professors/${new Professor()._id}`).expect(404);
  });

  it("should return 400 if id is invalid", async () => {
    await request(app).get("/professors/123").expect(400);
  });
});

describe("PATCH /professors/:id", () => {
  it("should update a professor with valid data", async () => {
    const newName = "Jane Doe";

    const response = await request(app)
      .patch(`/professors/${professorOne._id}`)
      .send({
        name: newName,
      })
      .expect(200);

    const professor = response.body;
    expect(professor.name).toBe(newName);
    expect(professor.email).toBe(professorOne.email);
  });

  it("should not update a professor with invalid data", async () => {
    await request(app)
      .patch(`/professors/${professorOne._id}`)
      .send({
        name: "",
      })
      .expect(400);
  });

  it("should not update a professor with email that already exists", async () => {
    await request(app)
      .patch(`/professors/${professorOne._id}`)
      .send({
        email: professorTwo.email
    })
    .expect(400);
    const updatedProfessor = await Professor.findById(professorOne._id);
expect(updatedProfessor.email).not.toBe(professorTwo.email);
});






    






        it("should update professor data", async () => {
            const updatedProfessor = {
              name: "Updated Name",
              email: "updated-email@test.com",
              disciplines: ["Physics", "Chemistry"],
            };
      
            const res = await request(app)
              .put(`/api/professors/${createdProfessor._id}`)
              .send(updatedProfessor)
              .set("Accept", "application/json");
      
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty("_id");
            expect(res.body.name).toEqual(updatedProfessor.name);
            expect(res.body.email).toEqual(updatedProfessor.email);
            expect(res.body.disciplines).toEqual(updatedProfessor.disciplines);
          });
      
          it("should return 400 if id is invalid", async () => {
            const updatedProfessor = {
              name: "Updated Name",
              email: "updated-email@test.com",
              disciplines: ["Physics", "Chemistry"],
            };
      
            const res = await request(app)
              .put(`/api/professors/invalid_id`)
              .send(updatedProfessor)
              .set("Accept", "application/json");
      
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty("message");
          });
      
          it("should return 404 if professor is not found", async () => {
            const updatedProfessor = {
              name: "Updated Name",
              email: "updated-email@test.com",
              disciplines: ["Physics", "Chemistry"],
            };
      
            const res = await request(app)
              .put(`/api/professors/${new ObjectId()}`)
              .send(updatedProfessor)
              .set("Accept", "application/json");
      
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty("message");
          });
        });
      
        describe("DELETE /api/professors/:id", () => {
          let createdProfessor;
      
          beforeEach(async () => {
            createdProfessor = await Professor.create({
              name: "John Doe",
              email: "john@test.com",
              disciplines: ["Math", "Physics"],
            });
          });
      
          it("should delete professor", async () => {
            const res = await request(app)
              .delete(`/api/professors/${createdProfessor._id}`)
              .set("Accept", "application/json");
      
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty("message");
            expect(await Professor.findById(createdProfessor._id)).toBeNull();
          });
      
          it("should return 400 if id is invalid", async () => {
            const res = await request(app)
              .delete(`/api/professors/invalid_id`)
              .set("Accept", "application/json");
      
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty("message");
          });
      
          it("should return 404 if professor is not found", async () => {
            const res = await request(app)
              .delete(`/api/professors/${new ObjectId()}`)
              .set("Accept", "application/json");
      
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty("message");
          });
        });
      
      
      

    

