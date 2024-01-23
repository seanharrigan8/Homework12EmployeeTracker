const mysql2 = require('mysql2');
const connection = require('../config/connection');

const Role = {
    getAll: function(callback) {

        connection.query('SELECT * FROM role', function(err, results, fields) {
            if (err) throw err;
            callback(results);
    });
},
// Rest of the code...
//get one role by id
getById: function(id, callback) {
    connection.query('SELECT * FROM role WHERE id = ?', [id], function(err, results, fields) {
        if (err) throw err;
        callback(results[0]);
    });
},
};


module.exports = Role;