const inquirer = require('inquirer');
const getConnection = require('../config/connection');

//DISPLAYING dEPARTMENTS FUNCTION
     
async function displayDepartments(startPrompt) {
    const connection = await getConnection();
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM department');
        console.table(rows);
    } catch (err) {
        console.log(err);
    } finally {
        startPrompt();
    }
}

//add department
async function addDepartment(startPrompt) {
    const connection = await getConnection();
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
    finally {
        startPrompt();
    }
}

module.exports = { displayDepartments, addDepartment };  //exporting the functions to be used in index.js
