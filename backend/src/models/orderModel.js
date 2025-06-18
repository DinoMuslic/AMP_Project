const db = require("./db");

const getAllOrders = async () => {
  try {
    const orders = await db.query("SELECT full_name, address, phone, total_price, issued_at FROM orders");
    return orders[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

const postOrder = async (user_id, full_name, phone, address, total_price) => {
  try {
    await db.query(
      "INSERT INTO orders (user_id, full_name, phone, address, total_price) VALUES(?, ?, ?, ?, ?)",
      [user_id, full_name, phone, address, total_price]
    );
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

module.exports = { getAllOrders, postOrder };
