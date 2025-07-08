import React from 'react';
import transportpage from '../../images/transportpage.jpg';

const Transport: React.FC = () => {
  return (
    <div className="service-page transport-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0 transport-image-container">
                <img src={transportpage} alt="Transport" className="img-fluid rounded transport-hero-img" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Logistique</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Voyages</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Livraison</span>
                  <span className="badge bg-light text-dark mb-2">Navettes</span>
                </div>
                <h1 className="mb-3">Transport : Déplacements fiables et logistique efficace</h1>

                <p className="lead mb-4">
                X10 vous offre des solutions de transport adaptées à tous vos besoins, qu'il s'agisse de déplacements personnels, de logistique pour événements, ou de livraison de marchandises. Nous garantissons sécurité, confort et ponctualité.
                </p>
                <h2 className="h4 mt-5 mb-3">Un service de transport sur mesure pour chaque client</h2>
                <p className="lead mb-4">
                Notre mission est de simplifier vos déplacements et votre logistique en vous proposant des véhicules modernes et des chauffeurs expérimentés. Profitez d'un service personnalisé qui répond à vos attentes spécifiques.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Services Détaillés</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Transport de Personnes :</span> Navettes aéroport, transferts privés, et mise à disposition de véhicules avec chauffeur pour vos événements et déplacements quotidiens.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Transport de Marchandises : </span> Solutions logistiques complètes, du petit colis aux marchandises volumineuses, avec suivi en temps réel et respect des délais.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Location de Véhicules : </span> Une flotte variée de véhicules adaptés à vos besoins, avec ou sans chauffeur, pour une flexibilité maximale.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Voyages Organisés :</span> Circuits touristiques, excursions et voyages d'affaires, planifiés avec soin pour une expérience inoubliable.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir nos services de transport ?</h2>
                <p>
                  Nous nous engageons sur la ponctualité, la sécurité et la satisfaction client. Notre expertise logistique et notre flotte moderne nous permettent de répondre à toutes vos exigences de transport avec efficacité et professionnalisme.
                </p>

                <div className="text-center mt-5">
                  <a href="/contact" className="btn btn-primary btn-lg">
                    Demander un devis personnalisé
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport; 