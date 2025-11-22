const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

// Load JSON file
const users = require("./MOCK_DATA.json");

// Route to return users data

// app.get("/api/users", (req, res) => {
//   return res.json(users);
// });

//middleware to handle query parameters
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  fs.appendFile(
    "text.txt",
    `\n ${Date.now()}:${req.method}:${req.url}:${req.ip}`,
    (err, data) => {
      next();
    }
  );
});

//route to handle get request with query parameters

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: " pending " });
  })

  .delete((req, res) => {
    return res.json({ status: " pending " });
  });

app.post("/api/users", (req, res) => {
  return res.json({ status: " pending " });
});

app.listen(port, () => console.log("server start"));
