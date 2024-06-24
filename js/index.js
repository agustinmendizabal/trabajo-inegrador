const accesorios=document.querySelector(`#accesorios`)
fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    accesorios.innerHTML+=`
                        <div class="producto">
        <img src="${data[i].image}" alt="Jean">
        <div class="informacion">
            <p>${data[i].title}</p>
            <p class= "precio">${data[i].price}</p>
            <p class= "precio">${data[i].description}</p>
        <button><a href="producto.html?id=${data[i].id}">Ver mas</a></button>
        </div>
    </div>
                    `
                }
            })

            const electronica=document.querySelector(`#electronica`)
            fetch('https://fakestoreapi.com/products/category/electronics')
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data)
                            for (let i = 0; i < data.length; i++) {
                                electronica.innerHTML+=`
                                    <div class="producto">
                    <img src="${data[i].image}" alt="Jean">
                    <div class="informacion">
                        <p>${data[i].title}</p>
                        <p class= "precio">${data[i].price}</p>
            <p class= "precio">${data[i].description}</p>

                    <button><a href="producto.html?id=${data[i].id}">Ver mas</a></button>
                    </div>
                </div>
                                `
                            }
                        })

                        const men=document.querySelector(`#men`)
                        fetch("https://fakestoreapi.com/products/category/men's clothing")
                                    .then(res=>res.json())
                                    .then(data=>{
                                        console.log(data)
                                        for (let i = 0; i < data.length; i++) {
                                            men.innerHTML+=`
                                                <div class="producto">
                                <img src="${data[i].image}" alt="Jean">
                                <div class="informacion">
                                    <p>${data[i].title}</p>
                                    <p class= "precio">${data[i].price}</p>
            <p class= "precio">${data[i].description}</p>


                                <button><a href="producto.html?id=${data[i].id}">Ver mas</a></button>
                                </div>
                            </div>
                                            `
                                        }
                                    })
