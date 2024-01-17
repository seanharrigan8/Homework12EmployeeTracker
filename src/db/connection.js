const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
password: 'AcesFullMike23',
database: 'employees'
});

connection.connect(error => {
    if (error) {
        console.error('Error occured while connecting to the database.' + error.stack);
        return; 
    }
    console.log('Connected to the database.');
});

module.exports = connection.promise();