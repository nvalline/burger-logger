const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
};

connection.connect(err => {
    if (err) {
        console.log(`Error connecting: ${err.stack}`)
        return;
    };

    console.log(`Connected by id ${connection.threadId}`)
});

module.exports = connection;