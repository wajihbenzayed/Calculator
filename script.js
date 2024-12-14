const add = (a, b) => {
  return a + b;
}
const substract = (a, b) => {
  return a - b;
}
const multiply = (a, b) => {
  return a * b;
}
const divide = (a, b) => {
  return a / b;
}
let a = 0;
let b = 0;
let operator = "+";

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

let screenDisplay = "";
const screen = document.getElementById("screen");
