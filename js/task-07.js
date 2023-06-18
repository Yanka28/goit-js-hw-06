const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

const OnInputChange = () => { 
spanEl.style.fontSize =`${inputEl.value}px` 
}

inputEl.addEventListener('input', OnInputChange)





