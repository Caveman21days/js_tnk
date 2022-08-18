
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
    if (arg instanceof CustomPromiseByClass || arg instanceof Promise) {
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





const STATE = {
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
  PENDING: 'pending'
}

// Кастомный промис, реализованный через классы
class MyPromise {
  #thenCbs = []
  #catchCbs = []
  #state = STATE.PENDING
  #value
  #onResolveBind = this.#onResolve.bind(this)
  #onRejectBind = this.#onReject.bind(this)

  constructor(executor) {
    try {
      executor(this.#onResolveBind, this.#onRejectBind)
    } catch(e) {
      this.#onReject(e)
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {

      this.#thenCbs.forEach(cb => {
        cb(this.#value)
      })

      this.#thenCbs = []
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach(cb => {
        cb(this.#value)
      })

      this.#catchCbs = []
    }
  }

  #onResolve(val) {
    setTimeout(() => {
      if (this.#state !== STATE.PENDING) return

      if (val instanceof MyPromise) {
        val.then(this.#onResolveBind, this.#onRejectBind)
        return
      }

      this.#value = val
      this.#state = STATE.FULFILLED
      this.#runCallbacks()
    }, 0)
  }

  #onReject(val) {
    setTimeout(() => {
      if (this.#state !== STATE.PENDING) return

      if (val instanceof MyPromise) {
        val.then(this.#onResolveBind, this.#onRejectBind)
        return
      }

      this.#value = val
      this.#state = STATE.REJECTED
      this.#runCallbacks()
    }, 0)
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push(res => {
        if (thenCb == null) {
          resolve(res)
          return
        }

        try {
          resolve(thenCb(res))
        } catch(e) {
          reject(e)
        }
      })

      this.#catchCbs.push(res => {
        if (catchCb == null) {
          reject(res)
          return
        }

        try {
          resolve(catchCb(res))
        } catch(e) {
          reject(e)
        }
      })

      this.#runCallbacks()
    })
  }

  catch(callback) {
    return this.then(null, callback)
  }

  static resolve(value) {
    return new Promise(resolve => {
      resolve(value)
    })
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value)
    })
  }
}
