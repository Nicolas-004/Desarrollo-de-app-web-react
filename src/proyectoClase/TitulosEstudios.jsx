import React from 'react';

export default function TitulosEstudios() {
  return (
    <section id="titulos" className="bg-light text-dark w-100 py-5 px-3 px-md-5">
      <div className="container-fluid">
        {/* Encabezado con SVG */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3 d-flex justify-content-center align-items-center gap-2">
            {/* SVG Bootstrap: Mortarboard (Birrete) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-mortarboard-fill text-primary" viewBox="0 0 16 16">
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6.739a.5.5 0 0 0-.211-.412z"/>
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
            </svg>
            Títulos y Formación Académica
          </h2>
          <p className="text-secondary fs-5">Trayectoria educativa y certificaciones obtenidas.</p>
        </div>

        {/* Tarjetas de Títulos */}
        <div className="row g-4">
          {/* Título 1 - Estilo Primary */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-primary border-2 shadow-sm">
              <div className="card-header bg-primary text-white fw-bold d-flex justify-content-between align-items-center">
                <span>Ingeniería de Sistemas</span>
                <span className="badge bg-light text-primary">2019 - 2024</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Universidad Nacional</h5>
                <p className="card-text text-muted">
                  Especialización en desarrollo de software, estructuras de datos, bases de datos e ingeniería de requerimientos.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <span className="badge bg-primary me-1">Grado Profesional</span>
                <span className="badge bg-info text-dark">Acreditado</span>
              </div>
            </div>
          </div>

          {/* Título 2 - Estilo Warning */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-warning border-2 shadow-sm">
              <div className="card-header bg-warning text-dark fw-bold d-flex justify-content-between align-items-center">
                <span>Máster Frontend React</span>
                <span className="badge bg-dark text-warning">2025</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark fw-bold">Tech Academy Global</h5>
                <p className="card-text text-muted">
                  Desarrollo de interfaces dinámicas con React, Vite, consumo de APIs REST, Redux Toolkit y diseño responsive con Bootstrap.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <span className="badge bg-warning text-dark me-1">Especialización</span>
                <span className="badge bg-danger">Intensivo</span>
              </div>
            </div>
          </div>

          {/* Título 3 - Estilo Success */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-success border-2 shadow-sm">
              <div className="card-header bg-success text-white fw-bold d-flex justify-content-between align-items-center">
                <span>Certificación Cloud & DevOps</span>
                <span className="badge bg-light text-success">2026</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">Cloud Institute</h5>
                <p className="card-text text-muted">
                  Gestión de infraestructura en la nube, integración continua (CI/CD), despliegue de contenedores Docker y servicios AWS.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <span className="badge bg-success me-1">Certificado Oficial</span>
                <span className="badge bg-secondary">Vigente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}