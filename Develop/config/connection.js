const mysql = require('mysql2/promise');
require('dotenv').config();

async function getConnection() {
const connection = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
 return connection;
}

async function testConnection() {
    const connection = await getConnection();
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM your_table_name');
        console.log(rows);
        console.log(fields);
    } catch (err) {
        console.error('An error occurred while executing the query');
        console.error(err);
    } finally {
        await connection.end();
    }
}

module.exports = getConnection;