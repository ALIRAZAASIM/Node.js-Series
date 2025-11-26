const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs").promises;
const mongoose = require("mongoose");

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app")
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

// Middleware
app.use(express.urlencoded({ extended: false }));

// Async Logger Middleware
app.use(async (req, res, next) => {
  await fs.appendFile(
    "text.txt",
    `\n ${Date.now()}:${req.method}:${req.url}:${req.ip}`
  );
  next();
});

// -----------------------------
// Routes
// -----------------------------

// GET USER by ID (async DB version)
app.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (err) {
    return res.status(500).json({ message: "Invalid ID format", error: err });
  }
});

// UPDATE USER (PATCH)
app.patch("/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "User not found" });

    return res.json({ message: "updated", data: updated });
  } catch (err) {
    return res.status(500).json({ message: "Update failed", error: err });
  }
});

// DELETE USER
app.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: "User not found" });

    return res.json({ message: "deleted", data: deleted });
  } catch (err) {
    return res.status(500).json({ message: "Delete failed", error: err });
  }
});

// CREATE USER
app.post("/", async (req, res) => {
  const body = req.body;

  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });

    return res.status(201).json({ message: "success", data: result });
  } catch (err) {
    return res.status(500).json({ message: "Database error", error: err });
  }
});
app.use("/user", userRouter);
app.listen(port, () => console.log("server start"));
