import React from 'react';

const Transfert: React.FC = () => {
  return (
    <div className="service-page transfert-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="/images/transfert-argent.jpg"
                  alt="Service de transfert d'argent"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap mb-3">
                  <span className="badge bg-light text-dark me-2 mb-2">Transferts</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Afrique</span>
                  <span className="badge bg-light text-dark me-2 mb-2">Europe</span>
                  <span className="badge bg-light text-dark mb-2">Échanges de devises</span>
                </div>

                <h1 className="mb-3">Services de Transfert & Échange</h1>

                <p className="lead mb-4">
                  Envie d’envoyer de l’argent rapidement et en toute sécurité à vos proches à l’étranger ?  
                  <strong>Les Délices des Mains d’Or</strong>, ce n’est pas que de la restauration : c’est aussi un service fiable d’échanges et de transferts d'argent vers l’Afrique et l’Europe.
                </p>

                <h2 className="h4 mt-5 mb-3">Nos Services</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Transfert d'argent :</strong> vers de nombreux pays d’Afrique (Côte d’Ivoire, Sénégal, Mali, Burkina Faso, RDC, etc.) et en Europe.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Échange de devises :</strong> FCFA, euro, dirham et autres monnaies locales selon disponibilité.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Suivi personnalisé :</strong> nous vous accompagnons à chaque étape pour garantir la sécurité et la rapidité de vos transactions.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <strong>Fiabilité et transparence :</strong> taux de change clairs et délais respectés.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">À qui s’adressent nos services ?</h2>
                <p>
                  Nos services s’adressent à toutes les personnes :
                </p>
                <ul>
                  <li>Souhaitant soutenir leur famille à l’étranger</li>
                  <li>Effectuant des achats ou paiements intercontinentaux</li>
                  <li>Ayant besoin de convertir ou transférer des devises de manière sécurisée</li>
                </ul>

                <div className="text-center mt-5">
                  <a href="tel:+212766340101" className="btn btn-primary btn-lg">
                    Nous contacter pour un transfert
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

export default Transfert;
