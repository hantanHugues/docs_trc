import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Application optimisée avec React 18 et les dernières bonnes pratiques.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Interface adaptée à tous les écrans, du mobile au desktop.'
    },
    {
      icon: '🎨',
      title: 'Design Moderne',
      description: 'Interface élégante avec des animations fluides et un design contemporain.'
    },
    {
      icon: '🚀',
      title: 'GitHub Pages',
      description: 'Déploiement automatique et hébergement gratuit sur GitHub Pages.'
    },
    {
      icon: '🔧',
      title: 'Facilement Extensible',
      description: 'Architecture modulaire permettant d\'ajouter facilement de nouvelles fonctionnalités.'
    },
    {
      icon: '💡',
      title: 'Bonnes Pratiques',
      description: 'Code structuré suivant les conventions React et les standards modernes.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2>Fonctionnalités</h2>
          <p>Découvrez ce qui rend cette application spéciale</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
