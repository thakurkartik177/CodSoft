const display = document.getElementById('display');
function clearDisplay() {
  display.value = '';
}
function appendNumber(number) {
  if (display.value === '0' && number !== '.') {
    display.value = number;
  } else {
    display.value += number;
  }
}

function appendDecimal() {
  const lastNumber = display.value.split(/[\+\-\*\/%]/).pop();
  if (lastNumber.includes('.')) {
    return;
  }
  display.value += '.';
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);

  if (['+', '-', '*', '/', '%'].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function calculate() {
  try {
    let expression = display.value;
    expression = expression.replace(/x/g, '*').replace(/%/g, '/100*');
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}