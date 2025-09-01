import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json({ data: { todos } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "The error occurred in our server" });
  }
};

const createTodo = async (req, res) => {
  const todo = await prisma.todo.create({
    data: { email, name, password },
  });
  res.status(201).json({ message: "success", todo });
};

module.exports = {
  getAllTodos,
  createTodo,
};
