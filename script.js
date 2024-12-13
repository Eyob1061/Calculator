const display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (!isNaN(value) || value === ".") {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = null;
      display.textContent = "0";
    } else if (value === "=") {
      if (operator && previousInput !== "") {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        display.textContent = currentInput;
        previousInput = "";
        operator = null;
      }
    } else {
      if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = value;
      }
    }
  });
});
