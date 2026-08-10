const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Health route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Calendar API is running",
  });
});

// Calendar route
app.get("/api/calendar", (req, res) => {
  res.status(200).json({
    application: "Calendar App",
    description: "Calendar application backend",
    version: "1.0.0",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal Server Error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
