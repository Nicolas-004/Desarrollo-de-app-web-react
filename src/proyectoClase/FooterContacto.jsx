import React from 'react';

export default function FooterContacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado correctamente!');
  };

  return (
    <footer id="contacto" className="bg-dark text-white w-100 pt-5 pb-3 px-3 px-md-5">
      <div className="container-fluid">
        <div className="row g-5">
          {/* Columna Izquierda: Formulario de Contacto */}
          <div className="col-12 col-lg-7">
            <h3 className="text-warning fw-bold mb-3 d-flex align-items-center gap-2">
              {/* SVG Bootstrap: Envelope */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-envelope-paper-fill text-warning" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267.471.251 5.06 2.7a.9.9 0 0 0 .938 0l5.06-2.7L14 4.267V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/>
              </svg>
              Enviar un Mensaje
            </h3>
            <p className="text-secondary mb-4">¿Tienes una propuesta de trabajo o un proyecto? Escríbeme directamente.</p>

            <form onSubmit={handleSubmit} className="p-4 rounded bg-secondary bg-opacity-10 border border-secondary">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold">Nombre Completo</label>
                <input type="text" className="form-control bg-dark text-light border-secondary" id="nombre" placeholder="Ej: Maria Perez" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
                <input type="email" className="form-control bg-dark text-light border-secondary" id="email" placeholder="nombre@correo.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje</label>
                <textarea className="form-control bg-dark text-light border-secondary" id="mensaje" rows="3" placeholder="Escribe tu mensaje aquí..." required></textarea>
              </div>
              
              {/* Botón SUCCESS solicitado */}
              <button type="submit" className="btn btn-success fw-bold w-100 py-2 d-flex align-items-center justify-content-center gap-2 shadow">
                {/* SVG Bootstrap: Send Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-6 8.57-6.29-4.113 10.305-5.178zm1.886 4.764-4.113-6.29 9.291-5.127z"/>
                </svg>
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Columna Derecha: Información Adicional y Copyright */}
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <h3 className="text-danger fw-bold mb-3 d-flex align-items-center gap-2">
                {/* SVG Bootstrap: Geo Alt / Location */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                Ubicación y Contacto
              </h3>
              <ul className="list-unstyled text-secondary fs-6 lh-lg">
                <li className="mb-2">📍 <strong>Ubicación:</strong> Colombia</li>
                <li className="mb-2">📧 <strong>Email:</strong> alex.mercer@dev.com</li>
                <li className="mb-2">📞 <strong>Teléfono:</strong> +57 300 123 4567</li>
                <li className="mb-2">💼 <strong>Disponibilidad:</strong> <span className="badge bg-success">Inmediata</span></li>
                <li className="mb-2">⚠️ <strong>Modalidad:</strong> <span className="badge bg-danger">Remoto / Presencial</span></li>
              </ul>
            </div>

            <div className="p-3 bg-dark border border-warning rounded text-center my-3">
              <span className="text-warning fw-bold">⚡ Respuesta habitual en menos de 24 horas</span>
            </div>

            {/* Créditos de Footer */}
            <div className="text-center text-lg-start border-top border-secondary pt-3 mt-4">
              <p className="small text-secondary mb-0">
                © 2026 Alex Mercer — Hoja de Vida diseñada con <span className="text-primary fw-bold">React</span> y <span className="text-warning fw-bold">Bootstrap</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}