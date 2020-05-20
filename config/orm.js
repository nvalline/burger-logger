const connection = require('./connection');

// helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
    let array = [];

    for (const key in obj) {
        let value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }

    return array.toString();
}

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: (table, cols, vals, cb) => {
        const queryString = "INSERT INTO " + table + " (";
        queryString += cols.string();
        queryString += ") VALUES (?);";

        console.log(`Query String: ${queryString}`)

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: (table, objColVals, condition, cb) => {
        const queryString = "UPDATE " + table + " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(`Query String: ${queryString}`)

        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;