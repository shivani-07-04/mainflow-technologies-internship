// Select display element
const display = document.getElementById('display');

// Function to append numbers and operators to the display
function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
