const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");

async function register(username, email, password) {
  const existingUser = await userRepository.findUserByUsername(username);
  if (existingUser) {
    throw new Error("Username already taken");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userRepository.createUser({
    username,
    email,
    password: hashedPassword,
  });
  return newUser;
}

module.exports = {
  register,
};
