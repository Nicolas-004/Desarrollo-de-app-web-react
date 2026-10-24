import React from 'react';
import NavegacionPerfil from './proyectoClase/NavegacionPerfil';
import TitulosEstudios from './proyectoClase/TitulosEstudios';
import FooterContacto from './proyectoClase/FooterContacto';

function App() {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      {/* Fila 1 (12 Columnas) - Navegación y Perfil General */}
      <div className="row g-0">
        <div className="col-12">
          <NavegacionPerfil />
        </div>
      </div>

      {/* Fila 2 (12 Columnas) - Títulos y Formación Académica */}
      <div className="row g-0">
        <div className="col-12">
          <TitulosEstudios />
        </div>
      </div>

      {/* Fila 3 (12 Columnas) - Footer y Formulario de Contacto */}
      <div className="row g-0">
        <div className="col-12">
          <FooterContacto />
        </div>
      </div>
    </div>
  );
}

export default App;