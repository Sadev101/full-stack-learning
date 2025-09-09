const prisma = require("./../prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const catchAsync = require("./../utils/catchAsync");

const registerUser = catchAsync(async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password)
    return res.status(400).json({ message: "failed" });

  const user = prisma.user.findUnique({
    where: { name },
  });
  if (user) {
    const hashedPassword = await bcrypt.hash(
      password,
      10,
      process.env.BCRYPT_SECRET
    );
    const token = jwt.sign({ email, name }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    req.user = { email, name };
  }

  res.status(201).json({ message: "success" });
});

const loginUser = (req, res) => {
  res.status(200).json({ message: "success" });
};

module.exports = { registerUser, loginUser };
