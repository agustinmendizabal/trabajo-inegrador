let queryString =location.search

let queryStringObj = new URLSearchParams(queryString)

let id = queryStringObj.get("id")

console.log(id);
fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                let producto=document.querySelector(`.producto`)
                producto.innerHTML=`
                   <img src="${data.image}" alt="Jean">
        <div class=".producto">
            <p>${data.title}</p>
            <p class= "precio">${data.price}</p>
            <p class= "precio">${data.description}</p>
            <a href="categoria.html?categoria=${data.category}">${data.category}</a>
            <button>Agregar al carrito</button>
        </div>
                `
            })