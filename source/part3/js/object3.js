var studentB={
  name:'Jane',
  age:17,
  gender:'female',
  examAverage: function(a,b,c){
    return (a+b+c)/3;
  }
};

console.log('name:', studentB.name);
console.log('age:', studentB.age);
studentB.name = 'Ann';
studentB['age'] = 20;

console.log('== change ==');
console.log('name:', studentB.name);
console.log('age:', studentB.age);

console.log('== add height ==');
studentB.height = 170;
console.log('height:', studentB.height);

console.log('== delete age ==');
delete studentB.age;
console.log('age:', studentB.age);
console.log('studentB:', studentB);
