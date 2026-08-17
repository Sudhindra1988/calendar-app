const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

const calendarEvents = [];

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
  });
});

app.get("/api/calendar", (req, res) => {
  res.json({
    message: "Calendar API is working",
  });
});

app.post("/api/calendar", (req, res) => {
  const { title, date } = req.body;

  const newEvent = {
    id: calendarEvents.length + 1,
    title,
    date,
  };

  calendarEvents.push(newEvent);

  res.status(201).json(newEvent);
});

app.put("/api/calendar/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const event = calendarEvents.find((event) => event.id === id);

  if (!event) {
    return res.status(404).json({
      error: "Event not found",
    });
  }

  const { title, date } = req.body;

  event.title = title;
  event.date = date;

  res.status(200).json(event);
});
app.delete("/api/calendar/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const eventIndex = calendarEvents.findIndex((event) => event.id === id);

  // Event does not exist
  if (eventIndex === -1) {
    return res.status(404).json({
      error: "Event not found",
    });
  }

  // Remove the event
  const deletedEvent = calendarEvents.splice(eventIndex, 1)[0];

  // Return deleted event
  res.status(200).json({
    message: "Event deleted successfully",
    event: deletedEvent,
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;