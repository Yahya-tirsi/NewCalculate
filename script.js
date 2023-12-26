let currentInput = '';
let operator = '';
let result = 0;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput !== '') {
    operator = op;
    currentInput += ' ' + operator + ' ';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  result = 0;
  updateDisplay();
}

function calculate() {
  const expression = currentInput.split(' ');
  const num1 = parseFloat(expression[0]);
  operator = expression[1];
  const num2 = parseFloat(expression[2]);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }

  currentInput = result.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}