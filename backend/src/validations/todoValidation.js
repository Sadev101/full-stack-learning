const { z } = require("zod");

const createTodoSchema = z.object({
  task: z.string().min(1, "Task is required"),
  completed: z.boolean().optional(),
});

const updateTodoSchema = z.object({
  task: z.string().min(1, "Task is required").optional(),
  completed: z.boolean().optional(),
});

module.exports = {
  createTodoSchema,
  updateTodoSchema,
};
