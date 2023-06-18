const inputEl = document.querySelector('#validation-input')
const lengthInp = Number(inputEl.dataset.length); 

function onBlur() { 
    inputEl.classList.add('valid', 'invalid')
    
    let str = inputEl.value.trim()

        if (str.length === lengthInp) {
        inputEl.classList.toggle('invalid')
            } else {
            inputEl.classList.toggle('valid')
        }
}

inputEl.addEventListener('blur', onBlur)

