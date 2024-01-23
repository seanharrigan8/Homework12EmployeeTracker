const mysql2 = require('mysql2');
const connection = require('../config/connection');

const Role = {
    getAll: async function() {
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM role');
        return rows;
        console.table(rows);
    } catch (err) {
        console.log(err);
    }
},

getById: async function(id) {
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM role WHERE id = ?', [id]);
        return rows[0];
        console.table(rows);
    }
    catch (err) {
        console.log(err);
    }
},
};

module.exports = Role;
     