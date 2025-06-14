import React from 'react';
import { Link } from 'react-router-dom';

const Restauration: React.FC = () => {
  return (
    <div className="service-page restauration-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/images/restauration-hero.jpg" alt="Restauration" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Traiteur</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Buffets</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Cocktails</span>
                  <span className="badge bg-light text-dark mb-2">Événements</span>
                </div>
                <h1 className="mb-3">Saveurs d'exception : nos services de Restauration événementielle</h1>
                <p className="text-muted mb-4">
                  Par <span className="fw-bold">L'équipe X10</span> - <i className="far fa-calendar-alt"></i> 15/08/2023
                </p>
                <p className="lead mb-4">
                  Découvrez notre service de restauration événementielle de qualité, adapté à tous vos besoins et occasions spéciales. Nous vous offrons une expérience culinaire inoubliable, de la conception des menus à la mise en œuvre, pour faire de votre événement un succès gustatif.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Offres de Restauration</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-utensils text-success me-2"></i>
                    <span className="fw-bold">Traiteurs Professionnels :</span> Service de restauration haut de gamme pour vos événements, avec cuisine sur place et options personnalisées.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-utensils text-success me-2"></i>
                    <span className="fw-bold">Buffets sur Mesure :</span> Buffets adaptés à vos besoins et à votre budget, avec menus personnalisés et service de qualité.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-utensils text-success me-2"></i>
                    <span className="fw-bold">Service de Bar :</span> Bar professionnel pour vos événements, avec barmans expérimentés et cocktails signature.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-utensils text-success me-2"></i>
                    <span className="fw-bold">Options Spéciales :</span> Solutions adaptées à tous les régimes et thèmes, incluant cuisine internationale et événements thématiques.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Nos Menus Phares</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-concierge-bell text-info me-2"></i>
                    <span className="fw-bold">Menu Business :</span> Idéal pour les réunions et séminaires (à partir de 25€/personne).
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-concierge-bell text-info me-2"></i>
                    <span className="fw-bold">Menu Premium :</span> Pour les événements importants (à partir de 45€/personne).
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-concierge-bell text-info me-2"></i>
                    <span className="fw-bold">Menu Événementiel :</span> Pour les grands événements (sur devis).
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Nos Engagements Qualité</h2>
                <p>
                  Nous nous engageons à utiliser des ingrédients frais et de saison, à respecter les délais de service et à garantir la satisfaction totale de nos clients. La qualité est au cœur de chacune de nos prestations.
                </p>

                <div className="text-center mt-5">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Demander un devis personnalisé
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restauration; 