// Dependencies 
const mysql = require("mysql");
const inquirer = require("inquirer");


//Connecting the database to js file
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_trackerDB"
});


connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    //create a function with a switch statement to let the user choose an option to; add and view departments, roles, and employees. (also update)
    start();
});

function start() {
    inquirer.prompt([{
        type: "list",
        name: "answer",
        message: "Would you like to Add, View or Update your employee tracker?",
        choices: [
            "Add",
            "View",
            "Update",
            "Exit"
        ]
    }]).then(function(response) {
        switch (response.answer) {
            case "Add":
                addOptions();
                break;
            case "View":
                viewOptions();
                break;
            case "Update":
                updateOptions();
                break;
            default:
                return;
        };
    });
};

function addOptions() {
    inquirer.prompt([{
        type: "list",
        name: "answer",
        message: "What would you like to add to your employee tracker?",
        choices: [
            "Department",
            "Role",
            "Employee",
            "Exit"
        ]
    }]).then(function(response) {
        switch (response.answer) {
            case "Department":
                addDepartment();
                break;
            case "Role":
                addRole();
                break;
            case "Employee":
                addEmployee();
                break;
            default:
                return;
        };
    });
};

function viewOptions() {
    inquirer.prompt([{
        type: "list",
        name: "answer",
        message: "What would you like to view in your employee tracker?",
        choices: [
            "Department",
            "Role",
            "Employee",
            "Exit"
        ]
    }]).then(function(response) {
        switch (response.answer) {
            case "Department":
                viewDepartment();
                break;
            case "Role":
                viewRole();
                break;
            case "Employee":
                viewEmployee();
                break;
            default:
                return;
        };
    });
};

function updateOptions() {
    inquirer.prompt([{
        type: "list",
        name: "answer",
        message: "What would you like to update in your employee tracker?",
        choices: [
            "Department",
            "Role",
            "Employee",
            "Exit"
        ]
    }]).then(function(response) {
        switch (response.answer) {
            case "Department":
                updateDepartment();
                break;
            case "Role":
                updateRole();
                break;
            case "Employee":
                updateEmployee();
                break;
            default:
                return;
        };
    });
};

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name of the department you would like to add?",
        //validate answer and return false if name is more than 30 characters
    }]).then(function(response) {
        connection.query("INSERT INTO department SET?", {
                name: response.name
            },
            function(err) {
                if (err) {
                    throw err;
                };
                console.log("You successfully added a new department!");
            });
        start();
        connection.end();
    })
};

function addRole() {
    connection.query("SELECT * FROM department", function(err, results) {
        if (err) {
            throw err;
        };

        inquirer.prompt([{
                    type: "rawlist",
                    name: "dptChoice",
                    choices: function() {
                        let dptArray = [];
                        for (let i = 0; i < results.length; i++) {
                            dptArray.push(results[i].name);
                        }
                        return dptArray;
                    },
                    message: "Which department would you like to add a new role?"
                },
                {
                    type: "input",
                    name: "title",
                    message: "What is the name of the role you want to add?"
                },
                {
                    type: "input",
                    name: "salary",
                    message: "What is the salary of this role?",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(function(response) {
                connection.query("INSERT INTO roles SET?", {
                    title: response.title,
                    salary: response.salary,
                });
                start();
            });
    });
};