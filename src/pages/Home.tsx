import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logoX10.jpg';
import heroBg from '../images/hero-bg.jpg';
import canStadium from '../images/can-stadium.jpg';
import X10FondPage from '../images/X10FONDPAGE.jpg';

import HebergementImage from '../images/Hebergement.png';
import RestaurationImage from '../images/Restauration.png';
import TicketImage from '../images/Ticket.png';
import TransportImage from '../images/Transport.png';

const services = [
  {
    id: 1,
    title: "Hébergement",
    description: "Des solutions d'hébergement adaptées à tous vos besoins.",
    image: HebergementImage,
    path: "/services/hebergement"
  },
  {
    id: 2,
    title: "Transport",
    description: "Services de transport fiables et efficaces pour vos déplacements.",
    image: TransportImage,
    path: "/services/transport"
  },
  {
    id: 3,
    title: "Restauration",
    description: "Services de restauration haut de gamme pour vos événements",
    image: RestaurationImage,
    path: "/services/restauration"
  },
  {
    id: 4,
    title: "Ticket",
    description: "Facilitez l'accès à vos événements et services avec nos solutions de billetterie.",
    image: TicketImage,
    path: "/services/ticket"
  }
];

const Home: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(canStadium);

  useEffect(() => {
    const images = [canStadium, X10FondPage];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentBg(images[currentIndex]);
    }, 10000); // Change toutes les 10 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section avec Design Mixte */}
      <section className="hero-mixed">
        <div className="hero-background" style={{ backgroundImage: `url(${currentBg})` }}>
          <div className="stadium-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo-container">
            <img src={logo} alt="Logo X10" className="main-logo" />
          </div>
          <p className="hero-tagline">Votre partenaire de confiance pour tous vos besoins professionnels</p>
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