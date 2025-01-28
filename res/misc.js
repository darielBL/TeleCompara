window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Cambia 100 por la posición deseada
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.getElementById("menu-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});