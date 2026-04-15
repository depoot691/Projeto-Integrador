import React from 'react';
import NeonButton from './NeonButton';

const Contact = () => {
  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="main-panel w-100" style={{ maxWidth: '600px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-neon m-0">Mensagem Oculta</h2>
          <NeonButton to="/" text="Voltar" variant="outline" />
        </div>
        
        <form>
          <div className="mb-3">
            <label className="form-label text-light">Seu Nome (Classe)</label>
            <input type="text" className="form-control bg-dark text-light border-secondary" placeholder="Ex: Gandalf" />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Email Mágico</label>
            <input type="email" className="form-control bg-dark text-light border-secondary" placeholder="mago@torre.com" />
          </div>
          <div className="mb-4">
            <label className="form-label text-light">Sua Mensagem</label>
            <textarea className="form-control bg-dark text-light border-secondary" rows="4" placeholder="Descreva sua missão..."></textarea>
          </div>
          <button type="submit" className="btn btn-neon w-100">Enviar Corvo</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;