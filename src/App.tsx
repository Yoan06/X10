import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    // Masquer la barre d'annonce sur les autres pages que l'accueil
    setShowAnnouncement(location.pathname === '/');
    // Ajouter ou retirer la classe du body selon la présence de la barre d'annonce
    if (location.pathname === '/') {
      document.body.classList.add('has-announcement');
      document.body.classList.remove('without-announcement');
    } else {
      document.body.classList.remove('has-announcement');
      document.body.classList.add('without-announcement');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    return () => {
      clearInterval(confettiInterval);
    };
  }, []);

  useEffect(() => {
    const servicePaths = [
      '/services/communication',
      '/services/evenementiel',
      '/services/restauration',
      '/services/mediation-intermediation',
      '/services/import-export',
      '/services/negoce',
    ];
    if (servicePaths.includes(location.pathname)) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
  };

  // Fonction pour vérifier si un lien est actif
  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  // Gestionnaire pour le menu mobile
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  if (isLoading) {
    return <div className="loading-screen">
      <img src="/images/logoX10.jpg" alt="Loading..." className="loading-logo" />
    </div>;
  }

  return (
    <div className="App">
      <div className="event-pattern"></div>
      
      {/* Announcement Bar - uniquement sur la page d'accueil */}
      {showAnnouncement && location.pathname === '/' && (
        <div className="announcement-bar">
          <div className="container">
            <p className="announcement-text">
              <i className="fas fa-bullhorn"></i> Bénéficiez d'une réduction de 10% sur tous nos services
              jusqu'à la fin du mois ! <i className="fas fa-tags"></i>
            </p>
            <button className="close-announcement" onClick={handleCloseAnnouncement}>
              ×
            </button>
          </div>
        </div>
      )}
        
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src="/images/logoX10.jpg" alt="Logo X10" />
          <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        </div>
        <button className="sidebar-toggle-arrow" onClick={toggleSidebar}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <ul className="sidebar-menu">
          <li><Link to="/services/communication" onClick={toggleSidebar} className="dropdown-item">Communication</Link></li>
          <li><Link to="/services/evenementiel" onClick={toggleSidebar} className="dropdown-item">Événementiel</Link></li>
          <li><Link to="/services/restauration" onClick={toggleSidebar} className="dropdown-item">Restauration</Link></li>
          <li><Link to="/services/mediation-intermediation" onClick={toggleSidebar} className="dropdown-item">Médiation et Intermédiation</Link></li>
          <li><Link to="/services/import-export" onClick={toggleSidebar} className="dropdown-item">Import Export</Link></li>
          <li><Link to="/services/negoce" onClick={toggleSidebar} className="dropdown-item">Négoce</Link></li>
        </ul>
      <div className="sidebar-footer"></div>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Navigation avec classe conditionnelle basée sur la présence de la barre d'annonce */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'with-announcement' : 'without-announcement'}`}>
        <div className="container">
          <button className="navbar-toggler sidebar-toggle" type="button" onClick={toggleSidebar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src="/images/logoX10.jpg" alt="Logo X10" className="navbar-logo" />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleNavbarToggle}
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/') ? 'active' : ''}`} to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/services/communication') ? 'active' : ''}`} to="/services/communication">Communication</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/services/evenementiel') ? 'active' : ''}`} to="/services/evenementiel">Événementiel</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/services/restauration') ? 'active' : ''}`} to="/services/restauration">Restauration</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/services/mediation-intermediation') ? 'active' : ''}`} to="/services/mediation-intermediation">Médiation</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/services/import-export') ? 'active' : ''}`} to="/services/import-export">Import Export</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/services/negoce') ? 'active' : ''}`} to="/services/negoce">Négoce</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isLinkActive('/contact') ? 'active' : ''}`} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content with Transitions */}
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="page-transition"
          unmountOnExit
        >
          <main>
            <Routes location={location}>
              <Route path="/" element={
                <>
                  {/* Hero Section */}
                  <section id="home" className="hero-section">
                    <div className="container h-100">
                      <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                          <div className="hero-logo">
                            <img src="/images/logoX10.jpg" alt="Logo X10" className="hero-logo-img" />
                          </div>
                          <p className="lead text-white">Votre partenaire de confiance</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Services Section */}
                  <section id="services" className="service-section">
                    <div className="container">
                    <h2 className="section-title">Nos Services</h2>
                      <div className="row g-4">
                        <div className="col-md-4">
                          <div className="card h-100">
                            <div className="service-image">
                              <img src="/images/communication-hero.jpg" alt="Communication" className="img-fluid" />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">Communication</h5>
                              <p className="card-text">Solutions de communication innovantes pour votre entreprise.</p>
                            <Link className="btn btn-primary" to="/services/communication">En savoir plus</Link>
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
                            <Link className="btn btn-primary" to="/services/evenementiel">En savoir plus</Link>
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
                            <Link className="btn btn-primary" to="/services/restauration">En savoir plus</Link>
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
                            <Link className="btn btn-primary" to="/services/mediation-intermediation">En savoir plus</Link>
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
                            <p className="card-text">Facilitez vos opérations d'import-export avec notre expertise.</p>
                            <Link className="btn btn-primary" to="/services/import-export">En savoir plus</Link>
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
                            <p className="card-text">Solutions de négoce pour optimiser vos transactions commerciales.</p>
                            <Link className="btn btn-primary" to="/services/negoce">En savoir plus</Link>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Contact Section */}
                <section id="contact" className="py-5 bg-dark text-white">
                  <div className="container text-center">
                    <h2 className="section-title text-white">Nous Contacter</h2>
                    <p className="lead">Prêt à discuter de votre projet ? Contactez-nous dès aujourd'hui !</p>
                    <div className="contact-content mt-4">
                      <p><i className="fas fa-map-marker-alt me-2"></i> 123 Rue de l'Exemple, Ville, Pays</p>
                      <p><i className="fas fa-phone me-2"></i> +123 456 7890</p>
                      <p><i className="fas fa-envelope me-2"></i> contact@x10sarl.com</p>
                      <p><i className="fab fa-whatsapp me-2"></i> +123 456 7890</p>
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
          </main>
        </CSSTransition>
      </TransitionGroup>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
          <div className="col-md-4">
            <h5>À Propos</h5>
            <p>X10 est votre partenaire de confiance pour la communication, l'événementiel, et bien plus encore.</p>
            </div>
          <div className="col-md-4">
            <h5>Liens Rapides</h5>
              <ul className="list-unstyled">
                <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services/communication">Services</Link></li>
                <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          <div className="col-md-4">
            <h5>Suivez-nous</h5>
            <ul className="list-unstyled social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
              </ul>
          </div>
        </div>
        <hr />
        <p className="mb-0">&copy; 2023 X10. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

