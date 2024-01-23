const connection = require('../config/connection');
require('inquirer');

const Employee = {
displayEmployees: async function () {
    const sql = `SELECT employee.id, employee first_name, employee.last_name, role.title, department.name AS department, role.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    JOIN employee manager ON manager.id = employee.manager_id`;

    try {
        const [rows, fields] = await connection.execute(sql);
        console.table(results);
    } catch (err) {
        console.log(err);
    }
    },
    
  
    //add employee function//
addEmployee: async function() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the first name of the employee you would like to add?',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name of the employee you would like to add?',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the role ID of the employee you would like to add?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manager ID of the employee you would like to add?',
        },
    ]); 
        try {
            const [rows, fields ] = await connection.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.firstName, answers.lastName, answers.roleId, answers.managerId]);
    console.log('Employee added successfully!');
         } catch (err) {
            console.log(err);
        }
    },
};
       
module.exports = Employee;