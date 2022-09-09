// hamburger and navbar
const hamburger=document.querySelector('.hamburger');
const main=document.querySelector('main');

const navbar=document.querySelector('.navbar');
const navbarNav=document.querySelector('.navbar-nav');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-click');
    navbar.classList.toggle('navbar-display');
    navbarNav.classList.toggle('navbar-nav-display');
})


main.addEventListener('click',()=>{
    if(hamburger.classList.contains('hamburger-click')){
        hamburger.classList.remove('hamburger-click');
        navbar.classList.remove('navbar-display');
        navbarNav.classList.remove('navbar-nav-display');
    }
})

