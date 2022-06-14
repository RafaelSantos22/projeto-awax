let menuBurguer = document.querySelector('.menu-opener');

menuBurguer.addEventListener('click', () => {
    let nav = document.getElementById('nav');

    nav.classList.toggle('active'); 
});
