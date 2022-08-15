// Полагаю, переменки можно было объявлять прям в функции,
// скушалось бы столько же памяти
const ul = document.createElement("ul");
const li = document.createElement("li");

function arrToHtml(node, arr) {
  let _ul = ul.cloneNode()

  node.append(_ul)

  arr.forEach(item => {
    if (Array.isArray(item)) {
      arrToHtml(_ul, item)
      return
    }
    let _li = li.cloneNode()

    _li.textContent = item
    _ul.append(_li)
  });
}