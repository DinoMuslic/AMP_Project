const Order = require("../models/orderModel");

const getAllOrders = async(req, res) => {
  try {
    const orders = await Order.getAllOrders();
    res.status(201).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Server error" });
  }
}

const postOrder = async (req, res) => {
  try {
    const { user_id, full_name, phone, address, total_price } = req.body;
    await Order.postOrder(user_id, full_name, phone, address, total_price);
    res.status(201).json({ message: "Order placed successfully"});
  } catch (error) {
    console.error("Error sending order:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllOrders, postOrder };