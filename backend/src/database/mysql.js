const mysql = require("mysql2");

const pool = mysql.createPool({
  user: "root",
  password: "34544615",
  database: "db_requeriment",
  host: "localhost",
  port: 3306,
});

exports.pool = pool;
