const authService = require("../services/authService");
// signup
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authService.createUser(email, password);

    res.json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await authService.loginUser(email, password);
    res.json({
      success: true,
      message: "Login successful",
      data: userData,
    });
  } catch (error) {
    console.error(
      "Full Firebase login error:",
      error.response?.data || error.message
    );
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// username
exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.query.email;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await authService.getUserByEmail(email);

    res.json({
      success: true,
      message: "User fetched successfully",
      data: {
        uid: user.uid,
        email: user.email,
        name: user.displayName || null,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
