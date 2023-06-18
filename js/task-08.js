const loginForm = document.querySelector('form')

const onSubmit = (event) => { 
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    const data = {
        email: email.value.trim(),
        password: password.value.trim()
    }
    if (!data.email || !data.password) {
       return alert('Не всі поля заповнені')
    }  
        
    console.log(data)   
    event.currentTarget.reset()
}
loginForm.addEventListener('submit', onSubmit)