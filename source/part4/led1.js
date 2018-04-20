var wpi = require('wiringpi-node');

wpi.setup('wpi');

wpi.pinMode(25, wpi.OUTPUT);

wpi.digitalWrite(25, wpi.LOW);
