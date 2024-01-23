const mysql = require('mysql2');
const inquirer = require('inquirer');
const Role = require('./js/Role');
const Department = require('./js/Department');
const Employee = require('./js/Employee');
const connection = require('./config/connection');

const PORT = process.env.PORT || 3001;

//Using Role Object
Role.getAll(function (roles) {
    console.log(roles);
});

Role.getById(1, function (role) {
    console.log(role);
});

// Close the connection
connection.end();