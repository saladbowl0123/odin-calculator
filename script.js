const display = document.querySelector("#display");
const nums = document.querySelector("#nums")
const btn1 = document.querySelector("#btn-1");

let numA;
let operator;
let numB;

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (numA, operator, numB) {
  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
  }
}

nums.addEventListener("click", appendDisplay);

function appendDisplay (event) {
  let target = event.target;
  if (display.textContent == "0") {
    if (target.textContent != "0") {
      display.textContent = target.textContent;
    }
  } else {
    display.textContent += target.textContent;
  }
}