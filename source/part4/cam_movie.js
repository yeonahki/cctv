var wpi = require('wiringpi-node');
var exec = require('child_process').exec;

wpi.setup('wpi');

var pin = 29;
var result = 0;
var i = 1;

wpi.pinMode(pin, wpi.INPUT);

setInterval(function(){
	result = wpi.digitalRead(pin);

	if(result){
		console.log('Record a video');
		exec('raspistill -o /home/pi/' + i + '.h264');
		i++;
	} 
}, 500);
