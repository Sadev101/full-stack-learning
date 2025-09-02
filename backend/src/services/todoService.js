const prisma = require("../prisma/client");

async function getAllTodos() {
  return await prisma.todo.findMany();
}

async function createTodo(data) {
  return await prisma.todo.create(data);
}

async function getTodoById(id) {
  return await prisma.todo.findUnique({ where: { id } });
}

async function updateTodo(id, data) {
  return await prisma.todo.update({
    where: { id },
    data,
  });
}

async function deleteTodo(id) {
  return await prisma.todo.delete({ where: { id } });
}

module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
