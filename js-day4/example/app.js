// ********* Function scope ***********
// let msg = 'global message';
// function hello() {
//   let msg = 'message from hello';
//   console.log(msg);
// }

// console.log(msg);

// hello();



// *********Block scope ******
// let msg = 'outside';

// if (true) {
//   let msg = 'block inside';
//   console.log(msg);
// }

// {
//   let msg2 = 'block message2';
//   console.log(msg2);
// }

// console.log(msg);
// console.log(msg2);




// *********** Function expression *********
// const add = function(num1, num2) {
//   return num1 + num2;
// }

// add(1, 2);



// ********** High order function ************

// 1. accept function
// const randomCard = function() {
//   const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//   return cards[Math.floor(Math.random() * 13)];

// }
// const repeat13 = function(func) {
//   const ret = [];
//   for (let i = 0; i < 13; i++) {
//     ret.push(func());
//   }
//   return ret;
// }

// console.log(repeat13(randomCard));


// 2. retrurn function
// const makeBetweenFunc = function(min, max) {
//   return function(number) {
//     return number >= min && number <= max;
//   }
// }

// const isKid = function(age) {
//   return age >= 1 && age <= 8;
// }

// const isAdult = function(age) {
//   return age >= 9 && age <= 65;
// }

// const isSenior = function(age) {
//   return age > 66;
// }


// ******** Define methods ************
// const MyMath = {
//   PI: 3.1415,
//   circleArea: function(r) {
//     return r * r / 2;
//   },
//   rectArea: function(x, y) {
//     return x * y;
//   }
// }


// ******* this ****************
// const person = {
//   firstname: 'Kobe',
//   lastname: 'Brayant',
//   fullName: function() {
//     console.log(this);
//     console.log(`Fullname is: ${this.firstname} ${this.lastname}`)
//   }
// }

// person.fullName();

// const printFullName = person.fullName;
// printFullName();



// ************** try catch ***********
// function yell(str) {
//   try {
//     console.log(str.toUpperCase().repeat(3));
//   } catch (e) {
//     console.log(e);
//     console.log('Please input a valid str');
//   }
// }

// yell('Great!!!');
// yell(123);

// console.log(`Logic after yell`);


let Todo = {
  items: [],
  isRunning: true,
  add: function(text) {
    // Add logic
  },
  update: function(itemId, newText) {
    // Update logic
  },
  delete: function(itemId) {
    // Delete logic
  },
  list: function() {
    // List logic
  },
  exit: function() {
    // Exit logic
  },
  run: function() {
    // Run application
    while(this.isRunning) {
      // switch case logic
    }
  }
}

// 执行的时候
Todo.run();


function timetable() {
  for (let i = 1; i <= 9; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += `${j}X${i}=${i*j} `;
    }
    console.log(row);
  }
}

timetable();