import React from 'react';

const About = () => {
    return (
        <section id="nosotros" className="section">
            <div className="section-title">
                <h2>Sobre</h2>
                <h1>Nosotros</h1>
            </div>
            <div className="_grid">
                <div className="_cards" data-aos="fade-up-right">
                    <h3>Misión</h3>
                    <p>Simplificar el proceso de contratación de servicios de telecomunicaciones, permitiendo a los
                        usuarios elegir el proveedor más adecuado a sus necesidades.</p>
                </div>
                <div className="_cards" data-aos="zoom-in-left">
                    <h3>Visión</h3>
                    <p>Ser la plataforma líder en la comparación de proveedores de telecomunicaciones, ofreciendo
                        decisiones rápidas y seguras.</p>
                </div>
            </div>
        </section>
    );
}

export default About;