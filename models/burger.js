var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res)
        });
    },

    create: function(newBurger, cb) {
        orm.create("burgers", ["burger_name", "devoured"], [newBurger, false], function(res) {
            cb(res)
        });
    },
    // Comment
    update: function(id, cb) {
        orm.update(id, cb)
    }
};

module.exports = burger;
