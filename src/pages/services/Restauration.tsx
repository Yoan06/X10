import React from 'react';

const Restauration: React.FC = () => {
  return (
    <div className="service-page restauration-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="/images/restauration.jpg"
                  alt="Restaurant Les Délices des Mains d’Or"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Cuisine Ivoirienne</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Alloco</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Attiéké</span>
                  <span className="badge bg-light text-dark mb-2">Grillades</span>
                </div>

                <h1 className="mb-3">Les Délices des Mains d’Or</h1>

                <p className="lead mb-4">
                  Bienvenue chez <strong>Les Délices des Mains d’Or</strong>, votre restaurant à Casablanca spécialisé dans la cuisine ivoirienne et africaine. Un lieu où authenticité, convivialité et saveurs se rencontrent autour de plats faits maison, généreux et épicés à souhait.
                </p>

                <h2 className="h4 mt-5 mb-3">Un menu riche en goûts</h2>
                <ul className="mb-4">
                  <li>Grillades savoureuses : poulet, poisson, croupion, dinde</li>
                  <li>Sauces traditionnelles : graine, arachide, gombo, aubergine...</li>
                  <li>Plats mijotés : Kedjenou, Choukouya, Braisé, Sauté</li>
                  <li>Accompagnements : attiéké, riz, alloco, patate</li>
                  <li>Jus maison : bissap, gingembre, tamarin, dégué</li>
                </ul>

                <p>
                  Que vous soyez amateur de plats épicés, de sauces onctueuses ou de grillades bien assaisonnées, vous trouverez toujours votre bonheur chez nous.
                </p>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir notre restaurant ?</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Produits frais et recettes maison cuisinées avec passion.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Ambiance chaleureuse, parfaite pour les repas en famille ou entre amis.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Commande possible sur place, à emporter ou par téléphone.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Offres spéciales durant les fêtes comme l’Aïd et autres événements.
                  </li>
                </ul>

                <div className="text-center mt-5">
                  <a href="tel:+212766340101" className="btn btn-primary btn-lg">
                    Commander ou réserver une table
                  </a>
                </div>

                <p className="text-muted mt-3 text-center">
                  📍 Rue Libourne, La Gironde – Casablanca | ☎️ +212 7 6634 0101 / +212 6 5314 3308
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restauration;
