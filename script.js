let firstNum = 0;
let operator = "";
let lastNum = 0;

const currentDisplay = document.querySelector(".current");
const numberButtons = document.querySelectorAll(".number").forEach((el) => {
  el.addEventListener("click", () => {
    console.log("The numbers work!");
    currentDisplay.innerText += el.innerText;
  });
});

numberButtons.addEventListener("click", () => {
  console.log("The numbers work");
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
  add(num1, num2);
}
