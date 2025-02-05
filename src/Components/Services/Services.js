import React from 'react';

const Services = () => {
    return (
        <section id="servicios" className="section">
            <div className="section-title">
                <h2>Nuestros</h2>
                <h1>Servicios</h1>
            </div>
            <div className="_grid">
                <div className="_cards" data-aos="fade-right">
                    <div className="icon">📊</div>
                    <h3>Comparación en tiempo real</h3>
                    <p>Análisis actualizado de todas las ofertas disponibles</p>
                </div>
                <div className="_cards" data-aos="fade-up">
                    <div className="icon">🎯</div>
                    <h3>Recomendaciones personalizadas</h3>
                    <p>Basadas en tus necesidades específicas</p>
                </div>
                <div className="_cards" data-aos="zoom-in-left">
                    <div className="icon">💰</div>
                    <h3>Ahorro garantizado</h3>
                    <p>Encuentra las mejores ofertas del mercado</p>
                </div>
            </div>
        </section>
    );
}

export default Services;