import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export default function Header() {
  return (
    <header className="bg-dark text-warning text-center py-4 border-bottom border-warning shadow">
      <div className="container">
        <div className="d-flex justify-content-center gap-3 mb-2">
          <img src={viteLogo} alt="Vite logo" width="30" />
          <img src={reactLogo} alt="React logo" width="30" />
        </div>
        <h1 className="fw-bold display-5">Elden Ring — Las Tierras Intermedias</h1>
        <p className="lead text-light mb-0">
          Explorando el universo de FromSoftware con React y Bootstrap
        </p>
      </div>
    </header>
  );
}