
 var app = require('express')();
 var http = require('http').Server(app);
 var io = require('socket.io')(http);
 
 app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html'); 
 });
 
 io.sockets.on('connection', function(socket){
    socket.on('chat message', function(msg){
	 socket.broadcast.emit('message', 'Another client has just connected');	 
	 socket.broadcast.emit('chat message', msg);
	 socket.on(little_newbie, function(username){
		 socket.username = username;
	     });
	 });
 });
 
 http.listen(3000, function(){
	 console.log('listening in *:3000');
 });