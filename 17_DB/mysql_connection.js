
// import mysql from "mysql2";

const mysql=require("mysql2")
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ruchika05",
  database: "youtube"
});

connection.connect((err) => {
  if (err) {
    console.log("Connection failed");
  } else {
    console.log("Connected to MySQL");
  }
});


//Running Queries from node.js
// connection.query("SELECT * FROM users", (err, results) => {
//   if (err) throw err;

//   console.log(results);
// });

//insert in to user

// const sql = "INSERT INTO users (username, password) VALUES ('david', '123456')";


// connection.query(sql, (err, result) => {
//   if (err) throw err;

//   console.log("User inserted");
// });



