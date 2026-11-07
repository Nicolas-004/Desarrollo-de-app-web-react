import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white py-5 px-3 w-100 border-top border-warning">
      <div className="container">
        <div className="row g-4 align-items-center text-center text-md-start">
          <div className="col-12 col-md-6">
            <h4 className="text-warning fw-bold mb-2">Alex Mercer — Hoja de Vida</h4>
            <p className="text-secondary mb-0">
              Desarrollado para la evaluación práctica del Segundo Parcial de Desarrollo Web.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-2 fs-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:alex.mercer@email.com" className="text-warning">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
            <p className="small text-secondary mb-0">
              © 2026 - Todos los derechos reservados | React & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}