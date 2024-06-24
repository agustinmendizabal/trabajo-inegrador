let loginF = document.querySelector('#form')
let Email = document.querySelector('#campoEmail')
let contrasena=document.querySelector('#contra')
loginF.addEventListener('submit', function(event){
    event.preventDefault()
    if(Email.value == ''){
        alert('Por favor complete el campo email')
    } 
    else if (contrasena.value == ''){
        alert('Por favor complete el campo contraseña')
    }
    else if(contrasena.value.length < 6){
        alert('La contraseña debe tener al menos 6 caracteres')
    }
    else {
        alert('felicidades mandaste el formulario correctamente')
        loginF.submit()
        localStorage.setItem("mail", Email.value)
    }
})