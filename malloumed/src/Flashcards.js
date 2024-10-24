import React from 'react';

const Flashcards = ({ cards }) => {
  return (
    <div>
      <h2>Flashcards</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
    </div>
  );
};

export default Flashcards;
