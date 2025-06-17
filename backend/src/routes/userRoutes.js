const express = require("express");
const { getAllUsers, getUserPassword } = require("../controllers/userController.js");

const router = express.Router();

router.post("/", getUserPassword);
router.get("/all", getAllUsers);


module.exports = router;