// Dependencies 
const mysql = require("mysql");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");

//Connecting the database to js file
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee-trackerDB"
});


connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    //create a function with a switch statement to let the user choose an option to; add and view departments, roles, and employees. (also update)
    userOption();
});

function userOption() {
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