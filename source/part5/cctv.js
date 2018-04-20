var exec = require('child_process').exec;
var fs = require('fs');
var wpi = require('wiringpi-node');

var mode = 'security';
var siren = false;
var email = false;
var pir = false;
var position = 0;

var PIR_PIN = 15;
var MOTOR_PIN = 16;

initDevice(PIR_PIN, MOTOR_PIN);
setServo(MOTOR_PIN, 0);

// 웹서버 관련 소스
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// index.html로 라우팅 설정
app.get ('/', function(req, res){
	res.sendFile(__dirname + '/cctv.html');
});

// 서버 구동, http://IP주소
server.listen(80, function(){
	console.log('server is running');
});

// 클라이언트 접속 시, 이벤트 등록
io.on('connection', function(socket){
	socket.on('streaming', function(){
		mode = 'streaming';
		camera.start();	
	});
	
	socket.on('security', function(){
		mode = 'security';
		camera.stop();
	});
	
	socket.on('siren', function(data){
		siren = data;
	});

	socket.on('email', function(data){
		email = data;
	});

	socket.on('pan_left', function(){
		if(position > -60)
			position -= 10;
		
		setServo(MOTOR_PIN, position);
	});
	
	socket.on('pan_right', function(){
		if(position < 60)
			position += 10;
		
		setServo(MOTOR_PIN, position);
	});
});

var RaspiCam = require("raspicam");
var camera = new RaspiCam({
	mode:"timelapse", 
	output:"/home/pi/cctv/image.jpg",
	timeout:0,
	quality:50,
	vstab:true,
	width:300,
	height:300,
	encoding: "jpg",
	timelapse:500,
	nopreview:true 
});
		
camera.on("read", function(err, timestamp, filename){
	fs.readFile("/home/pi/cctv/image.jpg", function(err, data) {
		if (!err){ 
			var buffer = new Buffer(data).toString('base64');
			io.emit('cctv_img', buffer);
		}
	});
			
	if(mode == "security"){
		camera.stop();
		
		if(email)
			exec('echo "DetectTime: $(date "+%F %A %X") " | sudo mutt -s "[CCTV Report] Detect Anything" -a "/home/pi/cctv/image.jpg" -- yunjai.lee.82@gmail.com');
		
		if(siren){
			exec('espeak "침입자 발생"');
			exec('mpg321 /home/pi/cctv/siren.mp3');	
		}
	}
});

setInterval(function(){
	pir = wpi.digitalRead(PIR_PIN);
	if(pir && mode == 'security'){
		camera.start();
	}
	
	io.emit('info', {pir:pir, mode:mode});
}, 10000);

process.on('SIGINT', function () {
	exec('pkill raspistill');	
	process.exit();
});

//////////////////////////////////////////////////////////////////////function
function initDevice(pir_pin, servo_pin){
	wpi.setup('wpi');
	wpi.pinMode(pir_pin, wpi.INPUT);
	wpi.pinMode(servo_pin, wpi.SOFT_PWM_OUTPUT);
};

function setServo(pin, degree){
	wpi.softPwmWrite(pin, (Math.floor(degree/10) + 15)); 
	setTimeout(function(){
		wpi.softPwmWrite(pin, 0); 
	}, 500);
};
