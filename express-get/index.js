const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is home");
});

app.get("/news", (req, res) => {
  res.send("This is news");
});

app.get("/news/:name/:id", (req, res) => {
  res.send(`ID is ${req.params.name} ${req.params.id}`);
});

app.listen(3000);
