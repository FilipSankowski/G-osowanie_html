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
  database: "glosowanie"
});

app.listen(port, () => {
  console.log("Server works");
});

sqlConnection();
// ==============

function sqlConnection() {
  connection.connect();

  app.get('/selectAll', (req, res) => {
    const queryText = "SELECT * FROM kandydaci;"

    connection.query(queryText, (error, results, fields) => {
  	  if (error) throw error;
      res.send(results);
    });

  });

  app.get('/insertVote/:value', (req, res) => {
    const value = req.params.value;
    console.log(value);
  })
};