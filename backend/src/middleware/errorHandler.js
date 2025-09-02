module.exports = (err, req, res, next) => {
  console.error(err);

  // default error
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Prisma error
  if (err.code === "P2025") {
    statusCode = 404;
    message = "Record not found";
  }

  // Zod validation error
  if (err.name === "ZodError") {
    statusCode = 400;
    message = err.errors.map((e) => e.message).join(", ");
  }

  res.status(statusCode).json({
    status: "error",
    message,
  });
};
