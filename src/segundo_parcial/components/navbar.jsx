import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-warning fw-bold d-flex align-items-center gap-2" href="#perfil">
          <i className="bi bi-person-vcard-fill text-warning fs-3"></i>
          Hoja de Vida
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#perfil">Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#sobre-mi">Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#formacion">Formación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#habilidades">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#footer">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}