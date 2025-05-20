const express = require("express");
const { getAllFlowers } = require("../controllers/flowerController.js");

const router = express.Router();

router.get("/all", getAllFlowers);


module.exports = router;