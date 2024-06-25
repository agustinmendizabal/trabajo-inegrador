document.addEventListener("DOMContentLoaded", function() {
    let logoutButton = document.querySelector('.logout');
    let mensaje = document.querySelector('#saludar');
    let registro = document.querySelector(".registro");
    let login = document.querySelector(".login");

    logoutButton.addEventListener("click", function(event) {
        event.preventDefault();

        localStorage.removeItem("mail");

        if (mensaje) {
            mensaje.innerHTML = "";
        }

        if (registro) {
            registro.style.display = "flex";
        }

        if (login) {
            login.style.display = "flex";
        }

        if (logoutButton) {
            logoutButton.style.display = "none";
        }
    });
});