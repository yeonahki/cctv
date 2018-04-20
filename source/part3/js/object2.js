var a = 100;
var b = 200;

var objectA = {value:100};
var objectB = {value:100};
var objectC = objectB;

console.log(a == b);
console.log(objectA == objectB);
console.log(objectB == objectC);

