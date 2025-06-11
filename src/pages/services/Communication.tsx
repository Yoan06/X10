import React from 'react';

const Communication: React.FC = () => {
  return (
    <div className="service-page communication-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/images/communication-hero.jpg" alt="Communication" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Stratégie</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Réseaux Sociaux</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Relations Presse</span>
                  <span className="badge bg-light text-dark mb-2">Contenu</span>
                </div>
                <h1 className="mb-3">Développer une présence forte : nos services de Communication</h1>
                <p className="text-muted mb-4">
                  Par <span className="fw-bold">L'équipe X10</span> - <i className="far fa-calendar-alt"></i> 15/08/2023
                </p>
                <p className="lead mb-4">
                  Notre expertise en communication vous permet de développer une image de marque forte et d'atteindre vos objectifs commerciaux à travers des stratégies innovantes et personnalisées. Nous vous accompagnons pour faire connaître votre entreprise, attirer de nouveaux clients et fidéliser votre audience.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Services Détaillés</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Stratégie de Communication :</span> Développement de plans stratégiques personnalisés pour définir vos messages clés et vos canaux de diffusion.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Gestion des Réseaux Sociaux :</span> Prise en charge de votre présence sur les plateformes sociales, de la création de contenu à l'animation de communauté.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Relations Presse :</span> Établissement et maintien de relations privilégiées avec les médias pour maximiser votre visibilité.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Création de Contenu :</span> Production de textes, images, vidéos et autres supports adaptés à vos besoins et à votre audience.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir nos services de communication ?</h2>
                <p>
                  Nous nous engageons à offrir des solutions de communication qui génèrent des résultats mesurables, en nous appuyant sur une équipe d'experts passionnés et une approche innovante. Chaque stratégie est conçue pour être pertinente et efficace, garantissant un retour sur investissement optimal.
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

export default Communication; 