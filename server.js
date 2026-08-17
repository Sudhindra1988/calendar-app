const express = require("express");

const app = express();

app.use(express.json());

// In-memory calendar events
let events = [
  {
    id: 1,
    title: "Existing Meeting",
    date: "2026-08-17",
  },
];

let nextId = 2;

// =========================
// Health Check
// =========================

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

// =========================
// GET all calendar events
// =========================

app.get("/api/calendar", (req, res) => {
  res.status(200).json(events);
});

// =========================
// POST create calendar event
// =========================

app.post("/api/calendar", (req, res) => {
  const { title, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({
      error: "Title and date are required",
    });
  }

  const newEvent = {
    id: nextId++,
    title,
    date,
  };

  events.push(newEvent);

  res.status(201).json(newEvent);
});

// =========================
// PUT update calendar event
// =========================

app.put("/api/calendar/:id", (req, res) => {
  const id = Number(req.params.id);

  const event = events.find((event) => event.id === id);

  if (!event) {
    return res.status(404).json({
      error: "Event not found",
    });
  }

  const { title, date } = req.body;

  if (title !== undefined) {
    event.title = title;
  }

  if (date !== undefined) {
    event.date = date;
  }

  res.status(200).json(event);
});

// =========================
// DELETE calendar event
// =========================

app.delete("/api/calendar/:id", (req, res) => {
  const id = Number(req.params.id);

  const eventIndex = events.findIndex((event) => event.id === id);

  if (eventIndex === -1) {
    return res.status(404).json({
      error: "Event not found",
    });
  }

  const deletedEvent = events.splice(eventIndex, 1)[0];

  res.status(200).json({
    message: "Event deleted successfully",
    event: deletedEvent,
  });
});

// =========================
// 404 Handler
// =========================

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

// =========================
// Start server
// =========================

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
