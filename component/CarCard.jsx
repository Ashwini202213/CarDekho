// src/components/CarCard.js


import React from 'react';

const CarCard = ({ name, price, image, offers, details, button }) => {
  return (
    <div className="car-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      {details && <p>{details}</p>}
      <button>{button ? button : offers}</button>
    </div>
  );
};

export default CarCard;
