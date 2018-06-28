var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	PORT: 8080,
	password: 'jack0317',
	database: 'burgers_db'
});

connection.connect(function(err){
	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connected as id: '+ connection.threadId);
});

module.exports = connection;