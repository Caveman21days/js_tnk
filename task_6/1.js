function parseTemplate(el, o) {
  Array.from(el.children).forEach(function (e) {
    if (e.hasAttribute("data-field")) {
      e.textContent = o[e.getAttribute("data-field")]
    } else {
      throw "ERROR!"
    }
  });
}
