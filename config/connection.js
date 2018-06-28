var mysql = require('mysql');

var connection;
if (process.env.JAWS_URL) {
	connection = mysql.createConnection(process.env.JAWS_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		PORT: 8080,
		password: 'jack0317',
		database: 'burgers_db'
	});
}


connection.connect(function(err){
	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connected as id: '+ connection.threadId);
});

module.exports = connection;