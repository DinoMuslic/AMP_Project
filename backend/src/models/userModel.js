const db = require("./db");

const getUserByUsernameOrEmail = async username_email => {
  try {
    const rows = await db.query(
      "SELECT * FROM users WHERE username LIKE ? OR email LIKE ?",
      [username_email, username_email]
    );
    return rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

const getUserPassword = async username_email => {
    try {
    const rows = await db.query(
      "SELECT password FROM users WHERE username LIKE ? OR email LIKE ?",
      [username_email, username_email]
    );
    return rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}

module.exports = { getUserByUsernameOrEmail, getUserPassword };
