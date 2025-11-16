import React from 'react';
import './Header.css';

// Componente de la cabecera
function Header() {
  return (
    <header className="header" style={{backgroundImage: 'url(/images/header/header-bg.jpg)'}}>
      <div className="header-content">
        <h1>IES Cura Valera</h1>
        <p>Huércal-Overa, Almería</p>
        <p className="subtitle">Junta de Andalucía</p>
      </div>
    </header>
  );
}

export default Header;
