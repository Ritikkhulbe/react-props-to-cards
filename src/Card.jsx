// Card.jsx
import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.title} />
      <div className="card-content">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;