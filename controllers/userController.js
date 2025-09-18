const userService = require("../services/userService");
const RegisterDto = require("../dtos/registerDto");

async function register(req, res) {
  const registerDto = new RegisterDto(req.body);
  try {
    const user = await userService.register(registerDto.username, registerDto.email, registerDto.password);
    res.status(201).json({
      message: "Register successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  register,
};
