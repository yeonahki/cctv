var wpi = require('wiringpi-node');

wpi.setup('wpi');

var pin = 1;
var num = 6; // var num = 60
var isRight = true;
wpi.pinMode(pin, wpi.PWM_OUTPUT);
wpi.pwmSetMode(wpi.PWM_MODE_MS);
wpi.pwmSetClock(1920); // wpi.pwmSetClock(192);
wpi.pwmSetRange(200);  // wpi.pwmSetRange(2000);

setInterval(function(){
	wpi.pwmWrite(pin, num);
	if(isRight){
		num += 1;
	} else{
		num -= 1;
	}

	if(num == 24){   // if(num == 240){
		isRight = false;
	}
	if(num == 5){    // if(num == 60){
		isRight = true;
	}
}, 100);
