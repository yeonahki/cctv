var wpi = require('wiringpi-node');

wpi.setup('wpi');

var inPin = 7;
var pir_state = true;

wpi.pinMode(inPin, wpi.INPUT);
wpi.digitalWrite(inPin, wpi.LOW);


setInterval(function(){
	if(pir_state){
		if(wpi.digitalRead(inPin)){
			console.log('Detect Someone');
			pir_state = false;
			console.log('[LOCK] pir');
			
			setTimeout(function(){
				pir_state = true;
				console.log('[UNLOCK] pir');
				wpi.digitalWrite(inPin, wpi.LOW);
			}, 10000);
		}
		else{
			console.log('not detect');
		}
	}
}, 1000);
