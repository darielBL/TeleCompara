import React from 'react';

const Hero = () => {
    return (
        <section id="hero" >
            <video width="320" height="240" autoPlay="autoplay" loop="loop" muted id="video_background">
                <source src="assets/8817471-hd_1920_1080_30fps.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <div className="hero-content">
                <h1>Encuentra tu mejor servicio de telecomunicaciones</h1>
                <p>Comparamos las mejores ofertas en Albacete para que tomes la decisión correcta</p>
                <a href="/compare" className="cta-button">Comenzar Comparación</a>
            </div>
        </section>
    );
}

export default Hero;