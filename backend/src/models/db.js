const mysql = require('mysql2/promise');
const connection = mysql.createPool({
  host: `127.0.0.1`,
  user: `root`,
  password: `?Password123`,
  database: `flower_shop`
});

connection.query('SELECT 1')
  .then(() => {
    console.log("Connected to MySQL");
  })
  .catch(err => {
    console.error("Error connecting to MySQL", err);
  });

module.exports = connection;