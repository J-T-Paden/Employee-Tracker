const inquirer = require('inquirer')
const mysql = require('mysql2')
const connection = require('./config/connections');

const promptUser = () => {
    inquirer.prompt([
        {
        name: 'choices',
        type: 'list',
        message: 'Please select an option:',
        choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'View All Employees By Department',
            'View Department Budgets',
            'Update Employee Role',
            'Update Employee Manager',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Remove Employee',
            'Remove Role',
            'Remove Department',
            'Exit'
            ]
        }
    ])
};