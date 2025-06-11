import React from 'react';

const Negoce: React.FC = () => {
  return (
    <div className="service-page negoce-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/images/negoce-hero.jpg" alt="Négoce" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Matières Premières</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Produits Manufacturés</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Marché</span>
                  <span className="badge bg-light text-dark mb-2">Distribution</span>
                </div>
                <h1 className="mb-3">Optimiser les échanges : nos services de Négoce</h1>
                <p className="text-muted mb-4">
                  Par <span className="fw-bold">L'équipe X10</span> - <i className="far fa-calendar-alt"></i> 15/08/2023
                </p>
                <p className="lead mb-4">
                  Notre service de négoce vous offre des solutions complètes pour l'achat et la vente de biens, en maximisant votre rentabilité et en minimisant les risques. Nous vous accompagnons sur l'ensemble de la chaîne de valeur, de l'approvisionnement à la distribution.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Services Détaillés</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Négoce de Matières Premières :</span> Achat et vente de matières premières avec une expertise approfondie du marché mondial.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Négoce de Produits Manufacturés :</span> Distribution et commercialisation de produits finis et semi-finis avec un réseau étendu.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Conseil en Stratégie de Négoce :</span> Accompagnement personnalisé pour optimiser vos opérations et identifier les meilleures opportunités.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Gestion des Opérations :</span> Prise en charge complète de vos transactions, incluant le contrôle qualité et le suivi logistique.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir nos services de négoce ?</h2>
                <p>
                  Nous combinons une connaissance approfondie du marché, un réseau étendu et une gestion rigoureuse pour garantir le succès de vos opérations de négoce. Notre objectif est de maximiser votre performance tout en minimisant les risques.
                </p>

                <div className="text-center mt-5">
                  <a href="/contact" className="btn btn-primary btn-lg">
                    Demander une consultation personnalisée
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

export default Negoce; 