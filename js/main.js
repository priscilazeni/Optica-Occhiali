let imagenes = ["../img/img-uno.jpg", "../img/img-dos.jpg", "../img/img-tres.jpg"];

let imagenesDos = ["../img/img-cuatro.jpg", "../img/img-cinco.jpg", "../img/img-seis.jpg"];

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





