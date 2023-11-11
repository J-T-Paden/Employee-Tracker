const mysql = require('mysql2');
const connection = mysql.createConnection({
host: 'localhost',
port: 3001,
user: 'root',
password: 'cwiggly22!',
database: 'employees_db'
});

module.exports = connection;