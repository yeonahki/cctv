var count = 0;

var interval = setInterval(function(){
  console.log('3 hello');
  count++;

  if(count == 3)
    clearInterval(interval);

}, 1000);

setInterval(function(){
  console.log('loop hello');	
}, 1000);
