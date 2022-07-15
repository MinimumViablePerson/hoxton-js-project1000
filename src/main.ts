import './style.css'

function render() {
  const mainEl = document.querySelector('#app')
  const divEl = document.createElement('div');
  divEl.textContent = 'text in a div, eat me!'
  mainEl.append(divEl);
}
render();