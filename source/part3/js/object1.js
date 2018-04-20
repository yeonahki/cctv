var studentA={};
studentA.name='Tom';
studentA.age=16;
studentA.gender='male';
studentA.examAverage = function(a,b,c){
  return (a+b+c)/3;
};

var studentB={
  name:'Jane',
  age:17,
  gender:'female',
  examAverage: function(a,b,c){
    return (a+b+c)/3;
  }
};

console.log('studentA');
console.log('name:', studentA.name);
console.log('age:', studentA['age']);
console.log('gender:', studentA.gender);
console.log('examAverage:', studentA.examAverage(70, 60, 80));
console.log('======================');
console.log('studentB');
for(var title in studentB){
  console.log(title+':', studentB[title]);
}
console.log(studentB['examAverage'](90,90,90));
