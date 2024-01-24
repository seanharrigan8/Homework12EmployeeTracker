const inquirer = require('inquirer');
const getConnection = require('../config/connection');

const Role = {
    getAll: async function(startPrompt) {
        const connection = await getConnection();
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM role');
        return rows;
        console.table(rows);
    } catch (err) {
        console.log(err);
    } finally {
        startPrompt();
    }
},

getById: async function(id) {
    const connection = await getConnection();
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM role WHERE id = ?', [id]);
        return rows[0];
        console.table(rows);
    }
    catch (err) {
        console.log(err);
    } finally {
        startPrompt();
    }
},
};

module.exports = Role;
     