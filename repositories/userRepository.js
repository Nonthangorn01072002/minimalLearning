const User = require("../models/user");

async function findUserByUsername(username) {
  return await User.findOne({ username });
}

async function findById(ownerId) {
  return await User.findById(ownerId);
}

async function createUser(userData) {
  const user = new User(userData);
  return await user.save();
}

module.exports = {
  findUserByUsername,
  createUser,
  findById
};
