const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
     document.body.classList.toggle('light');
     btnSwitch.classList.toggle('active');


     //save mode localstorage

     if(document.body.classList.contains('light')){
        localStorage.setItem('light-mode','true');
     }else{
        localStorage.setItem('light-mode','false');
     }
});


//obtenemos modo actual

if(localStorage.getItem('light-mode') === 'true'){
    document.body.classList.add('light');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('light');
    btnSwitch.classList.remove('active');
}


