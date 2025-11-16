import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './GaleriaAndalucia.css';

// Galeria de fotos con carrusel automatico
function GaleriaAndalucia() {
  // array con las fotos
  const fotos = [
    {
      url: '/images/gallery/granada.jpg',
      alt: 'La Alhambra de Granada'
    },
    {
      url: '/images/gallery/cordoba.jpg',
      alt: 'La Mezquita de Córdoba'
    },
    {
      url: '/images/gallery/sevilla.jpg',
      alt: 'La Giralda de Sevilla'
    },
    {
      url: '/images/gallery/malaga.jpg',
      alt: 'Málaga'
    },
    {
      url: '/images/gallery/cadiz.jpg',
      alt: 'Cádiz'
    }
  ];

  // estado para la foto actual
  const [indiceActual, setIndiceActual] = useState(0);

  // esto hace que cambie automatico cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      siguienteFoto();
    }, 3000);

    return () => clearInterval(intervalo);
  }, [indiceActual]);

  // funcion para siguiente foto
  const siguienteFoto = () => {
    if (indiceActual === fotos.length - 1) {
      setIndiceActual(0);
    } else {
      setIndiceActual(indiceActual + 1);
    }
  };

  // funcion para foto anterior
  const fotoAnterior = () => {
    if (indiceActual === 0) {
      setIndiceActual(fotos.length - 1);
    } else {
      setIndiceActual(indiceActual - 1);
    }
  };

  return (
    <Container className="gallery-section">
      <h2 className="text-center">Galería de Andalucía</h2>
      
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={fotoAnterior}>
          &#10094;
        </button>
        
        <div className="carousel-image">
          <img 
            src={fotos[indiceActual].url} 
            alt={fotos[indiceActual].alt}
          />
          <p className="image-caption">{fotos[indiceActual].alt}</p>
        </div>
        
        <button className="carousel-btn next-btn" onClick={siguienteFoto}>
          &#10095;
        </button>
      </div>
      
      {/* los puntitos para navegar */}
      <div className="carousel-dots">
        {fotos.map((foto, indice) => (
          <span 
            key={indice}
            className={indice === indiceActual ? 'dot active' : 'dot'}
            onClick={() => setIndiceActual(indice)}
          ></span>
        ))}
      </div>
    </Container>
  );
}

export default GaleriaAndalucia;
