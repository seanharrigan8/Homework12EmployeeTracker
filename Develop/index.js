const mysql = require('mysql2');
const inquirer = require('inquirer');
const Role = require('./js/Role');
const Department = require('./js/Department');
const Employee = require('./js/Employee');
const connection = require('./config/connection');

const PORT = process.env.PORT || 3001;


async function start() {
    await startPrompt();
}
async function startPrompt() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }
]);

        switch (answers.start) {
            case "View All Departments":
                await Department.displayDepartments();
                startPrompt();
                break;
            case "View All Roles":
                await Role.displayRoles();
                startPrompt();
                break;
            case "View All Employees":
                await Employee.displayEmployees();
                startPrompt
                break;
            case "Add a Department":
                await Department.addDepartment();
                startPrompt();
                break;
            case "Add a Role":
                await Role.addRole();
                startPrompt();
                break;
            case "Add an Employee":
                await Employee.addEmployee();
                startPrompt();
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                startPrompt();
                break;
                case "View Salary":
                    await Salary.viewSalary();
                    startPrompt();
                    break;
            case "Exit":
                connection.end();
                return;
                
        }
     await start();  
        
    }
    start();