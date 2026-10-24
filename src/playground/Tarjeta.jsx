import miImagen from '../assets/eldenring.jpg';

export default function Tarjeta() {
  return (
    <section className="container my-4">
      <div className="card bg-dark text-white border-warning shadow mx-auto" style={{ maxWidth: '450px' }}>
        <img 
          src={miImagen} 
          className="card-img-top border-bottom border-warning" 
          alt="Elden Ring" 
        />
        <div className="card-body text-center">
          <h5 className="card-title text-warning fw-bold fs-4">El Anillo de Elden</h5>
          <p className="card-text text-light">
            Elden Ring es mi videojuego favorito por su increíble mundo abierto, ambientación épica, desafiantes combates y profunda historia.
          </p>
          <button className="btn btn-outline-warning">Saber más</button>
        </div>
      </div>
    </section>
  );
}