// array vacio que va a contener los productos

let productos = [];
const tienda = document.getElementById("tienda");

// llamo los productos alojados en el json y los guardo en el array productos, llamo a la funcion que va a renderizar las card

fetch('../JSON/data.json')   
    .then(response => response.json())
    .then(data => {
        productos = data;
        mostrarProductos(productos);
    });

// funcion para renderizar las card de los productos
// tomo el div tienda vacio de la seccion con el mismo nombre, recorro el array de los productos con el foreach y le digo que
// por cada producto se cree un nuevo div con la clase "loMasBuscado" y que contenga la descripcion del innerHTML   

function mostrarProductos(array) {
    tienda.innerHTML = '';
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
         tienda.appendChild(divProd)
    });
}