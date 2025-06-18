const db = require("./db");

const getAllFlowers = async () => {
  try {
    const rows = await db.query("SELECT * FROM flowers");
    return rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

module.exports = { getAllFlowers };
