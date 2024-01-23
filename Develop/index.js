const mysql = require('mysql2');
const inquirer = require('inquirer');
const Role = require('./js/Role');
const Department = require('./js/Department');
const Employee = require('./js/Employee');
const connection = require('./config/connection');

const PORT = process.env.PORT || 3001;


async function startPrompt() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }
]);

        switch (start) {
            case "View All Departments":
                await Department.displayDepartments();
                break;
            case "View All Roles":
                await Role.displayRoles();
                break;
            case "View All Employees":
                await Employee.displayEmployees();
                break;
            case "Add a Department":
                await Department.addDepartment();
                break;
            case "Add a Role":
                await Role.addRole();
                break;
            case "Add an Employee":
                await Employee.addEmployee();
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                break;
                case "View Salary":
                    await Salary.viewSalary();
                    break;
            case "Exit":
                connection.end();
                break;
        }
        startPrompt();
        
    }
    startPrompt();
   