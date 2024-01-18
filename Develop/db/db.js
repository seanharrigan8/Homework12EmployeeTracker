const mysql = require('mysql2/promise');

const myconst mysql = require('mysql2/promise');

async function createDb() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });

  await connection.query(`CREATE DATABASE ${process.env.DB_NAME}`);

  await connection.end();
}

createDb();