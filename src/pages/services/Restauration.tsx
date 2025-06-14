import React from 'react';

const Restauration: React.FC = () => {
  return (
    <div className="page-container restauration-page">
      {/* Header de la page */}
      <section className="page-header">
        <div className="container text-center">
          <h1>Service de Restauration</h1>
          <p className="lead">Une expérience culinaire exceptionnelle pour vos événements</p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="page-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="service-illustration">
                  <img src="/images/restauration-detail.jpg" alt="Service de Restauration" />
                </div>
                <h2>Notre Expertise en Restauration</h2>
                <p>
                  Nous proposons des services de restauration haut de gamme adaptés à tous types d'événements.
                  Notre équipe de chefs expérimentés crée des menus personnalisés qui raviront vos convives.
                </p>
              </div>
            </div>

            <div className="feature-list mt-5">
              <h3>Nos Services Comprennent</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-item">
                    <h4>Traiteur Événementiel</h4>
                    <p>Service traiteur professionnel pour vos événements d'entreprise et cérémonies</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item">
                    <h4>Cocktails & Réceptions</h4>
                    <p>Organisation de cocktails et réceptions avec un service impeccable</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item">
                    <h4>Cuisine sur Mesure</h4>
                    <p>Menus personnalisés selon vos préférences et restrictions alimentaires</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item">
                    <h4>Service Complet</h4>
                    <p>Personnel de service qualifié et équipement professionnel inclus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des caractéristiques */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Pourquoi Choisir Notre Service de Restauration ?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-card">
                <h3>Qualité Premium</h3>
                <p>Ingrédients frais et de première qualité pour des plats exceptionnels</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <h3>Flexibilité</h3>
                <p>Adaptation à vos besoins spécifiques et à votre budget</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <h3>Professionnalisme</h3>
                <p>Une équipe expérimentée à votre service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section de contact */}
      <section className="contact-section">
        <div className="container text-center">
          <h2>Intéressé par nos Services de Restauration ?</h2>
          <p>Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé</p>
          <button className="action-button mt-4">Demander un Devis</button>
        </div>
      </section>
    </div>
  );
};

export default Restauration; 