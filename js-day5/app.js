// 3要素
// function add(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// add(1, 23434);

// console.log(result);

// function print(string, text2) {
//   console.log(`Input is: ${string}`);
// }

// print('hello', '2342')


let arr = [1, 2, 3, 4, 5, 6];

// for (let number of arr) {
//   console.log(number);
// }

// console.log(`============`);


// arr.forEach(number => console.log(number));

// let ret = [];
// arr.forEach(function(number) {
//   if (number > 4) {
//     ret.push(number);
//   }
// })

// let newArr = arr.map(function(num) {
//   return 1;
// });

// let numbers = prompt("Input numbers")
//   .split(",")
//   .map(function(numStr) {
//     return parseInt(numStr);
//   });



const movies = [
  {
    name: "肖生克的救赎",
    score: 9.7,
    year: 1993,
    category: 'story',
    actors: []
  },
  {
    name: "新警察故事",
    score: 8.2,
    year: 2006,
    category: 'action'
  },
  {
    name: "WALL-E",
    score: 10,
    year: 2008,
    category: 'cartoon'
  },
  {
    name: "霸王别姬",
    score: 9.5,
    year: 1993,
    category: 'story'
  },
  {
    name: "疯狂动物城",
    score: 9.4,
    year: 2016,
    category: 'cartoon'
  },
  {
    name: "冰雪奇缘",
    score: 9.1,
    year: 2014,
    category: 'cartoon'
  },
  {
    name: "冰雪奇缘2",
    score: 7.1,
    year: 2020,
    category: 'cartoon'
  },
];


// let movieNames = [];
// for (let movie of movies) {
//   movieNames.push(movie.name);
// }
// console.log(movieNames);

// let movieNames = movies.map(function(movie) {
//   return { name: movie.name, score: movie.score, isPlayable: true };
// })
// console.log(movieNames);

// const add = function(num1, num2) {
//   return num1 + num2;
// }

// const add2 = (num1, num2) => num1 + num2;

// const avg = numbers => {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total / numbers.length;
// }

// const greeting = (name) => {
//   console.log(`Hello ${name}`);
// }

// console.log(add(1, 2));
// console.log(add2(34, 22));
// console.log(greeting('jack'));
// console.log(avg([1, 2, 3, 4, 5]));

// let ret = arr.find(function(num) {
//   return num % 4 === 0;
// });

// let movie = movies.find(movie => movie.name.includes('WALL'));


// let cartoonMovies = movies.filter(movie => movie.category === 'cartoon');
// let cartoonMovies = movies
  // .filter(movie => movie.score > 9)
  // .filter(movie => movie.category === 'cartoon')
  // .some(movie => movie.score === 10);


// let total = arr.reduce((sum, number) => sum + number);
// let max = arr.reduce((max, number) => {
//   if (max < number) {
//     return max;
//   } else {
//     return number;
//   }
// });

// let score = movies
// let cartoonMovies = movies.filter(movie => movie.category === 'cartoon');
// let aveScore = cartoonMovies.reduce((sum, movie) => sum + movie.score, 0) / cartoonMovies.length;


// ES6

// function add(num1 = 100, num2) {
//   return num1 + num2;
// }

// let result = add(400);