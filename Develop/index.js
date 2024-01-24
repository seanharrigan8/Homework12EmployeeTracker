const mysql = require('mysql2');
const inquirer = require('inquirer');
const Role = require('./js/Role');
const Department = require('./js/Department');
const Employee = require('./js/Employee');
const connection = require('./config/connection');
const { startPrompt } = require('./js/prompt');

const PORT = process.env.PORT || 3001;


//menu start prompt
async function start() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['View all employees', 'View all departments', 'View all roles', 'Add employee', 'Add department', 'Add role', 'Update employee role', 'Exit'],
    });
//menu options
    switch (action) {
        case 'View all employees':
            await Employee.displayEmployees(startPrompt);
            break;
        case 'View all departments':
            await Department.displayDepartments(startPrompt);
            break;
        case 'View all roles':
            await Role.displayRoles(startPrompt);
            break;
        case 'Add employee':
            await Employee.addEmployee(startPrompt);
            break;
        case 'Add department':
            await Department.addDepartment(startPrompt);
            break;
        case 'Add role':
            await Role.addRole(startPrompt);
            break;
        case 'Update employee role':
            await Role.updateEmployeeRole(startPrompt);
            break;
        case 'Exit':
            connection.end();
            break;
        default:
            console.log(`Invalid action: ${answer.action}`);
            break;
    }
}
start();