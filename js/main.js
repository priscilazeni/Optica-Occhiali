// carusel del index
// arrays que contienen las imagenes

let imagenes = ["./img/img-uno.jpg", "./img/img-dos.jpg", "./img/img-tres.jpg"];

let imagenesDos = ["./img/img-cuatro.jpg", "./img/img-cinco.jpg", "./img/img-seis.jpg"];

const carousel = document.getElementById ("imgCarusel");
const carouselDos = document.getElementById ("imgCaruselDos");
let contador = 0;

function cambiarImagen(){
    carousel.src=imagenes[contador];
    contador = (contador +1 ) % imagenes.length;

    carouselDos.src=imagenesDos[contador];
    contador = (contador +1 ) % imagenesDos.length;

}

cambiarImagen();
setInterval(cambiarImagen , 2500);



// array vacio que va a contener los productos mas buscados

let productosMasBuscados = [];
const masBuscado = document.getElementById ("masBuscado");

// llamo los a los 8 primeros productos alojados en el json y los guardo en el array productosMasBuscados, llamo a la funcion mostrarProductosMasBuscados que va a renderizar las card

fetch('./JSON/data.json')   
    .then(response => response.json())
    .then(data => {
        productosMasBuscados = data.slice(0,8);
        mostrarProductosMasBuscados(productosMasBuscados);
    });


// funcion para renderizar las card de los productos mas buscados
// tomo el div masBuscado vacio de la seccion index, recorro el array de los productos con el foreach y le digo que
// por cada producto se cree un nuevo div con la clase "loMasBuscado" y que contenga la descripcion del innerHTML     

    function mostrarProductosMasBuscados(array) {
        masBuscado.innerHTML = '';
        array.forEach((productos) => {
            const divProd = document.createElement("div");
            divProd.classList.add("loMasBuscado");
            divProd.innerHTML = `
        
            <div class="contenedorImg">
                <img src="${productos.img}" alt="${productos.img}" class="imgBuscado">
                <img src="${productos.img2}" alt="${productos.img}" class="imgBuscado">
            </div>
            <div class="contenedorDescripcion">
                <p class="descripcion">${productos.nombre.toUpperCase()}</p>
                <p class="descripcion">$${productos.precio}</p>
            </div>
            <button class="comprar">COMPRAR</button>
        `
             masBuscado.appendChild(divProd)
        });
    }
