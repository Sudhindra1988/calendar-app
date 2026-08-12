const { getMonthName, isToday } = require("../calendar");

describe("Calendar month functions", () => {
  test("returns January for month 0", () => {
    expect(getMonthName(0)).toBe("January");
  });

  test("returns February for month 1", () => {
    expect(getMonthName(1)).toBe("February");
  });

  test("returns December for month 11", () => {
    expect(getMonthName(11)).toBe("December");
  });
});

describe("isToday function", () => {
  test("identifies today correctly", () => {
    const today = new Date(2026, 7, 11);

    expect(isToday(new Date(2026, 7, 11), today)).toBe(true);
  });

  test("returns false for a different date", () => {
    const today = new Date(2026, 7, 11);
    const otherDate = new Date(2026, 7, 10);

    expect(isToday(otherDate, today)).toBe(false);
  });
});
const request = require("supertest");
const app = require("../app");

describe("Calendar API", () => {
  test("GET /api/calendar should return 200", async () => {
    const response = await request(app).get("/api/calendar");

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toBeDefined();
  });
});
test("Invalid endpoint should return 404", async () => {
  const response = await request(app).get("/api/invalid");

  expect(response.statusCode).toBe(404);
});
test("POST /api/calendar - debug", async () => {
  const response = await request(app).post("/api/calendar").send({
    title: "Automation Interview",
    date: "2026-08-15",
  });

  console.log("STATUS:", response.statusCode);
  console.log("BODY:", response.body);
  console.log("TEXT:", response.text);
  console.log("HEADERS:", response.headers);

  expect(response.statusCode).toBe(201);
  expect(response.body).toHaveProperty("title");
});
test("PUT /api/calendar/:id should update an event", async () => {
  const response = await request(app).put("/api/calendar/1").send({
    title: "Updated Meeting",
    date: "2026-08-16",
  });

  expect(response.statusCode).toBe(200);
});
test("DELETE /api/calendar/:id should delete an event", async () => {
  const response = await request(app).delete("/api/calendar/1");

  expect(response.statusCode).toBe(200);
});
