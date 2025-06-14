import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './images/logoX10.jpg';
import Home from './pages/Home';
import Communication from './pages/services/Communication';
import Evenementiel from './pages/services/Evenementiel';
import Restauration from './pages/services/Restauration';
import MediationIntermediation from './pages/services/MediationIntermediation';
import ImportExport from './pages/services/ImportExport';
import Negoce from './pages/services/Negoce';
import Contact from './pages/Contact';

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
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>;
  }

  return (
    <div className="App">
      <div className="event-pattern"></div>
      
      {/* Announcement Bar - visible sur toutes les pages */}
      {showAnnouncement && (
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
          <img src={logo} alt="Logo X10" />
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

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'with-announcement' : 'without-announcement'}`}>
        <div className="container">
          <div className="navbar-brand-center">
            <Link className="navbar-brand" to="/">
              <div className="logo-container">
                <img src={logo} alt="Logo X10" className="navbar-logo" />
                <div className="logo-glow"></div>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content avec Transitions */}
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="page-transition"
          unmountOnExit
        >
          <main className="main-content">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services/*">
                <Route path="communication" element={<Communication />} />
                <Route path="evenementiel" element={<Evenementiel />} />
                <Route path="restauration" element={<Restauration />} />
                <Route path="mediation-intermediation" element={<MediationIntermediation />} />
                <Route path="import-export" element={<ImportExport />} />
                <Route path="negoce" element={<Negoce />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              {/* Redirection par défaut vers la page d'accueil */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </CSSTransition>
      </TransitionGroup>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Logo X10" className="footer-logo-img" />
            </div>
            
            <div className="footer-grid">
              <div className="footer-section">
                <h3>À propos de X10</h3>
                <p>
                  X10 est votre partenaire de confiance pour tous vos besoins professionnels.
                  Nous nous engageons à fournir des services de qualité et des solutions innovantes.
                </p>
              </div>

              <div className="footer-section">
                <h3>Nos Services</h3>
                <ul className="footer-links">
                  <li><Link to="/services/communication">Communication</Link></li>
                  <li><Link to="/services/evenementiel">Événementiel</Link></li>
                  <li><Link to="/services/restauration">Restauration</Link></li>
                  <li><Link to="/services/mediation-intermediation">Médiation</Link></li>
                  <li><Link to="/services/import-export">Import Export</Link></li>
                  <li><Link to="/services/negoce">Négoce</Link></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Contact</h3>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    123 Rue du Commerce<br />75001 Paris, France
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    +33 1 23 45 67 89
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    contact@x10.com
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Suivez-nous</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-info">
                <p>&copy; 2024 X10. Tous droits réservés.</p>
              </div>
              <div className="footer-legal">
                <Link to="/mentions-legales">Mentions légales</Link>
                <Link to="/politique-confidentialite">Politique de confidentialité</Link>
                <Link to="/cgv">CGV</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

