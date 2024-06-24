logout.addEventListener("click", function(){
    localStorage.clear();
    registro.style.display = "flex";
    login.style.display = "flex";
    logout.style.display = "none";
    Email.style.display = "none";

})
