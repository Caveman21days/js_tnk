
// Кастомный промис, реализованный через классы
class CustomPromiseByClass {
  #stateStore
  #resultStore

  #getState = () => this.#stateStore
  #getResult = () => this.#resultStore

  constructor(executor) {
    this.#stateStore = 'pending'
    this.#resultStore = null

    try {
      setTimeout(executor(this.resolve, this.reject), 0)
    } catch(e) {
      setTimeout(this.reject({message: e.message, trace: e.stack}),0)
    }
  }

  result = this.#getResult()
  state = this.#getState()

  resolve = (res) => {
    if (this.#stateStore === 'pending') {
      this.#stateStore = 'fulfilled'
      this.#resultStore = res
      this.state = this.#getState()
      this.result = this.#getResult()
    }
  }

  reject = (res) => {
    if (this.#stateStore === 'pending') {
      this.#stateStore = 'rejected'
      this.#resultStore = res
      this.state = this.#getState()
      this.result = this.#getResult()
    }
  }

  then = (successCallback, errorCallback) => {
    let res = this.#resultStore

    return new CustomPromiseByClass(function (resolve, reject) {
      if (successCallback) resolve(successCallback(res))
      if (errorCallback) reject(errorCallback(res))
    })
  }

  static resolve = function(arg) {
    if (arg instanceof CustomPromiseByClass) {
      return new CustomPromiseByClass(resolve => resolve(arg.result))
    }

    if (typeof arg.then === 'function') {
      return new CustomPromiseByClass(arg.then)
    }

    return new CustomPromiseByClass(resolve => resolve(arg))
  }

  static reject = function(arg) {
    new CustomPromiseByClass((_, reject) => reject(arg))
  }
}
