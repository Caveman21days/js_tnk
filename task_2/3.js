// Реализовать функцию для фильтрации массива по длине слов

const _filter = function(arr, min, max) {
  return arr.filter((e) =>  e.length >= min && e.length <= max )
}