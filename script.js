let operator = "";
let currentNum = "";
let previousNum = "";

const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");

const numberButtons = document.querySelectorAll(".number").forEach((el) => {
  el.addEventListener("click", () => {
    currentDisplay.innerText += el.innerText;
  });
});

const operatorButtons = document.querySelectorAll(".operator").forEach((el) => {
  el.addEventListener("click", () => {
    if (!currentDisplay.innerText) {
      return;
    }
    operator = el.innerText;
    previousNum = currentDisplay.innerText;
    currentDisplay.innerText = "";
    previousDisplay.innerText = `${previousNum} ${operator}`;
  });
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
  currentNum = currentDisplay.innerText;
  currentDisplay.innerText = operate(operator, parseInt(previousNum), parseInt(currentNum));
  previousDisplay.innerText = "";
  previousNum = "";
});

const add = (...args) => {
  return args.reduce((total, current) => total + current, 0);
};

const subtract = (...args) => {
  return args.reduce((total, current) => total - current);
};

const multiply = (...args) => {
  return args.reduce((total, current) => total * current);
};

const divide = (...args) => {
  return args.reduce((total, current) => total / current);
};

function operate(operator, num1, num2) {
  console.log(operator, num1, num2);
  switch (operator) {
    case "÷":
      return divide(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "−":
      return subtract(num1, num2);
    case "+":
      return add(num1, num2);
    default:
      return "You broke it";
  }
}
