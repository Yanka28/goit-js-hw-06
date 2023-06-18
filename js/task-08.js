const loginForm = document.querySelector('form')

const OnSubmit = (event) => { 
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    const data = {
        email: email.value,
        password: password.value
    }
    if (!data.email || !data.password) {
        alert('Не всі поля заповнені')
    } else {
        console.log('email :', data.email);
        console.log('password :', data.password);
    }    
   loginForm.reset()

}
loginForm.addEventListener('submit', OnSubmit)