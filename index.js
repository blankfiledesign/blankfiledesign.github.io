
let articulo = document.querySelectorAll(".articulo");

function mostrarScroll(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < articulo.length; i++ ) {
    let alturaAnimado = articulo[i].offsetTop;

    if( alturaAnimado - 950 < scrollTop ){
        articulo[i].style.opacity = 1;


        articulo[i].classList.add("mostrarIzquierda")
    }
   }
}

window.addEventListener('scroll', mostrarScroll);



/*derecha a izquierda*/

let articulo2 = document.querySelectorAll(".articulo2");

function mostrarScrollD(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < articulo2.length; i++ ) {
    let alturaAnimadoD = articulo2[i].offsetTop;

    if( alturaAnimadoD - 950 < scrollTop ){
        articulo2[i].style.opacity = 1;

        articulo2[i].classList.add("mostrarDerecha")
    }
   }
}

window.addEventListener('scroll', mostrarScrollD);


/*abajo a arriba*/

let articulo1 = document.querySelectorAll(".articulo1");

function mostrarScrollA(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < articulo1.length; i++ ) {
    let alturaAnimadoA = articulo1[i].offsetTop;

    if( alturaAnimadoA - 950 < scrollTop ){
        articulo1[i].style.opacity = 1;

        articulo1[i].classList.add("mostrarAbajo")
    }
   }
}

window.addEventListener('scroll', mostrarScrollA);


/*abajo a arriba about*/

let about = document.querySelectorAll(".about");

function mostrarScrollAa(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < about.length; i++ ) {
    let alturaAnimadoAa = about[i].offsetTop;

    if( alturaAnimadoAa - 700 < scrollTop ){
        about[i].style.opacity = 1;

        about[i].classList.add("mostrarAbajo")
    }
   }
}

window.addEventListener('scroll', mostrarScrollAa);

/*img about*/


let aboutimg = document.querySelectorAll(".aboutimg");

function mostrarScrollImg(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < aboutimg.length; i++ ) {
    let alturaAnimadoAa = aboutimg[i].offsetTop;

    if( alturaAnimadoAa - 900 < scrollTop ){
        aboutimg[i].style.opacity = 1;

        aboutimg[i].classList.add("mostrarIzquierda")
    }
   }
}

window.addEventListener('scroll', mostrarScrollImg);


/*mostrar*/

