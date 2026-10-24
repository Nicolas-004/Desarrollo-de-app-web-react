import React from 'react';

export default function NavegacionPerfil() {
  return (
    <section id="inicio" className="bg-primary text-white w-100 min-vh-100 d-flex flex-column justify-content-between">
      {/* Navbar con Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
        <div className="container-fluid">
          <a className="navbar-brand text-warning fw-bold d-flex align-items-center gap-2" href="#inicio">
            {/* SVG Bootstrap: Badge Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-badge-fill text-warning" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z"/>
            </svg>
            Mi Hoja de Vida
          </a>
          <ul className="navbar-nav ms-auto flex-row gap-3">
            <li className="nav-item"><a className="nav-link text-light fw-semibold" href="#inicio">Perfil</a></li>
            <li className="nav-item"><a className="nav-link text-light fw-semibold" href="#titulos">Títulos</a></li>
            <li className="nav-item"><a className="nav-link text-light fw-semibold" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero / Presentación del Perfil */}
      <div className="container my-auto py-5">
        <div className="row align-items-center text-center text-md-start">
          {/* Imagen aleatoria mediante CDN */}
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Foto Perfil"
              className="img-fluid rounded-circle border border-4 border-warning shadow-lg"
              style={{ width: '220px', height: '220px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-12 col-md-8">
            {/* Uso de Primary, Success, Danger y Warning en Badges */}
            <div className="d-flex flex-wrap gap-2 mb-3 justify-content-center justify-content-md-start">
              <span className="badge bg-warning text-dark px-3 py-2 fw-bold">Desarrollador Full Stack</span>
              <span className="badge bg-success px-3 py-2">Disponible para Trabajar</span>
              <span className="badge bg-danger px-3 py-2">Contratación Inmediata</span>
            </div>

            <h1 className="display-4 fw-bold mb-2">Alex Mercer</h1>
            <p className="lead fs-4 text-light">
              Ingeniero de Software apasionado por construir productos web modernos, escalables y eficientes utilizando tecnologías de vanguardia como React y Bootstrap.
            </p>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#contacto" className="btn btn-warning text-dark fw-bold px-4 py-2 shadow">
                Contactar
              </a>
              <a href="#titulos" className="btn btn-outline-light px-4 py-2">
                Ver Títulos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}