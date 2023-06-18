const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

const OnInput = (event) => { 
    if (event.currentTarget.value !== '') {
        nameOutput.textContent = event.currentTarget.value
    } else
       nameOutput.textContent = 'Anonymous' 
}
nameInput.addEventListener('input', OnInput)
