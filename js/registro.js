let signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    let Users = JSON.parse(localStorage.getItem('users')) || []


    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'
})