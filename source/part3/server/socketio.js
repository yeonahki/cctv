var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function(){
  console.log('Server is running');
});

app.get('/', function(request, response){
  response.sendFile(__dirname + '/socketio.html');
});

io.on('connection', function(socket){
  console.log('connect');
});
