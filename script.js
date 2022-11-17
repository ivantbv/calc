function add(x,y) {
	return x + y
};

function substract(x,y) {
	return x - y
};

function sum([...toSum]) {
	let totalSum = Number();
  for (const num of toSum) {
    totalSum += num
  }
  return +totalSum;
};

function multiply([...toMultiply]) {
  return toMultiply.reduce((x,y) => x*y)
};

function divide(x,y) {
    return x / y
}

function operate(operator, x, y) {
  if (operator === '*') {
    return multiply([x,y])
  } else if (operator === '/') {
    return divide(x,y)
  } else if (operator === '+') {
    return sum([x,y])
  } else if (operator === '-') {
    return substract(x,y)
  }
}