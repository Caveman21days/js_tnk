// 3. Калькулятор
//
// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, по умолчанию должны присутствовать методы add, substract
//
// Пример:
//   const calculator = new Calc()
//
// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5
//
// Также, он должен хранить историю всех операций и выводить ее по запросу:
//
//   calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*',
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
//
// И очищать историю
// calculator.clearHistory()
// calculator.history() // []

function Calc() {
  this.h = []
  this.operations = {
    '+': (x,y) => x + y,
    '-': (x,y) => x - y
  }

  this.operation = function(str) {
    let args = str.split(' ')
    let x = Number(args[0])
    let o = args[1]
    let y = Number(args[2])

    if (this.operations[o]) {
      this.h.push({operation: o, operands: [x, y]})

      return this.operations[o](x, y)
    } else {
      throw new Error(`operation '${o}' is not defined`)
    }
  }

  this.addOperation = function(o, f) {
    this.operations[o] = f
  }

  this.clearHistory = function() {
    this.h = []
  }

  this.history = () => this.h
}
