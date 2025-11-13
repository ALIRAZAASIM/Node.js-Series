const http = require("http");

const fs = require("fs");

const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${req.url} new request recieved\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, () => {
    switch (myUrl.pathname) {
      case "/":
        res.end("hello you are on home page.");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`hi ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_qurry;
        res.end(`here areyour search,${search}`);
      default:
        res.end("404 error");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server start");
});
