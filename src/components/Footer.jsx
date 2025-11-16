import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

// Pie de pagina con redes sociales
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <img 
                src="/images/logo/logo.png" 
                alt="Logo IES Cura Valera" 
                className="footer-logo me-3"
              />
              <div>
                <h5>IES Cura Valera</h5>
                <p className="mb-0">Huércal-Overa, Almería</p>
                <p className="mb-0">Junta de Andalucía</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <h5 className="mb-3">Síguenos en redes sociales</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100011212297789&locale=es_ES" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/ies_curavalera/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://x.com/iesCuraValera" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/user/iescuravalera" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="copyright mb-0">
              &copy; 2025 IES Cura Valera - Todos los derechos reservados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
