const inquirer = require('inquirer');
const getConnection = require('../config/connection');
const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');



//start prompt function
function startPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all departments', 'View all roles', 'Add employee', 'Add department', 'Add role', 'Update employee role', 'Exit'],
        },
    ])
        .then((answers) => {
            switch (answers.mainMenu) {
                case 'View all employees':
                    Employee.displayEmployees(startPrompt);
                    break;
                case 'View all departments':
                    Department.displayDepartments(startPrompt);
                    break;
                case 'View all roles':
                    Role.displayRoles(startPrompt);
                    break;
                case 'Add employee':
                    Employee.addEmployee(startPrompt);
                    break;
                case 'Add department':
                    Department.addDepartment(startPrompt);
                    break;
                case 'Add role':
                    Role.addRole(startPrompt);
                    break;
                case 'Update employee role':
                    Employee.updateEmployeeRole(startPrompt);
                    break;
                case 'Exit':
                    connection.end();
                    break;
                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
}

module.exports = { startPrompt };

