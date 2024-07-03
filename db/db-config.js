//get the client
const mysql = require("mysql2");
require("dotenv").config();

// create the connection to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1102",
  database: "cars-api",
});

module.exports = pool;
