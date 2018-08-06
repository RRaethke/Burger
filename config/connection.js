// Set up MySQL Connection.
var mysql = require("mysql");

var Connection;
if (process.env.JAWS_URL) {
	Connection = mysql.createConnection(process.env.JAWS_URL);
} else {
	Connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		PORT: 3306,
		password: 'jack0317',
		database: 'burgers_db'
	});
}

// Make Connection.
Connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + Connection.threadId);
});

// Export Connection for our ORM to use.
module.exports = Connection;
