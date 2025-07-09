import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './images/logoX10.jpg';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Transport from './pages/services/Transport';
import Hebergement from './pages/services/Hebergement';
import Restauration from './pages/services/Restauration';
import Ticket from './pages/services/Ticket';
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

  // Effet pour le scroll au rafraîchissement
  useEffect(() => {
    // Scroll instantané au chargement initial
    window.scrollTo(0, 0);

    // Gestionnaire d'événement pour le rafraîchissement
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
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
              <i className="fas fa-bullhorn"></i> X10, votre partenaire unique pour bouger, savourer et vibrer au rythme des plus grands événements. <i className="fas fa-tags"></i>
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
          <Link to="/">
            <img src={logo} alt="Logo X10" />
          </Link>
          <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        </div>
        <button className="sidebar-toggle-arrow" onClick={toggleSidebar}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <ul className="sidebar-menu">
          <li><Link to="/services/hebergement" onClick={toggleSidebar} className="dropdown-item">Hébergement</Link></li>
          <li><Link to="/services/transport" onClick={toggleSidebar} className="dropdown-item">Transport</Link></li>
          <li><Link to="/services/restauration" onClick={toggleSidebar} className="dropdown-item">Restauration</Link></li>
          <li><Link to="/services/ticket" onClick={toggleSidebar} className="dropdown-item">Ticket</Link></li>
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
      <PageTransition>
        <main className="main-content">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services/*">
              <Route path="hebergement" element={<Hebergement />} />
              <Route path="transport" element={<Transport />} />
              <Route path="restauration" element={<Restauration />} />
              <Route path="ticket" element={<Ticket />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            {/* Redirection par défaut vers la page d'accueil */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </PageTransition>

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
                  X10 est votre partenaire de confiance pour tous vos besoins.
                  Nous nous engageons à fournir des services de qualité.
                </p>
              </div>

              <div className="footer-section">
                <h3>Nos Services</h3>
                <ul className="footer-links">
                  <li><Link to="/services/hebergement">Hébergement</Link></li>
                  <li><Link to="/services/transport">Transport</Link></li>
                  <li><Link to="/services/restauration">Restauration</Link></li>
                  <li><Link to="/services/ticket">Ticket</Link></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Contact</h3>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    46, BD ZERKTOUNI ETG5 N17<br />CASABLANCA, MAROC
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <div className="phone-numbers">
                      <span>🇲🇦 +212 763 733 633</span><br />
                      <span>🇨🇮 +225 07 02 20 91 15</span>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    entreprisex10sarl@gmail.com
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

