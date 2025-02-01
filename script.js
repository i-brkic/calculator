// 1. Functions for basic calculator operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// 2. Variables to hold number, operator and the other number, will use them to update display later

let number1;
let operator;
let number2;

// 3. Function which takes the operator and two numbers and then calls one of the functions above

const operate = (a, operation, b) => operation(a, b);

// 4. Write a function to populate the display when you click the digit buttons.

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");

numbers.forEach(element => {
  element.addEventListener("click", () => {
    if (operator === undefined) {
      number1 =
        display.textContent === "0"
          ? element.textContent
          : (number1 += element.textContent);

      display.textContent = number1;
    } else {
      number2 =
        number2 === undefined
          ? element.textContent
          : (number2 += element.textContent);

      display.textContent = number2;
    }
  });
});

// 5. Make the calculator work

const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".clear");

operations.forEach(element => {
  element.addEventListener("click", e => {
    if (number1 === undefined) {
      alert("Please enter a number!");
      return;
    }

    // Execute one operation at a time, if an operation is pressed again, execute it and populate the display, while saving the next operator and preparing number 2 to be inputed again.
    if (operator && number2 !== undefined) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      let result;

      switch (operator) {
        case "/":
          if (num2 !== 0) {
            result = operate(num1, divide, num2);
          } else {
            alert("Can't divide by zero! Enter valid number.");
          }
          break;
        case "*":
          result = operate(num1, multiply, num2);
          break;
        case "-":
          result = operate(num1, subtract, num2);
          break;
        case "+":
          result = operate(num1, add, num2);
          break;
      }

      display.textContent = result;
      number1 = result.toString();
      number2 = undefined;
    }

    operator = e.target.innerText;
  });
});

equal.addEventListener("click", () => {
  if (number1 !== undefined && number2 !== undefined && operator) {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operator) {
      case "/":
        if (number2 !== 0) {
          result = operate(num1, divide, num2);
        } else {
          alert("Cant divide by zero!");
        }
        break;
      case "*":
        result = operate(num1, multiply, num2);
        break;
      case "-":
        result = operate(num1, subtract, num2);
        break;
      case "+":
        result = operate(num1, add, num2);
        break;
    }
    display.textContent = result;
    number1 = result.toString();
    number2 = undefined;
    operator = undefined;
  }
});

// 6. Reset button to start everything from the beginning.

allClear.addEventListener("click", () => {
  number1 = undefined;
  number2 = undefined;
  operator = undefined;
  display.textContent = "0";
});
