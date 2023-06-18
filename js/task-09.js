function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('button')
const colorBG = document.querySelector('.color')

 
const OnClickBtn = (callback) => { 
  bodyEl.style.backgroundColor = getRandomHexColor()
  colorBG.textContent = getRandomHexColor()
}

buttonEl.addEventListener('click', OnClickBtn)


