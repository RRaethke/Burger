// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWS_URL) {
	connection = mysql.createconnection(process.env.JAWS_URL);
} else {
	connection = mysql.createconnection({
		host: 'localhost',
		user: 'root',
		PORT: 3306,
		password: 'jack0317',
		database: 'burgers_db'
	});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our orm to use.
module.exports = connection;
