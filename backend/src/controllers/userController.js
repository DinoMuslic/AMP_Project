const User = require("../models/userModel.js");

const getUserByUsernameOrEmail = async (req, res) => {
  try {
    const usernameEmail = req.body.username_email;
    const user = await User.getUserByUsernameOrEmail(usernameEmail);
    user.length > 0 ? res.status(201).json(user) : res.status(401).json({ message: "Wrong credentials" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const getUserPassword = async (req, res) => {
  try {
    const usernameEmail = req.body.username_email;
    const password = await User.getUserPassword(usernameEmail);
    res.status(201).json({message: "Ok"});
    return password;
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getUserByUsernameOrEmail, getUserPassword }