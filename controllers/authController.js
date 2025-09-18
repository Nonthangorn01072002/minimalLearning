const authService = require("../services/authService");

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await authService.login(username, password);
    const token = authService.generateToken(user);

    res.cookie("minmalLearning", token, {
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000 * 24,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

function logout(req, res) {
  res.clearCookie("minmalLearning", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  res.status(200).json({ message: "Logout successful" });
}

module.exports = {
  login,
  logout,
};
