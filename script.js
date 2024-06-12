const display = document.querySelector("#display");
const btnNums = document.querySelector("#nums")
const btnOps = document.querySelector("#ops");
const btnEquals = document.querySelector("#btn-equals");
const btnClear = document.querySelector("#btn-clear");

const calcStates = ["numA", "op", "numB", "result"];
let calcState = calcStates[0];

let numA;
let op;
let numB;

function add (a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract (a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply (a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide (a, b) {
  return parseFloat(a) / parseFloat(b);
}

function operate (numA, op, numB) {
  switch (op) {
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

btnNums.addEventListener("click", (event) => {
  let target = event.target;
  switch (calcState) {
    case calcStates[0]:
    case calcStates[2]:
      if (display.textContent == "0") {
        if (target.textContent != "0") {
          display.textContent = target.textContent;
        }
      } else {
        display.textContent += target.textContent;
      }
      break;
    case calcStates[1]:
      display.textContent = target.textContent;
      calcState = calcStates[2];
      break;
    case calcStates[3]:
      display.textContent = target.textContent;
      calcState = calcStates[0];
  }
});

btnOps.addEventListener("click", (event) => {
  let target = event.target;
  switch (calcState) {
    case calcStates[2]:
      numB = display.textContent;
      display.textContent = operate(numA, op, numB);
      break;
    default:
      numA = display.textContent;
  }
  op = target.textContent;
  calcState = calcStates[1];
});

btnEquals.addEventListener("click", (_) => {
  switch (calcState) {
    case calcStates[1]:
    case calcStates[2]:
      numB = display.textContent;
      display.textContent = operate(numA, op, numB);
      calcState = calcStates[3];
      break;
    case calcStates[3]:
      numA = display.textContent;
      display.textContent = operate(numA, op, numB);
  }
});

btnClear.addEventListener("click", (_) => {
  display.textContent = "0";
  calcState = calcStates[0];
});