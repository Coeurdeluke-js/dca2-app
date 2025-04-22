import React from 'react';
import './card.css';

const Card = ({ icon, title, subtitle, content, bgPosition }) => {
  return (
    <div className="card" style={{ backgroundPosition: bgPosition }}>
      <div className="card-front">
        <img src={icon} alt={title} className="card-icon" />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className="card-back">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
