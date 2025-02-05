import React, { useEffect } from 'react';

const NavBar = () => {
    useEffect(() => {
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.querySelector('.nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
        window.addEventListener('scroll', function () {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) { // Cambia 100 por la posición deseada
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }, []);
    return (
        <nav id="navbar" className="navbar">
            <div className="logo nav-font">MiLogo</div>
            <div className="menu-toggle nav-font" id="mobile-menu">
                <i className="bi bi-menu-button-wide nav-font" style={{ fontSize: 35 + 'px', fontWeight: 700, color: "white" }}></i>
            </div>
            <ul className="nav-list">
                <li><a className="nav-font" href="/#hero">Inicio</a></li>
                <li><a className="nav-font" href="/#servicios">Servicios</a></li>
                <li><a className="nav-font" href="/#nosotros">Nosotros</a></li>
                <li><a className="cta-button" href="/compare">Comparar Ahora</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;