let recuperoStorage = localStorage.getItem("miCarrito");
let storageToParse = JSON.parse(recuperoStorage);
let contenedor = document.querySelector('main')
let contenedor_cart = document.querySelector('.container_producto')
let finalizar = document.querySelector('.finalizar')

  .then(function(data){
    console.log(data);
    let informacioncategoria = data;
    let navegador = document.querySelector('.navegador')
    
navegador.innerHTML =  ` 
  <li><a href="./index.html">HOME</a></li>
  <li><a href="./category.html?categories=${informacioncategoria.category="electronics"}">ELECTRONICOS</a></li>
  <li><a href="./category.html?categories=${informacioncategoria.category="jewelery"}">ACCESSORIOS</a></li>
  <li><a href="./category.html?categories=${informacioncategoria.category="women's clothing"}">ROPA DE MUJER</a></li>`
})
