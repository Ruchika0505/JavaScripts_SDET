//postgres

import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "ruchika0505",
});

client.connect();


client.query("SELECT * FROM employees;", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    console.log(res.rows);
  }
  client.end();
});


// import pkg from "pg";
// const { Client } = pkg;

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "ruchika0505",
// });

// await client.connect();

// const res = await client.query("SELECT * FROM employees");
// console.log(res.rows);

// await client.end();