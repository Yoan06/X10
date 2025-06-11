import React from 'react';

const ImportExport: React.FC = () => {
  return (
    <div className="service-page import-export-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/images/import-export-hero.jpg" alt="Import Export" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Logistique</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Douanes</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Sourcing</span>
                  <span className="badge bg-light text-dark mb-2">Distribution</span>
                </div>
                <h1 className="mb-3">Faciliter les échanges mondiaux : nos services d'Import Export</h1>
                <p className="text-muted mb-4">
                  Par <span className="fw-bold">L'équipe X10</span> - <i className="far fa-calendar-alt"></i> 15/08/2023
                </p>
                <p className="lead mb-4">
                  Nous simplifions vos opérations d'importation et d'exportation, en vous offrant des solutions complètes et sur mesure pour développer votre commerce international. De la logistique aux formalités douanières, nous gérons l'ensemble du processus.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos Services Détaillés</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Conseil en Stratégie :</span> Analyse de marché, identification d'opportunités et élaboration de stratégies d'entrée sur de nouveaux marchés.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Gestion Logistique :</span> Optimisation de la chaîne d'approvisionnement, gestion des transports et des douanes pour un flux sans accroc.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Sourcing et Approvisionnement :</span> Recherche de fournisseurs fiables et négociation des meilleures conditions pour vos importations.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Distribution et Vente :</span> Mise en place de réseaux de distribution efficaces et support commercial pour vos exportations.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir nos services d'Import Export ?</h2>
                <p>
                  Notre expertise et notre réseau international garantissent des transactions fluides et rentables. Nous vous aidons à naviguer dans la complexité du commerce international pour maximiser votre succès.
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

export default ImportExport; 