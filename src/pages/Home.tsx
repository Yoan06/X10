import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logoX10.jpg';
import heroBg from '../images/hero-bg.jpg';
import canStadium from '../images/can-stadium.jpg';

// Import des images temporaires (à remplacer par vos images)
import communicationTemp from '../images/communication-temp.jpg';
import evenementielTemp from '../images/evenementiel-temp.jpg';
import restaurationTemp from '../images/restauration-temp.jpg';
import mediationTemp from '../images/mediation-temp.jpg';
import importExportTemp from '../images/import-export-temp.jpg';
import negoceTemp from '../images/negoce-temp.jpg';

const services = [
  {
    id: 1,
    title: "Communication",
    description: "Stratégies de communication innovantes et efficaces pour votre entreprise",
    image: heroBg,
    path: "/services/communication"
  },
  {
    id: 2,
    title: "Événementiel",
    description: "Organisation d'événements professionnels sur mesure",
    image: heroBg,
    path: "/services/evenementiel"
  },
  {
    id: 3,
    title: "Restauration",
    description: "Services de restauration haut de gamme pour vos événements",
    image: heroBg,
    path: "/services/restauration"
  },
  {
    id: 4,
    title: "Médiation",
    description: "Solutions de médiation professionnelle pour vos besoins",
    image: heroBg,
    path: "/services/mediation-intermediation"
  },
  {
    id: 5,
    title: "Import Export",
    description: "Services d'import-export internationaux",
    image: heroBg,
    path: "/services/import-export"
  },
  {
    id: 6,
    title: "Négoce",
    description: "Solutions de négoce adaptées à vos besoins commerciaux",
    image: heroBg,
    path: "/services/negoce"
  }
];

const Home: React.FC = () => {
  return (
    <div className="page-container">
      {/* Hero Section avec Design Mixte */}
      <section className="hero-mixed">
        <div className="hero-background">
          <div className="stadium-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo-container">
            <img src={logo} alt="Logo X10" className="main-logo" />
          </div>
          <p className="hero-tagline">Votre partenaire de confiance pour tous vos besoins professionnels</p>
          <Link to="/services" className="action-button">Découvrir nos services</Link>
        </div>
      </section>

      {/* Services Section avec Nouveau Design */}
      <section className="services-section">
        <div className="services-background"></div>
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Nos Services</h2>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="service-action">
                    <Link to={service.path} className="service-button">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section avec Nouveau Design */}
      <section className="contact-section">
        <div className="contact-background"></div>
        <div className="container text-center">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="contact-tagline">Prêt à démarrer votre projet avec nous ?</p>
          <Link to="/contact" className="action-button contact-button">Nous contacter</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 