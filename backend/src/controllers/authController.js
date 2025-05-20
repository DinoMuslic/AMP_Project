const Auth = require("../models/authModel.js");
const User = require("../models/userModel.js");
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const usernameEmail = req.body.username_email;
    const password = req.body.password;
    const hash = await User.getUserPassword(usernameEmail);

    if(hash.length == 0) {
      res.status(401).json({ message: "Wrong credentials" });
      return;
    }

    const isMatching = await bcrypt.compare(password, hash[0].password);

    const user = await Auth.login(usernameEmail, hash[0].password);
    user.length == 0 || !isMatching ? res.status(401).json({ message: "Wrong credentials" }) : res.status(201).json({ message: "Successfully logged in"});
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await Auth.register(username, email, hashedPassword, "regular");
    res.status(201).json({ message: "Successfully registered" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { login, register }