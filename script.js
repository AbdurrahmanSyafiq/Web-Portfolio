window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.scrollY > fixednav) {
        header.classList.add('navbar-fixed');
    }
    else if (window.scrollY <= fixednav) {
        header.classList.remove('navbar-fixed');
    }
};


const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden')
});

window.addEventListener('click', function(e){
    if (e.target != nav && e.target != hamburger) {
        hamburger.classList.remove('hamburger-active');
        nav.classList.add('hidden')  
    }
});

const darkToggle = document.querySelector('#dark');
const html = document.querySelector('html');
const span = document.querySelector('.toggle-circle');



darkToggle.addEventListener('change', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
});