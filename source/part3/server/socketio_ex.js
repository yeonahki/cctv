var exec = require('child_process').exec;
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function(){
  console.log('Server is running');
});

app.get('/', function(request, response){
  response.sendFile(__dirname + '/socketio_ex.html');
});

io.on('connection', function(socket){
  console.log('connect');

  socket.on('event1', function(){
    console.log('receive event(1)');  
  });
  
  socket.on('event2', function(data){
    console.log('receive event(2): ', data);

    exec('date +%H:%M:%S', function(error, stdout, stderr){
      socket.emit('event3', stdout);
    });
  });
});


var count = 0;
setInterval(function(){
  count++;
  io.emit('event_to_all', count);
}, 1000);
