const orm = require('../config/orm');

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", result => cb(result));
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, result => cb(result));
    },

    updateOne: (condition, cb) => {
        orm.updateOne("burgers", "devoured=true", "id=" + condition, result => cb(result));
    }
};

module.exports = burger;