const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value')

let counterValue = 0;

const OnClickIncrement = () => { 
    counterValue += 1
    valueEl.innerHTML = `${counterValue}`
}

const OnClickDecrement = () => { 
    counterValue -= 1
    valueEl.innerHTML = `${counterValue}`
}
incrementBtn.addEventListener('click', OnClickIncrement)
decrementBtn.addEventListener('click', OnClickDecrement)


