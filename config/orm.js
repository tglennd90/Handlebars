// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  all: function(table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  create: function(table, cols, vals, cb) {
    var dbQuery = "INSERT INTO ?? (??, ??) VALUES(?, ?)";

    connection.query(dbQuery, [table, cols[0], cols[1], vals[0], vals[1]], function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  update: function(id, cb) {
    var dbQuery = "UPDATE burgers SET devoured = true WHERE id = ?";

    connection.query(dbQuery, [id], function(err, data) {
      if (err) throw err;
      cb();
    });
  },

};

module.exports = orm;
