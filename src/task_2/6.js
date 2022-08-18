// Реализовать функцию для случайной сортировки элементов массива
// случайная сортировка - это же, вроде, шаффл?
//
// Как-то точнее бы написать, что ли

// Реализовано со случайным выбором asc / desc
function randSort(arr) {
  let s = 1 - Math.floor(Math.random() * 3)

  return arr.sort((a, b) => s > 0 ? a - b : b - a)
}

function shuffle(arr) {
  return arr.sort(_ => 1 - Math.floor(Math.random() * 3))
}