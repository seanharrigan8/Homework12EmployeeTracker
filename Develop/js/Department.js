const inquirer = require('inquirer');
const connection = require('../config/connection');


//DISPLAYING dEPARTMENTS FUNCTION
     
async function displayDepartments() {
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM department');
        console.table(rows);
        
    } catch (err) {
        console.log(err);
    }
}

//add department
async function addDepartment() {
    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department you would like to add?',
    }]);
    try {
        const [rows, fields] = await connection.execute('INSERT INTO department (name) VALUES (?)', [answers.departmentName]);
        console.log('Department added successfully!');
        mainMenu();
    } catch (err) {
        console.log(err);
    }
}

module.exports = { displayDepartments, addDepartment };  //exporting the functions to be used in index.js
