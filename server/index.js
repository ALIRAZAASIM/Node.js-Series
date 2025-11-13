const http = require("http");

const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${req.url}:new request recieved\n`;
  fs.appendFile("log.txt", log, () => {
    switch (req.url) {
      case "/":
        res.end("hello you are on home page.");
        break;
      case "/about":
        res.end("you are on about page");
      default:
        res.end("404 error");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server start");
});
