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
                <h1 className="mb-3">Mettez en valeur votre image à travers vos réseaux sociaux : nos services pour particuliers</h1>

                <p className="lead mb-4">
                Vous souhaitez soigner votre image en ligne ou créer des visuels percutants pour vos projets personnels ? L’équipe X10 vous accompagne dans la création de publications attrayantes et de supports visuels qui vous ressemblent. Notre mission : vous aider à vous exprimer avec impact sur les réseaux sociaux et à travers des affiches modernes et professionnelles.
                </p>
                
                <h2 className="h4 mt-5 mb-3">Nos prestations sur mesure</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold"> Accompagnement Réseaux Sociaux :</span> Nous vous aidons à concevoir des posts efficaces, à choisir le bon ton, les bons visuels et hashtags pour capter l’attention de votre public.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Création de Visuels & Affiches:</span> Mariage, anniversaire, évènement associatif ou promotion personnelle : nous créons des affiches originales adaptées à chaque besoin.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Conseil en Communication Personnelle :</span> Vous ne savez pas comment vous présenter en ligne ? Nous vous guidons pour définir une image cohérente et valorisante.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="fw-bold">Contenus Clés en Main:</span> Textes prêts à publier, visuels adaptés à chaque plateforme, modèles réutilisables... vous gagnez du temps, tout en gardant la maîtrise.
                  </li>
                </ul>

                <h2 className="h4 mt-5 mb-3">Pourquoi faire appel à X10 ?</h2>
                <p>
                Parce que chaque personne mérite une communication à son image. Que vous soyez influenceur débutant, porteur de projet ou simple passionné souhaitant partager ses idées de manière impactante, nous mettons notre savoir-faire à votre service pour que chaque publication compte.
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