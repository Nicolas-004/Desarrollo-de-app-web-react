import React from 'react';

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-light text-dark py-5 px-3 w-100">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary d-flex justify-content-center align-items-center gap-2">
            <i className="bi bi-person-lines-fill text-primary"></i>
            Sobre Mí
          </h2>
          <p className="text-secondary fs-5">Descripción personal, objetivos e intereses</p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="p-4 bg-white rounded-3 shadow-sm border border-secondary border-opacity-25 h-100">
              <h4 className="text-primary fw-bold mb-3">
                <i className="bi bi-bullseye text-danger me-2"></i>Objetivos Laborales
              </h4>
              <p className="text-secondary fs-6">
                Mi meta profesional es integrarme a equipos dinámicos de desarrollo donde pueda aplicar mis conocimientos en ingeniería de software, aportando valor en el diseño e implementación de sistemas accesibles y eficientes.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-4 bg-white rounded-3 shadow-sm border border-secondary border-opacity-25 h-100">
              <h4 className="text-primary fw-bold mb-3">
                <i className="bi bi-star-fill text-warning me-2"></i>Intereses y Fortalezas
              </h4>
              <ul className="list-unstyled text-secondary fs-6 mb-0">
                <li className="mb-2">✔️ <strong>Fortaleza:</strong> Capacidad de aprendizaje continuo y resolución de problemas.</li>
                <li className="mb-2">✔️ <strong>Fortaleza:</strong> Trabajo colaborativo y comunicación asertiva.</li>
                <li className="mb-2">💡 <strong>Interés:</strong> Arquitecturas Cloud y desarrollo frontend moderno.</li>
                <li>💡 <strong>Interés:</strong> Contribución a proyectos de código abierto.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}