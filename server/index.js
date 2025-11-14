/// without using express.js framework

// const http = require("http");

// const fs = require("fs");

// const url = require("url");

// const myServer = http.createServer((req, res) => {
//   const log = `${req.url} new request recieved\n`;
//   const myUrl = url.parse(req.url, true);
//   fs.appendFile("log.txt", log, () => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "get") res.end("this is homepage");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`hi ${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_qurry;
//         res.end(`here areyour search,${search}`);
//         break;
//       case "signup":
//         if (req.method === "get") {
//           res.end("this is signup page");
//         } else if (req.method === "post ") {
//           res.end("successful");
//         }
//       default:
//         res.end("404 error");
//     }
//   });
// });

// /*BY using express js framework /*

const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello from home page!");
});

app.get("/about", (req, res) => {
  return res.send(
    "this is about page" + "hi" + req.query.name + "age" + req.query.age
  );
});

app.listen(8000, () => {
  console.log("server start");
});

// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//   console.log("server start");
// });
