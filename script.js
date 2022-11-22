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

//when an operator is clicked
//take the number before it and that operator and place them on the results display
//when a number after the operator has been entered, clear the initial display

function populateDisplay(e) {
    e.preventDefault();
   if (e.target.textContent === '+' || e.target.textContent === '×' || e.target.textContent === '÷' || e.target.textContent === '−') {
    if (writingDisplay.textContent.includes('+') || writingDisplay.textContent.includes('×') || writingDisplay.textContent.includes('÷') || writingDisplay.textContent.includes('−')) {
      let operatorValue = getOperator(displayValue)
      let operands = splitDisplayValue(displayValue, operatorValue)
        if (!operands[1]) {
            console.log('here', operands, operatorValue)

            writingDisplay.textContent = rounding(operate(operatorValue, +operands[0], +operands[0]))
            displayValue = rounding(operate(operatorValue, +operands[0], +operands[0]))
        } else {
      writingDisplay.textContent = rounding(operate(operatorValue, +operands[0], +operands[1]))
      displayValue = rounding(operate(operatorValue, +operands[0], +operands[1]))
        }
    
    }
  }

  if (e.target.textContent === 'AC') {
    writingDisplay.textContent = ''
    displayValue = '';
  } else if (e.target.textContent === '=') {
    if (!writingDisplay.textContent) {
      return;
    }
    let operatorValue = getOperator(displayValue)
    let operands = splitDisplayValue(displayValue, operatorValue)

    if (!operands[1]) {
        writingDisplay.textContent = rounding(operate(operatorValue, +operands[0], +operands[0]))
        displayValue = rounding(operate(operatorValue, +operands[0], +operands[0]))
    } else {

        writingDisplay.textContent = rounding(operate(operatorValue, +operands[0], +operands[1]))
        displayValue = rounding(operate(operatorValue, +operands[0], +operands[1]))
        console.log(operands, operatorValue, 'logging')
        return;
    }
  } 
  // else if (e.target.textContent == '+' || e.target.textContent == '×' || e.target.textContent == '÷' || e.target.textContent == '−') {

  // }
  else {

    if (!displayValue || displayValue.toString().slice().includes('undefined')) {
      displayValue = '';
    }
    displayValue += e.target.textContent;
    console.log(typeof displayValue)
    writingDisplay.textContent += e.target.textContent
  }
}

function splitDisplayValue(displValue, operator) {
  if (!displValue || !operator) {
    return;
  }
  return displValue.split(operator)
}

function getOperator(dispValue) {
    if (!dispValue) {
      return;
    }  else if (!dispValue.split('-')[0] && dispValue.includes('.')) {
        let result = dispValue.split('-').join('').split('.')[1]
        return result.match(/\D/)[0]
     } else if (!dispValue.split('−')[0] || !dispValue.split('-')[0]) {
        let result = dispValue.split('-').join('')
        return result.match(/\D/)[0]
    }
    else if (dispValue.includes('.')) {
        let result = dispValue.split('.').join('')
        return result.match(/\D/)[0]
    } else {
    let arr = [] 
    arr = dispValue.match(/\D/)
    return arr[0]
        }
  }


function rounding(x) {
    return Math.round(x * 100000) / 100000
}

allButtons.forEach(btn => btn.addEventListener('mousedown', populateDisplay, true))