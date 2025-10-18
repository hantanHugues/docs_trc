import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🚀 ReactApp</h3>
            <p>Une application React moderne hébergée sur GitHub Pages.</p>
          </div>
          
          <div className="footer-section">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a></li>
              <li><a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a></li>
              <li><a href="https://create-react-app.dev" target="_blank" rel="noopener noreferrer">Create React App</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 contact@example.com</p>
            <p>🌐 github.com/votre-username</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ReactApp. Créé avec ❤️ et React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
