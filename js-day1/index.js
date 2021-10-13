function calc(input) {
  const opReverse = {
    '+': '-',
    '-': '+',
    '*': '/',
    '/': '*'
  };

  const match = input.replace(/ /g, "").toLowerCase().match(/^([\dx]+)([\*\+-/])([\dx]+)=([\dx]+)$/);
  if (!match) {
    return;
  }

  const [_, num1, op, num2, sum] = match;

  if (sum.indexOf("x") !== -1) {
  
    const diff = eval(`${num1}${op}${num2}`);
    return `${diff}`[sum.indexOf("x")];
  
  } else if (num1.indexOf("x") !== -1) {

    // Reverse op: sum reverse_op num2
    const diff = eval(`${sum}${opReverse[op]}${num2}`);
    return `${diff}`[num1.indexOf("x")];
  
  } else if (num2.indexOf("x") !== -1) {
    let diff;
    if (op === '/') {
      diff = eval(`${num1}${op}${sum}`);
    } else {
      // sum reverse_op num1
      diff = Math.abs(eval(`${sum}${opReverse[op]}${num1}`));
    }
    return `${diff}`[num2.indexOf("x")];
  }
}

console.log(calc("1x + 10 = 20"));
console.log(calc("10 + 1x = 29"));
console.log(calc("10 + x9 = 8r9"));
console.log(calc("10 + 19 = 2x"));