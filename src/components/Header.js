import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h2>🚀 ReactApp</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#features">Fonctionnalités</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
