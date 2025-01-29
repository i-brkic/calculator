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
    number1 =
      display.textContent === "0"
        ? element.textContent
        : (number1 += element.textContent);
    display.textContent = number1;
  });
});
