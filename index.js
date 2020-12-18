const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/about", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render("about-success", { data: req.body });
});

app.get("/news/:id", (req, res) => {
  const obj = {
    title: "News",
    id: 3,
    paragraphs: ["Paragraph", "text/plain", "numbers: 2, 4, 6", 99],
  };
  console.log(req.query);
  res.render("news", { newsId: req.params.id, obj: obj });
});

app.listen(3000);
