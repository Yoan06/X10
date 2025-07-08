import React from 'react';
import HebergementImage from '../../images/hebergementpage.png';

const Hebergement: React.FC = () => {
  return (
    <div className="service-page hebergement-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0 hebergement-image-container">
                <img src={HebergementImage} alt="Hébergement" className="img-fluid rounded hebergement-hero-img" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Hôtels</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Appartements</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Villas</span>
                  <span className="badge bg-light text-dark mb-2">Courte durée</span>
                </div>
                <h1 className="mb-3">Hébergement : Trouvez votre havre de paix</h1>

                <p className="lead mb-4">
                Que vous soyez en voyage d'affaires, en vacances en famille ou en escapade romantique, X10 vous propose une sélection d'hébergements de qualité, adaptés à vos besoins et à votre budget. Profitez d'un confort optimal et d'une expérience inoubliable.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos solutions d'hébergement</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Hôtels de Luxe :</span> Séjournez dans les établissements les plus prestigieux avec des services haut de gamme.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Appartements Meublés :</span> Des solutions flexibles pour les séjours de courte ou longue durée, avec tout le confort d'un foyer.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Villas & Maisons de Vacances :</span> Idéales pour les familles ou les groupes, profitez d'intimité et d'espace.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Hébergements Économiques :</span> Des options abordables sans compromis sur la qualité et la propreté.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi choisir X10 pour votre hébergement ?</h2>
                <p>
                Nous sélectionnons rigoureusement nos partenaires pour vous garantir des hébergements de qualité, un service client irréprochable et des tarifs compétitifs. Votre confort et votre satisfaction sont notre priorité.
                </p>

                <div className="text-center mt-5">
                  <a href="/contact" className="btn btn-primary btn-lg">
                    Réserver votre séjour
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

export default Hebergement; 