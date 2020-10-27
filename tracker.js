// Dependencies 
const mysql = require("mysql");
const inquirer = require("inquirer");

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
        switch (response.name) {
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
        }
    })
};