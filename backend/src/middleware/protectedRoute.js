const protectedRoute = (req, res, next) => {
  if (!req.headers?.authorization) {
    console.log(req.headers?.authorization);
    res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = protectedRoute;
