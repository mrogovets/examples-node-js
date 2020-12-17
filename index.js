const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/news/:id", (req, res) => {
  const obj = {
    title: "News",
    id: 3,
    paragraphs: ["Paragraph", "text/plain", "numbers: 2, 4, 6", 99],
  };
  res.render("news", { newsId: req.params.id, obj: obj });
});

app.listen(3000);
