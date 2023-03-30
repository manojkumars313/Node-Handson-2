const express = require("express");
const app = express();
const port = 9090;

// Route for '/api'
app.get("/api", (req, res) => {
  res.send("This is the API route");
});

// Route for '/main'
app.get("/main", (req, res) => {
  res.send("This is the main route");
});

// Route for explaining what is Express
app.get("/", (req, res) => {
  res.send(
    "Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for building single-page, multi-page, and hybrid web applications."
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}....... `);
  // Route for explaining what is Express
  app.get("/", (req, res) => {
    res.send(
      "Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for building single-page, multi-page, and hybrid web applications."
    );
  });
});
