const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
require('dotenv').config();


console.log(process.env.DB_NAME);      // 'Employees'
console.log(process.env.DB_USER);      // 'root'
console.log(process.env.DB_PASSWORD);  // 'AcesFullMike23'

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

async function initDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connected to database.');
        return sequelize;
    } catch (error) {
        console.error('Error connecting to database: ' + error);
    }
}


module.exports = initDatabse;