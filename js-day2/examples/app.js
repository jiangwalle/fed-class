//============= If exmaple start
let number = Math.ceil(Math.random() * 6);
console.log(`num is: ${number}`);

if (number > 3) {
  console.log(`开大： ${number}`);
}

if (number <=3) {
  console.log(`开小： ${number}`);
}

// Quiz: Check number is even or not
function isEven(number) {
  // Write code below here

}
//============ if example end




//======== if else-if start
let dayOfWeek ='monday';
// let dayOfWeek = prompt("Please input a day");

if (dayOfWeek === 'monday') {
  console.log(`I hate monday!!!`);
} else if (dayOfWeek === 'saterday') {
  console.log(`Yay, my favorate day!!!`);
} else if (dayOfWeek === 'friday') {
  console.log(`I like friday, especially after work`);
}

// 0-5 free
// 5-10 child $10
// 10-65 adult $20
// 65+ senior $10
const age = 8;
// const age = prompt("Please input your age.");

if (age < 5) {
  console.log(`Free`);
} else if (age < 10) {
  console.log(`Kid for $10`);
} else if (age < 65) {
  console.log(`Adult for $20`);
} else if (age < 10) {
  console.log(`Kid for $10`);
} else {
  console.log(`Senior for $10`);
}

//========= if else-if start



// Nested condition check
let password = prompt("Please input password");
// Length > 6
// Can not contain space

// Nested condition check

// Logical and &&
if (password.length > 6 && password.indexOf(" ") === -1) {
  console.log(`Valid password`);
} else {
  console.log(`Invalid password`);
}
// Logical and &&



// logical ||

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free
let age = 40;
// let age = -10;

if (age < 5 || age >= 65) {
  console.log(`free`);
} else if (age < 10) {
  console.log(`$10`);
} else if (age < 65) {
  console.log(`$20`);
}

// logical ||



// logical not !
let username = '';
if (username !== '') {

}
//Same
if (!username) {

}
// logical not !


// switch case
let points = 100;
switch (points) {
  case points > 90:
    console.log(`学霸`);
    break;
  case points > 60:
    console.log(`Good`);
    break;
  case points > 0:
    console.log(`学渣`);
    break;
  default:
    console.log(`wrong number`);
    break;
}


// switch case