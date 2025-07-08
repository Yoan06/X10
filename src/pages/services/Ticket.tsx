import React from 'react';
import TicketImage from '../../images/Ticket.png';

const Ticket: React.FC = () => {
  return (
    <div className="service-page ticket-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0 ticket-image-container">
                <img
                  src={TicketImage}
                  alt="Vente de billets pour matchs de football"
                  className="img-fluid rounded ticket-hero-img"
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Billets</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Football</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Événements sportifs</span>
                  <span className="badge bg-light text-dark mb-2">Expérience VIP</span>
                </div>

                <h1 className="mb-3">Vos billets pour les matchs de football : Vivez l'émotion du stade !</h1>

                <p className="lead mb-4">
                  X10 est votre partenaire privilégié pour l'achat de billets de matchs de football. Que ce soit pour les ligues locales, les compétitions internationales ou les tournois majeurs, nous vous offrons un accès facile et sécurisé aux meilleures places pour vibrer au rythme du ballon rond.
                </p>

                <h2 className="h4 mt-5 mb-3">Une expérience footballistique inoubliable</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Accès Prioritaire :</strong> Obtenez vos billets avant tout le monde pour les matchs les plus prisés.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Sièges Premium :</strong> Profitez des meilleures vues sur le terrain pour ne rien manquer de l'action.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Packages VIP :</strong> Découvrez nos offres exclusives incluant hospitalité, accès lounge et rencontres avec des légendes du football.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Billets Garantis :</strong> Achetez en toute confiance, vos billets sont authentiques et garantis.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Comment ça marche ?</h2>
                <p>
                  Parcourez notre sélection de matchs, choisissez vos places, et recevez vos billets directement par e-mail ou sur notre application sécurisée. C'est simple, rapide et fiable !
                </p>

                <div className="text-center mt-5">
                  <a href="/contact" className="btn btn-primary btn-lg">
                    Réserver vos billets
                  </a>
                </div>

                <p className="text-muted mt-3 text-center">
                  Préparez-vous à chanter et à encourager votre équipe !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
