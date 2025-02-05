import React from 'react';

const Valors = () => {
    return (
        <section id="valores" className="section">
            <div className="section-title">
                <h2>Nuestros</h2>
                <h1>Valores</h1>
            </div>
            <div className="_grid">
                <div className="_cards" data-aos="zoom-in-right">
                    <div className="icon"><i className="bi bi-textarea-resize"></i></div>
                    <h3>Transparencia</h3>
                    <p>Información clara y accesible, sin costos ocultos</p>
                </div>
                <div className="_cards" data-aos="zoom-in">
                    <div className="icon"><i className="bi bi-motherboard"></i></div>
                    <h3>Innovación</h3>
                    <p>Tecnología de vanguardia para mejor experiencia</p>
                </div>
                <div className="_cards" data-aos="zoom-in">
                    <div className="icon"><i className="bi bi-hand-thumbs-up"></i></div>
                    <h3>Compromiso</h3>
                    <p>Dedicados a encontrar las mejores opciones</p>
                </div>
                <div className="_cards" data-aos="zoom-in">
                    <div className="icon"><i className="bi bi-emoji-laughing"></i></div>
                    <h3>Empatía</h3>
                    <p>Soluciones personalizadas para cada usuario</p>
                </div>
            </div>
        </section >
    );
}

export default Valors;