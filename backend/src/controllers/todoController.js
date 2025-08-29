const getAllTodos = (req, res) => {
  res.status(200).json({ message: "success" });
};

const createTodo = (req, res) => {
  res.status(201).json({ message: "success" });
};

module.exports = {
  getAllTodos,
  createTodo,
};
