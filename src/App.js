import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CardSection from './components/CardSection';
import GaleriaAndalucia from './components/GaleriaAndalucia';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      
      <Container className="main-content">
        <Row>
          <Col lg={8}>
            <section>
              <CardSection />
            </section>
          </Col>
          <Col lg={4}>
            <Aside />
          </Col>
        </Row>
        
        <Row>
          <Col>
            <GaleriaAndalucia />
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
