var spawn = require('child_process').spawn;
var sp = spawn('ping', ['127.0.0.1', '-c', '5']);

sp.stdout.on('data', function(data){
  console.log('stdout: ', data.toString());
});

sp.stderr.on('data', function(data){
  console.log('stderr: ', data);
});

sp.on('exit', function(){
  console.log('exit');
});
