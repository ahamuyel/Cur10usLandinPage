// src/components/Features.jsx
import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features">
      <div className="features-title">
        <h2>Recursos</h2>
        <p>O que torna a CuriousX única?</p>
      </div>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Recurso</h3>
          <p>Descricao do recurso</p>
        </div>
        <div className="feature-item">
          <h3>Recurso</h3>
          <p>Descricao do recurso</p>
        </div>
        <div className="feature-item">
          <h3>Recurso</h3>
          <p>Descricao do recurso</p>
        </div>
        <div className="feature-item">
          <h3>Recurso</h3>
          <p>Descricao do recurso</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
