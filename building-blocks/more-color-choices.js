const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;

  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}