// function hello(name) {
//   console.log(`Hello ${name}`);
// }

// hello();

// function add(num1, num2) {
//   console.log(num1 + num2);
//   console.log(`end of the add function`);
//   return num1 + num2;
// }

// let result = add(1, 2);
// console.log(`result is: ${result}`);

// function capitalize(word) {
//   let firstLetter = word.charAt(0).toUpperCase();
//   let remaining = word.substring(1);
//   return firstLetter + remaining;
// }

// console.log(capitalize('hello'));
// console.log(capitalize('dfsddfsdfhello'));

// let sum = 0;
// for (let i = 0; i < 9; i++) {
//   sum += i;
// }
// console.log(sum);


// let name = 'spiderman';
// function say() {
//   let msg = 'Hello';
//   console.log(`msg`);
//   console.log(`Inside function: name is: ${name}`);
// }

// say();

// console.log(`Print from outside of function: ` + msg);

// let name = 'spiderman';

// {
//   let name = 'ironman234243';
//   console.log(`Inside111: ` + name);
// }

// {
//   let name = 'spiderman';
//   console.log(`Inside222: ` + name);
// }


// console.log(`Outside: ` + name);

// let add = function(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(1, 33));

// const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// const randomCard = function() {
//   let index = Math.floor(Math.random() * 13);
//   return cards[index];
// }

// function randomPlayer() {
//   return `Player ${Math.random()}`;
// }

// const repeat = function(count, func) {
//   const result = [];
//   for (let i = 0; i < count; i++) {
//     result.push(func());
//   }
//   return result;
// }

// const cards13 = repeat(13, randomCard);
// const cards18 = repeat(18, randomCard);
// const player3 = repeat(3, randomPlayer);



// const cards13 = function() {
//   const cards = []
//   for (let i = 0; i < 13; i++) {
//     let card = randomCard();
//     cards.push(card);
//   }
//   return cards;
// }

// const cards18 = function() {
//   const cards = []
//   for (let i = 0; i < 18; i++) {
//     let card = randomCard();
//     cards.push(card);
//   }
//   return cards;
// }

// console.log(cards13);
// console.log(cards18);
// console.log(player3);


// const makeBetweenFunc = function(min, max) {
//   return function(number) {
//     return number >= min && number <= max;
//   }
// }

// const isKid = makeBetweenFunc(1, 8);
// const isAdult = makeBetweenFunc(9, 60);
// const isSenior = makeBetweenFunc(61, 10000);

// function isKid(age) {
//   return age >= 1 && age <= 8;
// }

// function isAdult(age) {
//   return age >= 9 && age <= 60;
// }

// function isSenior(age) {
//   return age >= 61;
// }

// console.log(isKid(9));

// const MyMath = {
//   PI: 3.14,
//   circle: function(r) {
//     return r * r * this.PI;
//   }
// }

// const Person = {
//   firstname: 'Jack',

//   lastname: 'ma',
  
//   fullName: function () {
//     console.log(`Current this is: `, this);
//     return `Fullname is: ${this.firstname} ${this.lastname}`;
//   }

// }

// let func = Person.fullName;

// const Man = {
//   firstname: 'man'
// }

// Man.func = Person.fullName;

// console.log(Man.func());


// function yell(str) {
//   // str is a string
//   try {
//     console.log(str.toUpperCase().repeat(3));
//   } catch (e) {
//     console.log(e);
//   }
// }

// // yell(`I'm the most handsom man in the world!`);
// yell(3);
// console.log(`Do somehing else very important`);