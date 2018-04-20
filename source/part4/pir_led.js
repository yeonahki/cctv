var wpi = require('wiringpi-node');

wpi.setup('wpi');

var inPin = 7;
var ledPin = 25;
var pir_state = true;

wpi.pinMode(inPin, wpi.INPUT);
wpi.pinMode(ledPin, wpi.OUTPUT);
wpi.digitalWrite(inPin, wpi.LOW);
wpi.ditialWrite(ledPin, wpi.LOW);

setInterval(function(){
	if(pir_state){
		if(wpi.digitalRead(inPin)){
			console.log('Detect Someone');
			pir_state = false;
			console.log('[LOCK] pir');
			wpi.digitalWrite(ledPin, wpi.HIGH);

			setTimeout(function(){
				pir_state = true;
				console.log('[UNLOCK] pir');
				wpi.digitalWrite(inPin, wpi.LOW);
				wpi.digitalWrite(ledPin, wpi.LOW);
			}, 10000);
		}else{
			console.log('not detect');
			wpi.digitalWrite(ledPin, wpi.LOW);
		}
	}
}, 1000);
