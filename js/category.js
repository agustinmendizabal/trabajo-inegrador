let queryString =location.search

let queryStringObj = new URLSearchParams(queryString)

let id = queryStringObj.get("categoria")

console.log(id);
let title=document.querySelector(`#titulo`)
title.innerHTML=id
let articulos=document.querySelector(`#articulos`)

fetch(`https://fakestoreapi.com/products/category/${id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    articulos.innerHTML+=`
                        <section class="producto">
        <img src="${data[i].image}" alt="Jean">
        <div class=".producto">
            <p>${data[i].title}</p>
            <p class= "precio">${data[i].price}</p>
            <p class= "precio">${data[i].description}</p>
        <button><a href="producto.html?id=${data[i].id}">Ver mas</a></button>
        </div>
    </section>
                    `
                }
            })