Socket Server var server = require('http').Server(app); 
Socket.IO var io = require('socket.io')(server); 
PostgreSQL var massive = require("massive"); var pg = require ("pg");`

var startExpress = function() { server.listen(config.express.port); db = app.get('db'); }