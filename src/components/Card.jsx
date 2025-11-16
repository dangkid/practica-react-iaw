import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './Card.css';

// Componente de tarjeta que recibe props
function Card(props) {
  return (
    <BootstrapCard style={props.estilo} className="custom-card">
      <BootstrapCard.Img 
        variant="top" 
        src={props.imagen} 
        alt={props.titulo}
        className="card-img"
      />
      <BootstrapCard.Body className="card-body-custom">
        <BootstrapCard.Title>{props.titulo}</BootstrapCard.Title>
        <BootstrapCard.Text>{props.texto}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;
