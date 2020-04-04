var mysql = require("mysql");
var connection;

if (process.env.newjaws_url) {
  connection = mysql.createConnection(process.env.newjaws_url);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "burgers_db"
  });
}


// console.log(process.env.JAWSDB_URL)

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
