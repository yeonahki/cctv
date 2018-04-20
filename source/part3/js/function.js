console.log('add1:', add1(3, 4));
//console.log('add2:', add2(3, 4)); // TypeError: add2 is not a function 

function add1(a, b){
  return a + b;
}

var add2 = function(a, b){
  return a + b;
}

console.log('add2:', add2(3, 4));
