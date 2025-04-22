let display = document.getElementById("display");
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function square() {
  if (display.value) {
    display.value = Math.pow(eval(display.value), 2);
  }
}

function sqrt() {
  if (display.value) {
    display.value = Math.sqrt(eval(display.value));
  }
}

function reciprocal() {
  if (display.value && eval(display.value) !== 0) {
    display.value = 1 / eval(display.value);
  }
}

function toggleSign() {
  if (display.value) {
    display.value = -eval(display.value);
  }
}

function memoryAdd() {
  memory += eval(display.value) || 0;
}

function memorySubtract() {
  memory -= eval(display.value) || 0;
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}
