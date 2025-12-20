// function to reverse words
// let str = 'john McClane';
// function nameShuffler(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(nameShuffler(str));

// let name = "Denys";
// let lastName = "Bulakh";
// let fullName = `${name} ${lastName}`;
// let greeting = `Hello, ${fullName}`;

// console.log(greeting);

// const userName = {
//   name: 'Denys',
//   lastName: 'Bulakh',
//   age: 15
// }

// const userInfo = {
//   city: 'Warsaw',
//   age: 28
// }

// const user = {
//   ...userInfo,
//   ...userName,
// }

// console.table(user);

// CALLBACKS
console.log(
  calculate(add, 6, 3),
  calculate(subtract, 6, 3),
  calculate(multiply, 6, 3),
  calculate((a, b) => a / b, 6, 3)
);

function calculate(operation, a, b) {
  // operation = #f_add - link
  //a = 6
  //b = 3
  return operation(a, b);
  // #f_add(6, 3)
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

