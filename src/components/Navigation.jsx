import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaEnvelope, FaCogs } from 'react-icons/fa';
import './Navigation.css';

// Barra de navegacion con logo
function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#inicio" className="d-flex align-items-center">
          <img 
            src="/images/logo/logo.png" 
            alt="Logo IES Cura Valera" 
            className="navbar-logo"
          />
          <span className="ms-2">IES Cura Valera</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navegacion-basica" />
        <Navbar.Collapse id="navegacion-basica">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">
              <FaHome className="me-2" />
              Inicio
            </Nav.Link>
            <Nav.Link href="#contacto">
              <FaEnvelope className="me-2" />
              Contacto
            </Nav.Link>
            <Nav.Link href="#servicios">
              <FaCogs className="me-2" />
              Servicios
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
