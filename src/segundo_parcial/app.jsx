import React from 'react';
import Navbar from './components/navbar';
import Perfil from './components/perfil';
import SobreMi from './components/sobremi';
import Formacion from './components/formacion';
import Habilidades from './components/habilidades';
import Footer from './components/footer';

function App() {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="row g-0">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Perfil />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <SobreMi />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Formacion />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Habilidades />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;