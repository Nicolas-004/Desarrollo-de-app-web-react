import React from 'react';

export default function Habilidades() {
  return (
    <section id="habilidades" className="bg-light text-dark py-5 px-3 w-100">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary d-flex justify-content-center align-items-center gap-2">
            <i className="bi bi-tools text-primary"></i>
            Competencias y Habilidades
          </h2>
          <p className="text-secondary fs-5">Nivel de dominio en habilidades técnicas y blandas</p>
        </div>

        <div className="row g-5">
          {/* Habilidades Técnicas */}
          <div className="col-12 col-md-6">
            <h4 className="fw-bold mb-4 text-dark">
              <i className="bi bi-code-slash text-success me-2"></i>Habilidades Técnicas
            </h4>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1 fw-semibold">
                <span>React JS</span>
                <span className="badge bg-primary">85%</span>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar bg-primary" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1 fw-semibold">
                <span>Bootstrap 5</span>
                <span className="badge bg-warning text-dark">90%</span>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar bg-warning" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1 fw-semibold">
                <span>JavaScript (ES6+)</span>
                <span className="badge bg-success">80%</span>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar bg-success" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1 fw-semibold">
                <span>Git & GitHub</span>
                <span className="badge bg-danger">75%</span>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar bg-danger" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Habilidades Blandas */}
          <div className="col-12 col-md-6">
            <h4 className="fw-bold mb-4 text-dark">
              <i className="bi bi-people-fill text-warning me-2"></i>Habilidades Blandas
            </h4>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-primary fs-6 p-3">Trabajo en Equipo</span>
              <span className="badge bg-success fs-6 p-3">Resolución de Problemas</span>
              <span className="badge bg-warning text-dark fs-6 p-3">Comunicación Asertiva</span>
              <span className="badge bg-danger fs-6 p-3">Adaptabilidad</span>
              <span className="badge bg-dark fs-6 p-3">Gestión del Tiempo</span>
              <span className="badge bg-info text-dark fs-6 p-3">Pensamiento Crítico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}