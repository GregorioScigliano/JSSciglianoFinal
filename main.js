const cardProducto = document.querySelector('.mi-fila');
const tituloPagina = document.querySelector('#mi-header');
const footerPagina = document.querySelector('#mi-footer');



const titulo = document.createElement('div')
titulo.innerHTML =`
<h1 class="tituloPagina">Musica indie</h1>
`
tituloPagina.append(titulo)


fetch("./productos.json")
    .then(respuesta => respuesta.json())
    .then(productos => {
        productos.forEach(producto => {
            const columna = document.createElement('div')
            columna.classList = 'columna'

            const card = document.createElement('div')
            card.classList = 'card'
            card.innerHTML =`
            <img src=${producto.img} class="mi-img" alt="${producto.nombre}">
            <h4 class="nombreProducto">${producto.nombre}</h4>
            <p class="precioProducto">$${producto.precio}</p>
            <p><button>Carrito</button></p>
            `
        
            columna.append(card)
            cardProducto.append(columna)

            
            
        });
    })
    
const footer = document.createElement('ul')
footer.classList = 'listaFooter'
footer.innerHTML =`
<li><a href="https://es-la.facebook.com/" target="_blank"><img class="mi-footerImg" src="./imagenes-comprimidas/redes/facebook.png" alt="facebook"></a></li>
<li><a href="https://www.instagram.com/" target="_blank"><img class="mi-footerImg" src="./imagenes-comprimidas/redes/instagram.png" alt="instagram"></a></li>
<li><a href="https://twitter.com/?lang=es" target="_blank"><img class="mi-footerImg" src="./imagenes-comprimidas/redes/twitter.png" alt="twitter"></a></li>
`

footerPagina.append(footer)