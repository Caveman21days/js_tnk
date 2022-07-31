// Так как промис является центральной сущностью в работе с асинхронным кодом в современном JS,
// предлагается развить дальше то, что смотрели на лекции и написать собственную простую реализацию,
// которая будет соответствовать следующим требованиям:
//
//   * Промис создается конструктором в состоянии pending +
//   *  Промис может быть переведен в состояние fulfilled или rejected необратимо, +
//      т.е. промис который поменял состояние один раз, не может менять его дальше
//   * Можно добавить новые обработчики в уже исполненный промис
//   * Можно создать уже выполненный промис с помощью CustomPromise.resolve/reject
//
// Важный нюанс: Промис должен работать асинхронно, +
// для реализации этого можно использовать setTimeout c нулевой задержкой
//
// При любых сомнениях можно смотреть как работает настоящий промис, поведение внешне не должно отличаться

function CustomPromise(executor, previousResult = null) {
  let stateStore = 'pending'
  let resultStore = previousResult

  // Сделать бы их приватными, ну да ладно
  this.getState = () => stateStore
  this.getResult = () => resultStore

  this.state = this.getState()
  this.result = this.getResult()

  // их тоже
  this.resolve = (res) => {
    if (stateStore === 'pending') {
      stateStore = 'fulfilled'
      resultStore = res
      this.state = this.getState()
      this.result = this.getResult()
    }
  }

  this.reject = (res) => {
    if (stateStore === 'pending') {
      stateStore = 'rejected'
      resultStore = res
      this.state = this.getState()
      this.result = this.getResult()
    }
  }

  setTimeout(executor(this.resolve, this.reject), 0)

  this.then = (successCallback, errorCallback) => {
    return new CustomPromise(function (resolve, reject) {
      if (successCallback) resolve(successCallback(resultStore)) // if для красоты
      if (errorCallback) reject(errorCallback(resultStore))
    })
  }

  return this
}

CustomPromise.resolve = function() {
  return new CustomPromise(resolve => resolve(null))
}

CustomPromise.reject = function() {
  new CustomPromise((_, reject) => reject(null))
}
