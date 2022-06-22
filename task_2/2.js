// 2 - Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

// Сравнение "каждый с каждым"
const pairComp = function(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every(item => arr2.includes(item)) && arr2.every(item => arr1.includes(item))
}

// Сравнение "С индексом"
const pairComp2 = function(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
}

// В задании имеет смысл привести примеры попарного сравнения. Например, в ruby вычитание зеркальных массивов вернет пустой массив