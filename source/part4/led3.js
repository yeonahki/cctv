var wpi = require('wiringpi-node');
var pin = 25;
var isOn = 1;

wpi.setup('wpi');

wpi.pinMode(pin, wpi.OUTPUT);


var i = 0;
var t = setInterval(function(){
	if(isOn){
		wpi.digitalWrite(pin, wpi.LOW);
		isOn = 0;
	}else{
		wpi.digitalWrite(pin, wpi.HIGH);
		isOn = 1;
	}
	i++;
	console.log(i);
	if(i==10){
		clearInterval(t);
	}
}, 1000);
