import './style.css'

function render () {
  const mainEl = document.querySelector('#app')
  const divEl = document.createElement('div')
  divEl.textContent = 'text in a div, paint me like one of your french ladies!'
  mainEl.append(divEl)
}
render()
