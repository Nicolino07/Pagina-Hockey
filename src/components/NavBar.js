import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clima, setClima] = useState("Cargando clima...");


 const obtenerClima = () => {
  fetch("https://wttr.in/?format=%l+🌡+%t+🌥+%C") // Ej: "Trelew 🌡 +11°C 🌥 cielo cubierto"
    .then((res) => res.text())
    .then((data) => {
      setClima(data.trim()); // Mostramos directamente la cadena
    })
    .catch(() => setClima("🌐 No se pudo cargar el clima"));
};



  useEffect(() => {
    obtenerClima(); // primera vez
    const intervalo = setInterval(obtenerClima, 10 * 60 * 1000); // cada 10 min

    return () => clearInterval(intervalo); // limpiar al desmontar
  }, []);

  return (
    <>
      <div className="barra-superior">
        <span>{clima}</span>
      </div>

      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img className="logo" src="/Logo HB.png" alt="Logo" />
          </Link>
        </div>

        <div className="nav-center">

    
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          
          {/* Submenú de Resultados */}
          <div className="dropdown">
            <span className="dropbtn">Resultados</span>
            <div className="dropdown-content">
              <Link to="/resultados/Damas A">Damas A</Link>
              <Link to="/resultados/Damas B">Damas B</Link>
              <Link to="/resultados/Caballeros">Caballeros</Link>
              <Link to="/resultados/Sub-19">Sub-19</Link>
              <Link to="/resultados/Sub-16">Sub-16</Link>
              <Link to="/resultados/Sub-14">Sub-14</Link>
              <Link to="/resultados/Sub-12">Sub-12</Link>
            </div>
          </div>
          <Link to="/torneos" onClick={() => setMenuOpen(false)}>Torneos</Link>
          <Link to="/fixture" onClick={() => setMenuOpen(false)}>Fixture</Link>

            {/* Submenú de Clubes */}
            <div className="dropdown">
              <span className="dropbtn">Clubes</span>
              <div className="dropdown-content">
                <Link to="/equipos/Huemules">Huemules</Link>
                <Link to="/equipos/Wiliches">Wiliches</Link>
                <Link to="/equipos/Estudiantes">Estudiantes</Link>
              </div>
            </div>

            {/* Submenú de Galería */}
            <div className="dropdown">
              <span className="dropbtn">Galería</span>
              <div className="dropdown-content">
                <Link to="/galeria/PrimeraDamas">Damas</Link>
                <Link to="/galeria/PrimeraCaballeros">Caballeros</Link>
                <Link to="/galeria/Inferiores">Inferiores</Link>
              </div>
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
}
