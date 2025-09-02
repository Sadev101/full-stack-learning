const express = require("express");
const todoController = require("../controllers/todoController");
const protectedRoute = require("../middleware/protectedRoute");

const router = express.Router();

router
  .route("/todos")
  .get(protectedRoute, todoController.getAllTodos)
  .post(protectedRoute, todoController.createTodo);

module.exports = router;
