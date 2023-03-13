const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "blog",
});

con.connect((err) => 

{
  if (err) throw err;
  console.log("Connnected to Database");
});

module.exports = con;
