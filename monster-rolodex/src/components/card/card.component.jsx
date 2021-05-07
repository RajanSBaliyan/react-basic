import React from 'react';
import './card.style.css';

export const Card = (props) => (
  <div className="card-container">{props.monster.name}</div>
);
