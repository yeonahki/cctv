# 오탈자 목록
* operator.js 파일 이름 중복
p95 파일을 operator2.js로 변경

* p105 5번째 줄에서 오타 발생
werver -> server로 변경

* p109 실습파일 exec.js를 spawn.js 파일로 이름 변경

* p112 실습파일 exec.js를 express.js 파일로 이름 변경


* p146~147  ultra.js 소스코드에서 Line 21에서 오타 발생

`var timeStart = microtime-now();` 

▽▽▽

`var timeStart = microtime.now();`



* p149~150 ultra_led.js 소스코드에서 Line 23에서 오타 발생

`var timeStart = microtime-now();` 

▽▽▽

`var timeStart = microtime.now();`


* p179~180 mjpg-streamer 실행 명령어에서 오타 발생

`pi@raspberrypi:~/mjpg-streamer/mjpgstreamer$ ./mjpg_streamer -i "./input_uvc.so" -o "./output_https.so -w ./www"` 

▽▽▽

`pi@raspberrypi:~/mjpg-streamer/mjpgstreamer$ ./mjpg_streamer -i "./input_uvc.so -y" -o "./output_http.so -w ./www"`


`pi@raspberrypi:~/mjpg-streamer/mjpgstreamer$ ./mjpg_streamer -i "./input_uvc.so" -o "./output_https.so -w ./www" &` 

▽▽▽

`pi@raspberrypi:~/mjpg-streamer/mjpgstreamer$ ./mjpg_streamer -i "./input_uvc.so -y" -o "./output_http.so -w ./www" &`


`pi@raspberrypi:~/mjpg-streamer/mjpgstreamer$ ./mjpg_streamer -i "./input_uvc.so" -o "./output_https.so -p 8090 -w ./www"` 

▽▽▽

`pi@raspberrypi:~/mjpg-streamer/mjpgstreamer$ ./mjpg_streamer -i "./input_uvc.so -y" -o "./output_http.so -p 8090 -w ./www"`



* 185 이메일 보내기 mutt 명령어에서 오타 발생

`pi@raspberrypi:~$ echo "보내고자 하는 이메일 본문" | sudo mutt -s "이메일 제목" --[받는 사람 이메일 주소]` 

▽▽▽

`pi@raspberrypi:~$ echo "보내고자 하는 이메일 본문" | sudo mutt -s "이메일 제목" [받는 사람 이메일 주소]`
