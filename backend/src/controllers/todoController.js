const todoService = require("../services/todoService");
const todoValidation = require("../validations/todoValidation");
const { catchAsync } = require("../utils/catchAsync");
const { validateId } = require("../utils/validateId");

const getAllTodos = catchAsync(async (req, res) => {
  const todos = await todoService.getAllTodos();
  res.status(200).json({ data: todos });
});

const createTodo = catchAsync(async (req, res) => {
  const schema = todoValidation.createTodoSchema;
  const { task, completed } = schema.parse(req.body);
  const todo = await todoService.createTodo({ task, completed });
  res.status(201).json({ message: "success", data: todo });
});

const getTodo = catchAsync(async (req, res) => {
  const id = validateId(req.params.id);
  const todo = await todoService.getTodoById(id);
  res.status(200).json({ message: "success", data: todo });
});

const updateTodo = catchAsync(async (req, res) => {
  const schema = todoValidation.updateTodoSchema;
  const id = validateId(req.params.id);
  const { task, completed } = schema.parse(req.body);
  const todo = await todoService.updateTodo(id, { task, completed });
  res.status(200).json({ message: "success", data: todo });
});

const deleteTodo = catchAsync(async (req, res) => {
  const id = validateId(req.params.id);
  await todoService.deleteTodo(id);
  res.status(204).send();
});

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
