var wpi = require('wiringpi-node');
var pin = 25;
var isOn = 1;

wpi.setup('wpi');

wpi.pinMode(pin, wpi.OUTPUT);

setInterval(function(){
	if(isOn) {
		wpi.digitalWrite(pin, wpi.LOW);
		isOn = 0;	
	} else {
		wpi.digitalWrite(pin, wpi.HIGH);
		isOn = 1;			
	}
}, 1000);
