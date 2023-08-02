
//show izq a derecha

let izq = document.querySelectorAll(".izq");

function showScroll(){
    
    let scrollTop = document.documentElement.scrollTop;

    for (var i=0; i < izq.length; i++) {

        let alturaAnimado = izq[i].offsetTop;

        if( alturaAnimado - 650 < scrollTop){
            izq[i].style.opacity = 1;

            izq[i].classList.add("mostrarIzquierda")
        }
    }
}

window.addEventListener('scroll', showScroll);


//show derecha a izq

let der = document.querySelectorAll(".der");

function showScrollD(){
    
    let scrollTop = document.documentElement.scrollTop;

    for (var i=0; i < der.length; i++) {

        let alturaAnimado = der[i].offsetTop;

        if( alturaAnimado - 650 < scrollTop){
            der[i].style.opacity = 1;

            der[i].classList.add("mostrarDerecha")
        }
    }
}

window.addEventListener('scroll', showScrollD);


//show abajo arriba 

let low = document.querySelectorAll(".low");

function showScrollL(){
    
    let scrollTop = document.documentElement.scrollTop;

    for (var i=0; i < low.length; i++) {

        let alturaAnimado = low[i].offsetTop;

        if( alturaAnimado - 650 < scrollTop){
            low[i].style.opacity = 1;

            low[i].classList.add("mostrarAbajo")
        }
    }
}

window.addEventListener('scroll', showScrollL);