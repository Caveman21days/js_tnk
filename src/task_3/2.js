// 2. Кэширование
//
// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.
//
// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат.
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно
//
// Пример:
// const calculate = cache();
//
// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}


const cachePow = function() {
  let cache = {}

  return function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) throw new Error('both args must be int')

    cache[x] ||= {}
    cache[x][y] ||= {}

    if (cache[x][y]["value"]) {
      cache[x][y]["fromCache"] = true
    } else {
      cache[x][y] = { fromCache: false, value: Math.pow(x, y) }
    }

    return cache[x][y]
  };
};