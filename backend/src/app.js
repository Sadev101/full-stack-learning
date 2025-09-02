const express = require("express");

const todoRouter = require("./routes/todoRoute");
const userRouter = require("./routes/userRoute");

const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

app.use("/api/v1", todoRouter);
app.use("/api/v1", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;
