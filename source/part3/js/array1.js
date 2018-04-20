var strArray = ['aa', 'bb', 'cc'];
var numArray = [100, 200, 300];

var complexArray = [100, 'dd', true, function(a,b){return a+b;}];

console.log(strArray[0]);
console.log(numArray[0]);
console.log(complexArray[3](1,2));
