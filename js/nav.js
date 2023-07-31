const div = document.querySelector('nav');
let prevY = window.scrollY;

window.addEventListener('scroll', function( ){
    if(prevY > window.scrollY){
        header.classList.remove('off')
    }else{
        header.classList.add('off')
    }

    if(window.scrollY > 270){
        header.classList.add('solid');
    }else{
        header.classList.remove('solid')
    }
    prevY = window.scrollY;
});
