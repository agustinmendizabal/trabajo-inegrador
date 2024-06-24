let Email = localStorage.getItem("mail")

let mensaje = document.querySelector('#saludar')

let logout = document.querySelector('.logout')

let registro = document.querySelector(".registro")

let login = document.querySelector(".login")

if (Email != null) {
    mensaje.innerHTML = `<p>Bienvenido: ${Email}</p>`
    registro.style.display = "none"
    login.style.display = "none"
    logout.style.display = "flex"
}