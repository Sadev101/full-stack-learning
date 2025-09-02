// config/jwt.js
module.exports = {
  secret: process.env.JWT_SECRET,
  expiresIn: "24h", // token will expire in 24 hours
};
