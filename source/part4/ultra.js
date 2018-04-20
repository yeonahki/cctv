var wpi = require('wiringpi-node');
var sleep = require('sleep');
var microtime = require('microtime');

wpi.setup('wpi');

var TRIG = 15;
var ECHO = 16;

wpi.pinMode(TRIG, wpi.OUTPUT);
wpi.pinMode(ECHO, wpi.INPUT);

function pulseIn(pin, state){
	var MAX_LOOPS = 1000000;
	var numloops = 0;

	while(wpi.digitalRead(pin) != state){
		if(numloops++ == MAX_LOOPS)
			return 0;
	}
	var timeStart = microtime.now();

	while(wpi.digitalRead(pin) == state){
		if(numloops++ == MAX_LOOPS)
			return 0;
	}
	return microtime.now() - timeStart;
}

setInterval(function(){
	wpi.digitalWrite(TRIG, wpi.LOW);
	sleep.usleep(2);
	wpi.digitalWrite(TRIG, wpi.HIGH);
	sleep.usleep(20);
	wpi.digitalWrite(TRIG, wpi.LOW);

	var duration = pulseIn(ECHO, wpi.HIGH);

	var distance = Math.floor(duration/58);
	console.log('distance : ' + distance + 'cm');
}, 1000)
