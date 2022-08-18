// 1 - Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой

// Предположим, что текст не содержит знаков припинания (сплит по пробелам)
// Делить регуляркками лень

const toObj = function(w) {
  return { word: w, length: w.length, isCapitalized: w.charAt(0) === w.charAt(0).toUpperCase() }
}

const toArr = text => text.split(' ').map(toObj)

console.log(toArr('Hello mr reviewer'))