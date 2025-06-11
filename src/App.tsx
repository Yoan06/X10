import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Communication from './pages/services/Communication';
import Evenementiel from './pages/services/Evenementiel';
import Restauration from './pages/services/Restauration';
import MediationIntermediation from './pages/services/MediationIntermediation';
import ImportExport from './pages/services/ImportExport';
import Negoce from './pages/services/Negoce';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Créer des confettis
    const createConfetti = () => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(confetti);

      // Supprimer le confetti après l'animation
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    };

    // Créer des confettis toutes les 300ms
    const confettiInterval = setInterval(createConfetti, 300);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Animation des sections au défilement
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier l'état initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(confettiInterval);
    };
  }, [scrolled]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className="event-pattern"></div>
        
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <img src="/images/logoX10.jpg" alt="Logo X10" />
            <button className="close-sidebar" onClick={toggleSidebar}>×</button>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/" onClick={toggleSidebar}>Accueil</Link></li>
            <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
            <li><Link to="/about" onClick={toggleSidebar}>À propos</Link></li>
          </ul>
          <div className="sidebar-footer">
           {/* <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>*/}
            
          </div>
        </div>

        {/* Overlay */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

        {/* Navigation */}
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <button className="navbar-toggler sidebar-toggle" type="button" onClick={toggleSidebar}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <img src="/images/logoX10.jpg" alt="Logo X10" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">À propos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section id="home" className="hero-section">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                      <h1 className="display-4 text-white">X10</h1>
                      <p className="lead text-white">Votre partenaire de confiance</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="py-5">
                <div className="container">
                  <h2 className="text-center mb-5">Nos Services</h2>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="service-image">
                          <img src="/images/communication-hero.jpg" alt="Communication" className="img-fluid" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Communication</h5>
                          <p className="card-text">Solutions de communication innovantes pour votre entreprise.</p>
                          <Link to="/services/communication" className="btn btn-primary">En savoir plus</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="service-image">
                          <img src="/images/evenementiel-hero.jpg" alt="Événementiel" className="img-fluid" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Événementiel</h5>
                          <p className="card-text">Organisation d'événements professionnels sur mesure.</p>
                          <Link to="/services/evenementiel" className="btn btn-primary">En savoir plus</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="service-image">
                          <img src="/images/restauration-hero.jpg" alt="Restauration" className="img-fluid" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Restauration</h5>
                          <p className="card-text">Services de restauration de qualité pour vos événements.</p>
                          <Link to="/services/restauration" className="btn btn-primary">En savoir plus</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="service-image">
                          <img src="/images/mediation-hero.jpg" alt="Médiation" className="img-fluid" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Médiation et Intermédiation</h5>
                          <p className="card-text">Solutions de médiation professionnelle pour vos projets.</p>
                          <Link to="/services/mediation-intermediation" className="btn btn-primary">En savoir plus</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="service-image">
                          <img src="/images/import-export-hero.jpg" alt="Import Export" className="img-fluid" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Import Export</h5>
                          <p className="card-text">Services d'import-export adaptés à vos besoins.</p>
                          <Link to="/services/import-export" className="btn btn-primary">En savoir plus</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="service-image">
                          <img src="/images/negoce-hero.jpg" alt="Négoce" className="img-fluid" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Négoce</h5>
                          <p className="card-text">Solutions de négoce professionnelles et fiables.</p>
                          <Link to="/services/negoce" className="btn btn-primary">En savoir plus</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-5 bg-light">
                <div className="container">
                  <h2 className="text-center mb-5">Contactez-nous</h2>
                  <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                      <div className="contact-content">
                        <h3 className="mb-4">Planifiez votre événement</h3>
                        <p className="mb-4">Cliquez sur le bouton ci-dessous pour accéder à notre calendrier Luma et réserver un créneau qui vous convient.</p>
                        <a href="https://lu.ma/votre-lien-luma" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-calendar-alt me-2"></i>
                          Réserver un rendez-vous
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/services/communication" element={<Communication />} />
          <Route path="/services/evenementiel" element={<Evenementiel />} />
          <Route path="/services/restauration" element={<Restauration />} />
          <Route path="/services/mediation-intermediation" element={<MediationIntermediation />} />
          <Route path="/services/import-export" element={<ImportExport />} />
          <Route path="/services/negoce" element={<Negoce />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">X10</h5>
                <p className="mt-3">
                  Votre partenaire de confiance pour tous vos besoins en communication, événementiel, restauration et plus encore.
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Liens rapides</h5>
                <ul className="list-unstyled">
                  <li><Link to="/">Accueil</Link></li>
                  <li><a href="#services">Services</a></li>
                  <li><Link to="/about">À propos</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact</h5>
                <ul className="list-unstyled">
                  <li><i className="fas fa-map-marker-alt"></i> 123 Rue Example, Ville</li>
                  <li><i className="fas fa-phone"></i> +33 1 23 45 67 89</li>
                  <li><i className="fas fa-envelope"></i> contact@x10.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
