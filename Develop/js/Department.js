

function addDepartment() {
    inquirer.prompt([{
        type: 'input',

        name: 'departmentName',
        message: 'What is the name of the department you would like to add?',

    }]).then(function (data)
{
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [data.departmentName];

    db.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log('Department added successfully!');
        mainMenu();
    });
}