//js/main.js

  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('input[type="button"]');

  let firstOperand = null;
  let operator = null;
  let waitingForSecondOperand = false;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.value;

      if (!isNaN(value)) {
        // If it's a number
        if (waitingForSecondOperand) {
          display.value = value;
          waitingForSecondOperand = false;
        } else {
          display.value += value;
        }
      } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (display.value === '') return;
        firstOperand = parseFloat(display.value);
        operator = value;
        waitingForSecondOperand = true;
      } else if (value === '=') {
        if (operator && firstOperand !== null) {
          const secondOperand = parseFloat(display.value);
          let result;
          if (operator === '+') result = firstOperand + secondOperand;
          if (operator === '-') result = firstOperand - secondOperand;
          if (operator === '*') result = firstOperand * secondOperand;
          if (operator === '/') {
            result = secondOperand === 0 ? 'Error' : firstOperand / secondOperand;
          }
          display.value = result;
          firstOperand = null;
          operator = null;
        }
      } else if (value === 'Clear') {
        display.value = '';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
      }
    });
  });


