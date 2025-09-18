const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");
const jwt = require("jsonwebtoken");

async function login(username, password) {
  const user = await userRepository.findUserByUsername(username);
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  return user;
}

function generateToken(user) {
  const payload = {
    userId: user._id,
    username: user.username,
  };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
}

module.exports = {
  login,
  generateToken,
};
