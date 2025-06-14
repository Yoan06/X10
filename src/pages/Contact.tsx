import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero animate-fade-in">
        <div className="contact-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="animate-slide-down">Contactez-nous</h1>
          <p className="animate-slide-up">Nous sommes là pour répondre à toutes vos questions</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card animate-fade-in">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Notre Adresse</h3>
            <p>123 Rue du Commerce<br />75001 Paris, France</p>
          </div>

          <div className="info-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>

          <div className="info-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>contact@x10.com</p>
          </div>
        </div>

        <div className="contact-form-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="form-input"
              />
            </div>

            <div className="form-group animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet"
                required
                className="form-input"
              />
            </div>

            <div className="form-group animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
                className="form-input form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="submit-button animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 