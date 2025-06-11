import React from 'react';

const MediationIntermediation: React.FC = () => {
  return (
    <div className="service-page mediation-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/images/mediation-hero.jpg" alt="Médiation et Intermédiation" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Médiation</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Intermédiation</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Conflits</span>
                  <span className="badge bg-light text-dark mb-2">Partenariats</span>
                </div>
                <h1 className="mb-3">Résolution et Opportunités : nos services de Médiation et Intermédiation</h1>
                <p className="text-muted mb-4">
                  Par <span className="fw-bold">L'équipe X10</span> - <i className="far fa-calendar-alt"></i> 15/08/2023
                </p>
                <p className="lead mb-4">
                  Notre service de médiation et d'intermédiation vise à faciliter la résolution de conflits et à créer des ponts pour vos opportunités d'affaires et de développement. Nous agissons en tant que tiers neutre pour trouver des solutions amiables et constructives.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Services Détaillés</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Médiation Commerciale :</span> Résolution amiable des conflits entre entreprises ou avec les clients, préservant les relations commerciales.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Intermédiation Financière :</span> Assistance dans la recherche de financements et l'optimisation de vos investissements, avec mise en relation avec des partenaires.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Médiation Sociale :</span> Accompagnement dans les conflits en entreprise, pour un climat de travail apaisé et une meilleure communication.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Intermédiation Stratégique :</span> Facilitation de partenariats stratégiques et développement de réseaux pour l'identification d'opportunités de marché.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir nos services de médiation et d'intermédiation ?</h2>
                <p>
                  Nous offrons une approche neutre, confidentielle et orientée solution pour répondre à vos besoins complexes. Notre expertise garantit des résultats efficaces et durables, en toute discrétion.
                </p>

                <div className="text-center mt-5">
                  <a href="/contact" className="btn btn-primary btn-lg">
                    Demander une consultation
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

export default MediationIntermediation; 