import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';

// Seccion con las 3 tarjetas
function CardSection() {
  // datos de las tarjetas
  const datosTarjetas = [
    {
      titulo: 'Formación Profesional',
      texto: 'Ofrecemos una amplia variedad de ciclos formativos de grado medio y superior en diferentes áreas profesionales.',
      imagen: '/images/cards/formacion.jpg',
      estilo: { backgroundColor: '#f8f9fa' }
    },
    {
      titulo: 'Educación Secundaria',
      texto: 'ESO y Bachillerato con un enfoque moderno y adaptado a las necesidades de nuestros estudiantes.',
      imagen: '/images/cards/secundaria.jpg',
      estilo: { backgroundColor: '#e9ecef' }
    },
    {
      titulo: 'Actividades Extraescolares',
      texto: 'Programa completo de actividades deportivas, culturales y de refuerzo académico para complementar la formación.',
      imagen: '/images/cards/extraescolares.jpg',
      estilo: { backgroundColor: '#dee2e6' }
    }
  ];

  return (
    <Container className="my-5">
      <Row>
        {datosTarjetas.map((tarjeta, indice) => (
          <Col md={4} key={indice} className="mb-4">
            <Card 
              titulo={tarjeta.titulo}
              texto={tarjeta.texto}
              imagen={tarjeta.imagen}
              estilo={tarjeta.estilo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardSection;
