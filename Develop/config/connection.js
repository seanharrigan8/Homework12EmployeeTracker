const mysql = require('mysql2/promise');
require('dotenv').config();


console.log(process.env.DB_NAME);      // 'Employees'
console.log(process.env.DB_USER);      // 'root'
console.log(process.env.DB_PASSWORD);  // 'AcesFullMike23'
 
const dbConfig = {
    host: 'localhost',
    user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
};

async function initDatabse() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        
        console.log('Connected to database.');
        return connection;
    } catch (error) {
        console.error('Error connecting to database: ' + error.stack);
    }
}

module.exports = initDatabse;