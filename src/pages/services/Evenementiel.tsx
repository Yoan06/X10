import React from 'react';

const Evenementiel: React.FC = () => {
  return (
    <div className="service-page evenementiel-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/images/evenementiel-hero.jpg" alt="Événementiel" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Organisation</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Lancement</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Séminaires</span>
                  <span className="badge bg-light text-dark mb-2">Team Building</span>
                </div>
                <h1 className="mb-3">Créer des moments inoubliables : nos services Événementiels</h1>
                <p className="text-muted mb-4">
                  Par <span className="fw-bold">L'équipe X10</span> - <i className="far fa-calendar-alt"></i> 15/08/2023
                </p>
                <p className="lead mb-4">
                  Nous transformons vos idées en événements mémorables. Notre expertise en organisation événementielle garantit le succès de vos manifestations professionnelles, des séminaires d'entreprise aux lancements de produits spectaculaires.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Services Détaillés</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Séminaires d'Entreprise :</span> Organisation complète de vos séminaires, incluant le choix du lieu, la logistique, et l'animation.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Conférences :</span> Gestion de vos événements de conférence, de la programmation à l'accueil des participants et au support technique.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Team Building :</span> Activités de renforcement d'équipe personnalisées pour stimuler la cohésion et la motivation.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Lancements de Produits :</span> Création d'événements impactants pour le lancement de vos nouveaux produits ou services.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir nos services événementiels ?</h2>
                <p>
                  Nous mettons un point d'honneur à la créativité, à la précision et à l'innovation pour chaque événement. Notre équipe expérimentée assure une planification sans faille et une exécution parfaite, vous permettant de vous concentrer sur vos invités.
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

export default Evenementiel; 