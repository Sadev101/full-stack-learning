const express = require("express");
const todoRouter = require("./routes/todoRoute");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

app.use("/api/v1", todoRouter);

module.exports = app;
