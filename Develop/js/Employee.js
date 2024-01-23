

function displayEmployees() {
    const sql = `SELECT employee.id, employee first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    JOIN employee manager ON manager.id = employee.manager_id`;

db.query(sql, (err, results) => {
    if (err) throw err;
    console.table(results);
    const transformed = results.reduce((acc, { id, first_name, last_name }) => {
        acc[id] = `${first_name} ${last_name}`;
        return acc;
    }, {});
    console.log(transformed)
})