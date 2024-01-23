const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.query(
    'SELECT * FROM your_table_name',
    function(err, results, fields) {
        console.log(results); // 
        console.log(fields);
    }
)

connection.end();
