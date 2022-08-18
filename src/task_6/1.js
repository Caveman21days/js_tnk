function parseTemplate(el, o) {
  Array.from(el.children).filter(function(e) {
    return e.hasAttribute("data-field")
  }).forEach(function (e) {
    let p = o[e.getAttribute("data-field")]
    if (!p) throw Error('unknown property')
    e.textContent = p
  });
}
