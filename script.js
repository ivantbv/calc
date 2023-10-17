const buttonsEl = document.querySelectorAll('.btn');
const buttons = Array.from(buttonsEl);
const writingDisplay = document.querySelector('.writing-display');
const resultDisplay = document.querySelector('.result-display');

const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function([...toSum]) {
	let totalSum = Number();
  for (const num of toSum) {
    totalSum += num
  }
  return +totalSum;
};

const continousMultiplication = function([...toMultiply]) {
  return toMultiply.reduce((x,y) => x*y)
};

const multiply = function(x ,y) {
  return x * y;
}

const divide = function(x, y) {
  return x / y;
}

const operate = function(x, y, operator) {
  if (operator === '*' || operator === '×') {
    return multiply(x,y);
  }
  if (operator === '+') {
    return add(x,y);
  }
  if (operator === '-') {
    return subtract(x,y);
  }
  if (operator === '/') {
    return divide(x,y);
  }
}

const populateDisplay = function() {
  let operator = '';
  let firstNum = '';
  let secondNum = '';
  buttons.forEach(btn => btn.addEventListener('click', function(e){
    let currentBtn = e.target.textContent;
    if (!isNaN(currentBtn)) {
      if (operator && firstNum && !secondNum) {
        writingDisplay.textContent += currentBtn;
        secondNum =  writingDisplay.textContent
      }
      if (!secondNum) {
        writingDisplay.textContent += currentBtn;
        firstNum = writingDisplay.textContent;
      }
    } else {
      if (!firstNum && !secondNum) {
        return;
      }
      if (currentBtn !== '=') {
        operator = currentBtn;
        writingDisplay.textContent = '';
      }
      if (currentBtn === '=' && firstNum && secondNum && operator) {
        const result = operate(Number(firstNum), Number(secondNum), operator)
        writingDisplay.textContent = result;
        firstNum = result;
        secondNum = '';
      }
    }
  }))
}

populateDisplay();