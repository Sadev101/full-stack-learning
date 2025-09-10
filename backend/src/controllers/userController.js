const prisma = require("./../prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const catchAsync = require("./../utils/catchAsync");

const registerUser = catchAsync(async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password)
    return res.status(400).json({ message: "failed" });

  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (user) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const token = jwt.sign(
    { id: newUser.id, role: newUser.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  res.status(201).json({
    message: "success",
    user: { id: newUser.id, email: newUser.email, name: newUser.name },
    token,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "fail" });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: "fail" });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) return res.status(404).json({ message: "fail" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  res.status(200).json({
    message: "success",
    user: { id: user.id, email: user.email, name: user.name },
    token,
  });
});

module.exports = { registerUser, loginUser };
