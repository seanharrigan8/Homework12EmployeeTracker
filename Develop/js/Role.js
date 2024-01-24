const inquirer = require("inquirer");
const getConnection = require("../config/connection");

//Roles object with role functions
//display roles function
const Role = {
  displayRoles: async function (startPrompt) {
    const connection = await getConnection();
    try {
      const [rows, fields] = await connection.execute("SELECT * FROM role");
      console.log(rows);
      return rows;
    } catch (err) {
      console.log(err);
    } finally {
      startPrompt();
    }
  },

  //add role function//
  addRole: async function (startPrompt) {
    const connection = await getConnection();
    try {
      const departments = await connection.execute("SELECT * FROM department");
      const departmentChoices = departments[0].map((department) => {
        return {
          name: department.name,
          value: department.id,
        };
      });
      const role = await inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of the role?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary of the role?",
        },
        {
          type: "list",
          name: "department_id",
          message: "What department is the role in?",
          choices: departmentChoices,
        },
      ]);
      //
      await connection.execute(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [role.title, role.salary, role.department_id]
      );
      console.log("Role added!");
    } catch (err) {
      console.log(err);
    } finally {
      startPrompt();
    }
  },

  //update employee role function
  
  updateEmployeeRole: async function (startPrompt) {
    const connection = await getConnection();
    try {
      const employees = await connection.execute("SELECT * FROM employee");
      const employeeChoices = employees[0].map((employee) => {
        return {
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        };
      });
      const roles = await connection.execute("SELECT * FROM role");
      const roleChoices = roles[0].map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      });
      const employeeRole = await inquirer.prompt([
        {
          type: "list",
          name: "employee_id",
          message: "Which employee would you like to update?",
          choices: employeeChoices,
        },
        {
          type: "list",
          name: "role_id",
          message: "What is the employee's new role?",
          choices: roleChoices,
        },
      ]);

      await connection.execute("UPDATE employee SET role_id = ? WHERE id = ?", [
        employeeRole.role_id,
        employeeRole.employee_id,
      ]);
      console.log("Employee role updated!");
    } catch (err) {
      console.log(err);
    } finally {
      startPrompt();
    }
  },
};

module.exports = Role; //exporting the functions to be used in index.js
