// Реализовать механизм защиты от копирования текстового контента на странице.
//
//   Для этого нужно:
//   Запретить копировать и вырезать текст
//
// Запретить использовать контекстное меню
//
// При каждой попытке копирования текста или попытке использования
// на экран должно выводиться сообщение ( можно использовать встроенный alert)

window.addEventListener("cut", function (e) {
  e.preventDefault();
  alert("cutting not allowed!");
});

window.addEventListener("copy", function (e) {
  e.preventDefault();
  alert("copying not allowed!");
});

window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("contextmenu not allowed!");
});

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

class Calc {
  constructor() {
    this.result = document.querySelector(".result");
    this.previousOperand = null;
    this.currentOperand = null;
    this.currentOperation = null;

    this.o = {
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
  }

  perform(clear = true) {
    if (this.o[this.currentOperation]) {
      this.currentOperand = this.o[this.currentOperation](
        +this.previousOperand,
        +this.currentOperand
      );
      this.result.innerHTML = this.currentOperand;
      if (clear) this.previousOperand = null;
    }
  }

  handleInput(val) {
    if (this.o[val]) {
      if (this.previousOperand && this.currentOperand) this.perform(false);
      this.previousOperand = this.currentOperand;
      this.currentOperand = null;
      this.currentOperation = val;
      this.result.innerHTML = "";
    } else {
      switch (val) {
        case "=":
        case "Enter":
          this.perform();
          break;
        case "C":
          this.previousOperand = null;
          this.currentOperand = null;
          this.currentOperation = null;
          this.result.innerHTML = "";
          break;
        case "Backspace":
          this.currentOperand = +this.currentOperand.toString().slice(0, -1);
          this.result.textContent = this.currentOperand;
          break;
        default:
          if (Number.isInteger(+val)) {
            this.currentOperand =
              this.currentOperand === null ? val : this.currentOperand + val;
            this.result.textContent = this.currentOperand;
          }
      }
    }
  }

  addOperation(name, f) {
    let b = document.createElement("div");
    b.className = "button";
    b.innerHTML = `${name}`;
    b.setAttribute("id", `${name}Operation`);

    document.getElementById("customOperationBlock").append(b);

    this.o[name] = f;
  }

  init() {
    document
      .getElementById("buttonsBlock")
      .addEventListener("click", (e) => this.handleInput(e.target.textContent));

    document.addEventListener("keydown", (e) => this.handleInput(e.key));
  }
}

// Инициализируем
const calc = new Calc();
calc.init();

// Расширяем функционал
calc.addOperation("**", (a, b) => a ** b);
