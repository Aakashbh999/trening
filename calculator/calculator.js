document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("screen");

  document.querySelectorAll(".operation").forEach((button) => {
    button.addEventListener("click", function () {
      const operation = this.textContent;
      handleOperation(operation);
      // screen.value += operation;
    });
  });

  document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", function () {
      screen.value += this.textContent;
    });
  });

  document.getElementById("answer").addEventListener("click", function () {
    calculateResult();
  });

  document.getElementById("clear").addEventListener("click", function () {
    clearScreen();
  });
  document.getElementById("backspace").addEventListener("click", function () {
    backSpace();
  });
});

function handleOperation(operation) {
  const screen = document.getElementById("screen");
  switch (operation) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      screen.value += operation;
      break;
    default:
      console.log("Unknown operation");
  }
}

function calculateResult() {
  const screen = document.getElementById("screen");
  console.log(screen.value);
  try {
    screen.value = eval(screen.value);
  } catch (e) {
    screen.value = "Error";
  }
}

function clearScreen() {
  const screen = document.getElementById("screen");
  screen.value = "";
}

function backSpace() {
  const screen = document.getElementById("screen");
  screen.value = screen.value.slice(0, -1);
}
