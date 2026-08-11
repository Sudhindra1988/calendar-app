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
