const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value')

let counterValue = 0;

const onClickIncrement = () => { 
    counterValue += 1
    valueEl.innerHTML = `${counterValue}`
}

const onClickDecrement = () => { 
    counterValue -= 1
    valueEl.innerHTML = `${counterValue}`
}
incrementBtn.addEventListener('click', onClickIncrement)
decrementBtn.addEventListener('click', onClickDecrement)


