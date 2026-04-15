import React from 'react';
import NeonButton from './NeonButton';
import FooterBox from './FooterBox';

const Home = () => {
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="main-panel w-100 painel-texto-fundo" style={{ maxWidth: '1000px' }}>
        
        <div className="d-flex justify-content-end mb-4">
          <NeonButton to="/contato" text="contate-nos" variant="outline" />
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
            <h1 className="display-3 text-neon mb-4">MASTER AI</h1>
           <p className="text-neon-suave">A forja definitiva para suas aventuras.</p>
            <NeonButton to="/decks" text="ESCOLHA SEU DECK" variant="solid" className="fs-4 px-5 py-3" />
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <div className="hero-image-container mt-4">
   
   <img src="/oldneonchard&d.jpg" alt="Arte 3D dos Itens" /> 
   

              <span className="text-neon rpg-font"></span>
          </div>
          </div>
        </div>

        <div className="row mt-5 pt-4 justify-content-start gap-3">
          <FooterBox title="Suporte" />
          <FooterBox title="Facebook" />
          <FooterBox title="Instagram" />
        </div>

      </div>
    </div>
  );
};

export default Home;