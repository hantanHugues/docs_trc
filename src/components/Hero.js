import React from 'react';
import './Hero.css';

const Hero = ({ count, setCount }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenue sur mon App React
          </h1>
          <p className="hero-subtitle">
            Une application moderne hébergée sur GitHub Pages avec une interface élégante et responsive.
          </p>
          
          <div className="counter-section">
            <h3>Compteur interactif</h3>
            <div className="counter">
              <button 
                className="btn btn-secondary" 
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <span className="count-display">{count}</span>
              <button 
                className="btn" 
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#features" className="btn">
              Découvrir les fonctionnalités
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
