const db = require("./db");

const login = async (username_email, password) => {
  try {
    const rows = await db.query(
      "SELECT * FROM users WHERE (BINARY username = ? OR BINARY email = ?) AND password = ?",
      [username_email, username_email, password]
    );

    return rows[0];    
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

const register = async (username, email, password, role) => {
  try {
    await db.query(
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
      [username, email, password, role]
    );
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};


module.exports = { login, register };
