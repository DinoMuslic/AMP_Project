const express = require("express");
const { getAllOrders, postOrder } = require("../controllers/orderController.js");

const router = express.Router();

router.get("/all", getAllOrders);
router.post("/", postOrder);


module.exports = router;