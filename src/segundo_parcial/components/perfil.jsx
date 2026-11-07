import React from 'react';

export default function Perfil() {
  return (
    <section id="perfil" className="bg-primary text-white py-5 px-3 w-100 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Foto Perfil"
              className="img-fluid rounded-circle border border-4 border-warning shadow-lg"
              style={{ width: '220px', height: '220px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex flex-wrap gap-2 mb-3 justify-content-center justify-content-md-start">
              <span className="badge bg-warning text-dark px-3 py-2 fw-bold">Ingeniero de Sistemas</span>
              <span className="badge bg-success px-3 py-2">Disponible</span>
              <span className="badge bg-danger px-3 py-2">Full-Time</span>
            </div>
            <h1 className="display-4 fw-bold mb-2">Alex Mercer</h1>
            <h4 className="text-warning mb-3">Desarrollador Web Full Stack</h4>
            <p className="lead text-light mb-2">
              📍 Ocaña, Norte de Santander | ✉️ alex.mercer@email.com
            </p>
            <p className="fs-5 text-light opacity-90">
              Apasionado por la construcción de aplicaciones web dinámicas y escalables. Enfocado en soluciones de calidad con React, JavaScript y Bootstrap.
            </p>
            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#footer" className="btn btn-warning text-dark fw-bold px-4 py-2 shadow">
                <i className="bi bi-envelope-fill me-2"></i>Contactar
              </a>
              <a href="#formacion" className="btn btn-outline-light px-4 py-2">
                Ver Formación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}