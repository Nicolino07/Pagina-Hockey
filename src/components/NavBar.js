import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

            <Link to="/fixture" onClick={() => setMenuOpen(false)}>Fixture</Link>
            <Link to="/torneos" onClick={() => setMenuOpen(false)}>Torneos</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
