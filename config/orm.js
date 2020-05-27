const connection = require('./connection');

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table + " (";
        queryString += cols;
        queryString += ") VALUES (?);";

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: (table, objColVals, condition, cb) => {
        let queryString = "UPDATE " + table + " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;