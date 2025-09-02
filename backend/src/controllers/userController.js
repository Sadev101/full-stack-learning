const registerUser = (req, res) => {
  res.status(200).json({ message: "success" });
};

const loginUser = (req, res) => {
  res.status(200).json({ message: "success" });
};

module.exports = { registerUser, loginUser };
