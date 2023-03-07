const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const port = 3000;

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "4PIN2_glosowanie"
});

app.listen(port, () => {
  console.log("Server works");
});

// ==============

function sqlSelectAll() {
  connection.connect();

  const queryText = "SELECT * FROM kandydaci;"
  connection.query(queryText, (error, results, fields) => {
  	if (error) throw error;
  	console.log(results);
  })
}

sqlSelectAll();