// 2 - Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

const _compare = (arr1, arr2) => arr1.every((item, i) => item === arr2[i])

// Сравнение "каждый с каждым"
const pairComp = function(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every(item => arr2.includes(item)) && arr2.every(item => arr1.includes(item))
}

// Сравнение "С индексом"
const pairComp2 = function(arr1, arr2) {
  return _compare(arr1, arr2) && _compare(arr2, arr1)
}

// В задании имеет смысл привести примеры попарного сравнения. Например, в ruby вычитание зеркальных массивов вернет пустой массив