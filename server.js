const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// In-memory calendar events
let events = [];
let nextId = 1;

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

// GET all events
app.get("/api/calendar", (req, res) => {
  res.status(200).json(events);
});

// POST create event
app.post("/api/calendar", (req, res) => {
  const { title, date } = req.body;

  const event = {
    id: nextId++,
    title,
    date,
  };

  events.push(event);

  res.status(201).json(event);
});

// PUT update event
app.put("/api/calendar/:id", (req, res) => {
  const id = Number(req.params.id);

  const event = events.find((event) => event.id === id);

  if (!event) {
    return res.status(404).json({
      error: "Event not found",
    });
  }

  event.title = req.body.title;
  event.date = req.body.date;

  res.status(200).json(event);
});

// DELETE event
app.delete("/api/calendar/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = events.findIndex((event) => event.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Event not found",
    });
  }

  const deletedEvent = events.splice(index, 1)[0];

  res.status(200).json(deletedEvent);
});

// Start server
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Calendar App running on http://localhost:3000");
  });
}

module.exports = app;
