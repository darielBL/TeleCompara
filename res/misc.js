const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Cambia 100 por la posición deseada
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});