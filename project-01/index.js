const express = require("express");
const app = express();
const port = 8000;

// Load JSON file
const users = require("./MOCK_DATA.json");

// Route to return users data

app.get("/api/users", (req, res) => {
  return res.json(users);
});

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
