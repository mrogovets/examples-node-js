const fs = require("fs");

// Connect to local server
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URL page: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  // const myReadShort = fs.createReadStream(__dirname + "/index.html", "utf-8");
  // myReadShort.pipe(res);
  const obj = {
    model: "Audi",
    speed: "234.5",
    wheels: 4,
  };
  res.end(JSON.stringify(obj));
});

server.listen(3000, "127.0.0.1");
console.log("We are listening on port 3000");
