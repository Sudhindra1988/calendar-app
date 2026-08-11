const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

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

module.exports = app;
