const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router
  .route("/todos")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

module.exports = router;
