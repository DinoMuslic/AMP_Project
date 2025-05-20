const express = require("express");
const { getUserByUsernameOrEmail, getUserPassword } = require("../controllers/userController.js");

const router = express.Router();

router.post("/", getUserPassword);


module.exports = router;