var wpi = require('wiringpi-node');

wpi.setup('wpi');

var pin = 1;
var num = 6;
var isRight = true;

wpi.softPwmCreate(pin, 0, 100);

setInterval(function(){
	wpi.softPwmWrite(pin, num);
	if(isRight){
		num += 1;
	}else{
		num -= 1;
	}

	if(num == 24){
		isRight = false;
	}
	if(num == 6){
		isRight = true;
	}
}, 100);
