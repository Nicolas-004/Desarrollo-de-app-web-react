import React from 'react'
import miImagen from './assets/eldenring.jpg'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 style={{ color: "#f59e0b", fontSize: "2.5rem", marginBottom: "10px" }}>
            Elden Ring — Las Tierras Intermedias
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", color: "#d1d5db" }}>
            Bienvenido a mi página personal. Elden Ring es mi videojuego favorito por su increíble mundo abierto, ambientación e historia.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps" style={{ display: "flex", justifyContent: "center" }}>
        <div id="docs" style={{ width: "100%", maxWidth: "650px", textAlign: "center", padding: "24px" }}>
          <h2 style={{ color: "#fbbf24", marginBottom: "12px" }}>Descripción</h2>
          <p style={{ fontSize: "1rem", color: "#e5e7eb", marginBottom: "20px" }}>
            Soy estudiante de Ingeniería de Sistemas y me interesa la tecnología, la programación y los videojuegos.
          </p>
          </div>
          <div>
          <img
            src={miImagen}
            alt="Elden Ring"
            style={{
              width: "100%",
              borderRadius: "12px",
              border: "1px solid #f59e0b",
              boxShadow: "0 4px 20px rgba(245, 158, 11, 0.2)"
            }} 
          />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App