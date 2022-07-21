// Реализовать механизм защиты от копирования текстового контента на странице.
//
//   Для этого нужно:
//   Запретить копировать и вырезать текст
//
// Запретить использовать контекстное меню
//
// При каждой попытке копирования текста или попытке использования
// на экран должно выводиться сообщение ( можно использовать встроенный alert)

window.addEventListener('cut', function(e) {
  e.preventDefault()
  alert('cutting not allowed!')
})

window.addEventListener('copy', function(e) {
  e.preventDefault()
  alert('copying not allowed!')
})

window.addEventListener('contextmenu', function(e) {
  e.preventDefault()
  alert('contextmenu not allowed!')
})