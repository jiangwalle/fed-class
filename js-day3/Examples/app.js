/**
 * Guessing game.
 * How to play:
 * 1. Input a max number and then system would generate a number within max number
 * 2. User input a guess. if the guess number is lower/greater than target number, then prompt saying too low/big, try again.
 * 3. If guess number is correct, then saying congrats. Game is over.
 * 4. User can input q to exit game.
 */


// const seats = [
//   ['A1', 'A2', 'A3', 'A4'],
//   ['B1', 'B2', 'B3', 'B4'],
//   ['C1', 'C2', 'C3', 'C4'],
//   ['D1', 'D2', 'D3', 'D4'],
// ];

// for (let i = 0; i < seats.length; i++) {
//   let row = seats[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// for (let row of seats) {
//   for (let seat of row) {
//     console.log(seat);
//   }
// }

// const scors = {
//   jack: 78,
//   mary: 90,
//   clark: 83,
//   ironman: 100,
//   spiderman: 70,
//   hulk: 99,
// };

// Calculate average score


// let student1 = {
//   name: 'walle',
//   age: 18,
//   gender: 'male',
//   score: 59
// }

// let student2 = {
//   name: 'jack',
//   age: 19,
//   gender: 'male',
//   score: 90,
//   classes: [
//     {
//       name: 'music',
//       teacher: 'jack'
//     },
//     {
//       name: 'math',
//       teacher: 'avelin'
//     }
//   ]
// }

// let name = 'walle';
// let age = 18;
// let gender = 'male';
// let score = 59;
// let studentWalle = ['walle', 18, 'male', 59];
// studentWalle[0] // walle
// studentWalle[1] // 18


// let name1 = 'jack';
// let age1 = 19;
// let gender1 = 'male';
// let score1 = 90;

// let product = {
//   name: '连衣裙',
//   brand: 'xx',
//   price: 200.00,
//   totalSell: 10000,
//   comments: [
//     {
//       customer: 'walle',
//       buyDate: '2021-09-01',
//       words: '非常好！很清凉'
//     },
//     {
//       customer: 'john',
//       buyDate: '2021-10-01',
//       words: '不好，差评。尺码不合适！'
//     },
//     {
//       customer: 'john',
//       buyDate: '2021-10-01',
//       words: '不好，差评。尺码不合适！'
//     },
//     {
//       customer: 'john',
//       buyDate: '2021-10-01',
//       words: '不好，差评。尺码不合适！'
//     },
//     {
//       customer: 'john',
//       buyDate: '2021-10-01',
//       words: '不好，差评。尺码不合适！'
//     },
//     {
//       customer: 'john',
//       buyDate: '2021-10-01',
//       words: '不好，差评。尺码不合适！'
//     }
//   ]
// }



// let students = ['jack', 'john', 'andy', 'hanmeimei', 'lilei']; // 5

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// for (let i = 0; i < 3; i++) {

//   console.log(`i = ${i}`);
  
//   for (let j = 0; j < 4; j++) {
//     console.log(`      j = ${j}`);
//   }

// }

// let cinema = [
//   ['1a', '1b', '1c', '1d'],
//   ['2a', '2b', '2c', '2d'],
//   ['3a', '3b', '3c', '3d', '4d', '5e'],
//   ['4a', '4b', '4c', '4d'],
// ]

// for (let i = 0; i < cinema.length; i++) {
//   let row = cinema[i];
//   console.log(`==== row ${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// for (let row of cinema) {
//   for (let seat of row) {
//     console.log(seat);
//   }
// }

// let num = Math.ceil(Math.random() * 100);
// let gameContinue = true;
// let count = 0;

// while (gameContinue) {
//   let guess = prompt('please guess');

//   if (guess === 'quit') {
//     console.log(`Sorry, you quit. Welcome to try again.`)
//     break;
//   }

//   if (num === parseInt(guess)) {

//     gameContinue = false;
//     console.log(`Yay, you made it. You tried ${count} times`);
  
//   } else if (parseInt(guess) > num) {
  
//     console.log(`too big`);
  
//   } else if (parseInt(guess) < num) {
  
//     console.log(`too small`);
  
//   }

//   count++;
// }


// let person = {
//   firstname: 'walle',
//   lastname: 'walle',
//   age: 18,
//   phone: '123123123',
// };

// for (let key in person) {
  
// }


// Cmd todo list.
// Support command:
// new: create a new todo
// delete: prompt to enter Id of the todo to be deleted. 
// list: display all todos
// quit/q: quit the application

// let todos = ['learn js', 'have dinner', 'walk dog'];

// while (true) {
//   let command = prompt('Please input a command');
//   // console.log(command);

//   if (command === 'quit' || command === 'q') {
//     break;
//   } else if (command === 'list') {
//     console.log(`====================`);
//     for (let i = 1; i <= todos.length; i++) {
//       console.log(`${i}. ${todos[i-1]}`);
//     }
//     console.log(`====================`);
//   } else if (command === 'new') {
//     let todo = prompt('Add todo text');
//     todos.push(todo);
//   } else if (command === 'delete') {
//     let id = parseInt(prompt('Tell me which one you want to delete'));
//     todos.splice(id - 1, 1);
//     console.log(`delete succeed`);
//   } else {
//     console.log(`Unknown command. Support: new, delete, list, quit;`);
//   }
  
// }

