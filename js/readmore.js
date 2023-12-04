
let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Ver menos'
    }
    else {
        hideText_btn.innerHTML = 'Ver más'
    }
}


let hideText_btn2 = document.getElementById('hideText_btn2');

let hideText2 = document.getElementById('hideText2');

hideText_btn2.addEventListener('click', toggleText2);

function toggleText2(){
    hideText2.classList.toggle('show2');

    if(hideText2.classList.contains('show2')){
        hideText_btn2.innerHTML = 'Ver menos'
    }
    else {
        hideText_btn2.innerHTML = 'Ver más'
    }
}


let hideText_btn3 = document.getElementById('hideText_btn3');

let hideText3 = document.getElementById('hideText3');

hideText_btn3.addEventListener('click', toggleText3);

function toggleText3(){
    hideText3.classList.toggle('show3');

    if(hideText3.classList.contains('show3')){
        hideText_btn3.innerHTML = 'Ver menos'
    }
    else {
        hideText_btn3.innerHTML = 'Ver más'
    }
}