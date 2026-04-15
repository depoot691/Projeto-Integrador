import React from 'react';
import NeonButton from './NeonButton';

const Decks = () => {
  const deckList = [
    { id: 1, name: 'Deck do Necromante', price: 'R$ 49,90', icon: '/necromancer.png' },
    { id: 2, name: 'Deck do Paladino', price: 'R$ 54,90', icon: '/paladino.png' },
    { id: 3, name: 'Deck do Ilusionista', price: 'R$ 39,90', icon: '/ilusionista.png' },
  ];

  return (
    <div className="container py-5">
      <div className="main-panel">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="text-neon m-0">Arsenal de Decks</h2>
          <NeonButton to="/" text="Voltar à Taverna" variant="outline" />
        </div>
        
        <div className="row">
          {deckList.map(deck => (
            <div key={deck.id} className="col-md-4 mb-4">
              <div className="card bg-dark border-secondary text-light h-100 deck-card">
                
                <div className="deck-icon-wrapper">
                  <img src={deck.icon} alt={deck.name} />
                </div>
                
                <div className="card-body d-flex flex-column text-center mt-4">
                  <h4 className="card-title rpg-font text-neon">{deck.name}</h4>
                  <p className="card-text flex-grow-1 mt-3">Cartas exclusivas para dominar a campanha.</p>
                  <h5 className="mb-3">{deck.price}</h5>
                  <button className="btn btn-neon w-100">Adicionar ao Loot</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decks;