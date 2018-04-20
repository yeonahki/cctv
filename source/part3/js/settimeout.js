var timeout = setTimeout(function(){
  console.log('do not run');
}, 3000);

setTimeout(function(){
  console.log('hello timeout');
}, 5000);

clearTimeout(timeout);
