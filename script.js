function add(x,y) {
	return x + y
};

function substract(x,y) {
	return x - y
};

function sum(...toSum) {
	let totalSum = Number();
  for (const num of toSum) {
    totalSum += num
  }
  return +totalSum;
};

function multiply(...toMultiply) {
  return toMultiply.reduce((x,y) => x*y)
};

function divide(x,y) {
    return x / y
}

function operate(operator, x, y) {
  if (operator === '*' || operator === '×') {
    return multiply(x,y)
  } else if (operator === '/' || operator === '÷') {
    return divide(x,y)
  } else if (operator === '+') {
    return sum(x,y)
  } else if (operator === '-' || operator === '−') {
    return substract(x,y)
  }
}

const allButtons = document.querySelectorAll('.buttons')
const writingDisplay = document.querySelector('.writing-display')
let displayValue = '';

function populateDisplay(e) {
  if (e.target.textContent === 'AC') {
    writingDisplay.textContent = ''
    displayValue = '';
  } else if (e.target.textContent === '=') {
    if (!writingDisplay.textContent) {
      return;
    }
    let operatorValue = getOperator(displayValue)
    let operands = splitDisplayValue(displayValue, operatorValue)

    writingDisplay.textContent = operate(operatorValue, +operands[0], +operands[1])
    displayValue = writingDisplay.textContent;
    return;
  }
  // else if (e.target.textContent == '+' || e.target.textContent == '×' || e.target.textContent == '÷' || e.target.textContent == '−') {

  // }
  else {
    displayValue += e.target.textContent;
    console.log(displayValue)
    writingDisplay.textContent += e.target.textContent
  }
}
//store the number before the operator
//store the operator
//store the number after the operator

function splitDisplayValue(displValue, operator) {
  return displValue.split(operator)
}

function getOperator(dispValue) {
  let arr = [] 
  arr = dispValue.match(/\D/)
  return arr[0]
}


allButtons.forEach(btn => btn.addEventListener('click', populateDisplay))


