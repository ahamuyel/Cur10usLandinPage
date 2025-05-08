// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Slogan da Cur10usX </h2>
        <p>Um texto descritivo.</p>
        <a href="#about" className="btn-primary">Saiba Mais</a>
      </div>
    </section>
  );
}

export default Hero;
