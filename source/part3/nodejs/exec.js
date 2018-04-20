var exec = require('child_process').exec;

exec('touch new_file');

exec('date', function(error, stdout, stderr){
  console.log('date command');
  console.log(error, stdout, stderr);
});

exec('node fs.js', function(error, stdout, stderr){
  console.log('node fs.js');
  console.log(stdout);
});
