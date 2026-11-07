import React from 'react';

export default function Formacion() {
  return (
    <section id="formacion" className="bg-dark text-white py-5 px-3 w-100">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-warning d-flex justify-content-center align-items-center gap-2">
            <i className="bi bi-mortarboard-fill text-warning"></i>
            Formación Académica
          </h2>
          <p className="text-secondary fs-5">Títulos, certificaciones y estudios realizados</p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 border-primary border-2 bg-dark text-white shadow">
              <div className="card-header bg-primary text-white fw-bold d-flex justify-content-between align-items-center">
                <span>Ingeniería de Sistemas</span>
                <span className="badge bg-light text-primary">2021 - Presente</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">Universidad Francisco de Paula Santander</h5>
                <p className="card-text text-secondary">
                  Formación integral en programación, bases de datos, redes e ingeniería de software.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <span className="badge bg-primary me-1">Pregrado</span>
                <span className="badge bg-success">En Curso</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-warning border-2 bg-dark text-white shadow">
              <div className="card-header bg-warning text-dark fw-bold d-flex justify-content-between align-items-center">
                <span>Diplomado Frontend React</span>
                <span className="badge bg-dark text-warning">2025</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">Tech Academy Global</h5>
                <p className="card-text text-secondary">
                  Especialización en desarrollo de Single Page Applications (SPA) utilizando React, Hooks y Bootstrap.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <span className="badge bg-warning text-dark me-1">Certificación</span>
                <span className="badge bg-danger">Completado</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-success border-2 bg-dark text-white shadow">
              <div className="card-header bg-success text-white fw-bold d-flex justify-content-between align-items-center">
                <span>Control de Versiones con Git</span>
                <span className="badge bg-light text-success">2026</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">OpenWeb Academy</h5>
                <p className="card-text text-secondary">
                  Manejo de repositorios en GitHub, estrategias de branching y gestión de cambios iterativos.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <span className="badge bg-success me-1">Certificado</span>
                <span className="badge bg-info text-dark">Vigente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}