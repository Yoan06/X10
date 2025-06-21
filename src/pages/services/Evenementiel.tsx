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
                <h1 className="mb-3">Créer des moments inoubliables : nos services bien-être & événementiels</h1>

                <p className="lead mb-4">
                Offrez-vous bien plus qu’un simple séjour : X10 vous propose des prestations sur mesure pour prendre soin de vous, que ce soit pour des vacances reposantes, un moment de bien-être en famille, ou une escapade ressourçante.
                </p>
                <h2 className="h4 mt-5 mb-3">Un accompagnement personnalisé pour vos vacances
                </h2>
                <p className="lead mb-4">
                Notre mission : faire de votre séjour une expérience unique, mêlant détente, confort et attention. Nous vous accompagnons à chaque étape pour que vous puissiez vous relâcher pleinement.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Services Détaillés</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Séjours Bien-Être :</span> Hébergements confortables, soins relaxants, activités douces et cuisine équilibrée pour un repos complet.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Accompagnement personnalisé : </span> Un suivi adapté pour les personnes seules, âgées ou ayant des besoins spécifiques, avec bienveillance et professionnalisme.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Événements sur-mesure : </span> Organisation d’anniversaires, célébrations privées ou petites réceptions, dans des cadres chaleureux et conviviaux.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Loisirs & Activités :</span> Excursions, ateliers créatifs, animations douces et activités culturelles selon vos envies.
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