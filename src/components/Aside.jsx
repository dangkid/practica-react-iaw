import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import './Aside.css';
import datosHeroes from '../heroes.json';

// Seccion lateral con heroes y video
function Aside() {
  const [heroeSeleccionado, setHeroeSeleccionado] = useState(null);

  // saco solo los nombres de los heroes
  const nombresHeroes = datosHeroes.map(heroe => heroe.superhero);

  function manejarCambio(evento, nuevoValor) {
    setHeroeSeleccionado(nuevoValor);
  }

  return (
    <aside className="aside-section">
      <div className="aside-content">
        <h3>Héroes de Marvel y DC</h3>
        <Autocomplete
          options={nombresHeroes}
          value={heroeSeleccionado}
          onChange={manejarCambio}
          renderInput={(params) => (
            <TextField 
              {...params} 
              label="Selecciona un héroe" 
              variant="outlined"
            />
          )}
        />
        
        <div className="video-container mt-4">
          <h3>Vídeo destacado</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/TcMBFSGVi1c"
            title="Video de YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
