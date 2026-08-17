const request = require("supertest");
const app = require("../server");

describe("Health Check", () => {
  test("GET /health should return 200", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });
});

describe("Calendar API", () => {
  test("GET /api/calendar should return 200", async () => {
    const response = await request(app).get("/api/calendar");

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toBeDefined();
  });

  test("Invalid endpoint should return 404", async () => {
    const response = await request(app).get("/api/invalid");

    expect(response.statusCode).toBe(404);
  });

  test("POST /api/calendar should create an event", async () => {
    const response = await request(app).post("/api/calendar").send({
      title: "Meeting",
      date: "2026-08-17",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toBeDefined();
    expect(response.body.title).toBe("Meeting");
  });

  test("PUT /api/calendar/:id should update an event", async () => {
    const createResponse = await request(app).post("/api/calendar").send({
      title: "Meeting",
      date: "2026-08-17",
    });

    expect(createResponse.statusCode).toBe(201);

    const id = createResponse.body.id;

    const response = await request(app).put(`/api/calendar/${id}`).send({
      title: "Updated Meeting",
      date: "2026-08-16",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe("Updated Meeting");
  });

  test("DELETE /api/calendar/:id should delete an event", async () => {
    const createResponse = await request(app).post("/api/calendar").send({
      title: "Meeting to Delete",
      date: "2026-08-17",
    });

    expect(createResponse.statusCode).toBe(201);

    const id = createResponse.body.id;

    const deleteResponse = await request(app).delete(`/api/calendar/${id}`);

    expect(deleteResponse.statusCode).toBe(200);
  });
});
