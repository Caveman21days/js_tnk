// Реализовать механизм защиты от копирования текстового контента на странице.
//
//   Для этого нужно:
//   Запретить копировать и вырезать текст
//
// Запретить использовать контекстное меню
//
// При каждой попытке копирования текста или попытке использования
// на экран должно выводиться сообщение ( можно использовать встроенный alert)

window.addEventListener('cut', function(e) {
  e.preventDefault()
  alert('cutting not allowed!')
})

window.addEventListener('copy', function(e) {
  e.preventDefault()
  alert('copying not allowed!')
})

window.addEventListener('contextmenu', function(e) {
  e.preventDefault()
  alert('contextmenu not allowed!')
})

// Реализовать калькулятор
//
// В качестве основы для доработки можно взять калькулятор,
// который мы рассматривали на лекции, либо сделать свой самостоятельно
//
// Должна поддерживаться следующая функциональность:
//   По нажатию на backspace символы в поле ввода должны стираться по одному
//   По нажатии на enter - срабатывать действие '='
//
// Должны поддерживаться базовые арифметические операции: +, - , *, /
// Добавлять свои нестандартные операции и отображать кнопки для этих операций на экране

const result = document.querySelector(".result");

let previousOperand = null;
let currentOperand = null;
let currentOperation = null;

const o = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    return a / b;
  }
};

const perform = (clear = true) => {
  if (o[currentOperation]) {
    currentOperand = o[currentOperation](+previousOperand, +currentOperand);
    result.innerHTML = currentOperand;
    if (clear) previousOperand = null;
  }
};

const handleInput = function (val) {
  switch (val) {
    case "+":
    case "-":
    case "*":
    case "/":
      if (previousOperand && currentOperand) perform(false);
      previousOperand = currentOperand;
      currentOperand = null;
      currentOperation = val;
      result.innerHTML = "";
      break;
    case "=":
    case "Enter":
      perform();
      break;
    case "C":
      previousOperand = null;
      currentOperand = null;
      currentOperation = null;
      result.innerHTML = "";
      break;
    case "Backspace":
      currentOperand = +currentOperand.toString().slice(0, -1);
      result.textContent = currentOperand;
      break;
    default:
      if (Number.isInteger(+val)) {
        currentOperand = currentOperand === null ? val : currentOperand + val;
        result.textContent = currentOperand;
      }
  }
};

document.getElementById("buttonsBlock")
        .addEventListener("click", (e) => handleInput(e.target.textContent));

document.addEventListener("keydown", (e) => handleInput(e.key));
