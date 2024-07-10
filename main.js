const http = require("http");
const fs = require("fs");
let server = http.createServer((req, res) => {
  fs.readFile("output.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Hello, world!");
      res.end("Hello, world!");
    } else {
      if (data.toString() === "") {
        console.log("Hello, world!");
        return res.end("Hello, world!");
      }
      console.log(data);
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is listening on the port");
});
