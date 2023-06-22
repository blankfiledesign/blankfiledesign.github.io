let animado = document.querySelectorAll(".animado");

function mostrarScroll(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < animado.length; i++ ) {
    let alturaAnimado = animado[i].offsetTop;

    if( alturaAnimado - 750 < scrollTop ){
        animado[i].style.opacity = 1;


        animado[i].classList.add("mostrarIzquierda")
    }
   }
}

window.addEventListener('scroll', mostrarScroll);



/*derecha a izquierda*/

let animadoD = document.querySelectorAll(".animadoD");

function mostrarScrollD(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < animadoD.length; i++ ) {
    let alturaAnimadoD = animadoD[i].offsetTop;

    if( alturaAnimadoD - 750 < scrollTop ){
        animadoD[i].style.opacity = 1;

        animadoD[i].classList.add("mostrarDerecha")
    }
   }
}

window.addEventListener('scroll', mostrarScrollD);