const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;


// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Execute a SQL query
connection.query(
    'SELECT * FROM your_table',
    function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

// Close the connection
connection.end();