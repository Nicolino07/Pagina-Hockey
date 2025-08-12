import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clima, setClima] = useState("Cargando clima...");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

    const obtenerClima = () => {
    const url = `https://wttr.in/Bariloche?format=%l+🌡+%t+🌥+%C&_=${Date.now()}`;
    fetch(url)
      .then((res) => res.text())
      .then((data) => setClima(data.trim()))
      .catch(() => setClima("🌐 No se pudo cargar el clima"));
  };

  useEffect(() => {
    obtenerClima();
    const intervalo = setInterval(obtenerClima, 10 * 60 * 1000); // cada 10 min
    return () => clearInterval(intervalo);
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const handleClickOutside = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="barra-superior">
        <span>{clima}</span>
      </div>

      <nav className="navbar" ref={navbarRef}>
        <Link to="/" onClick={handleNavClick}>
          <img className="logo" src="/Logo HB.png" alt="Logo" />
        </Link>

        <div className="nav-center">
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>

            <Link to="/" onClick={handleNavClick}>Inicio</Link>
            {/* Resultados */}
            <div className="dropdown">
              <span 
                className="dropbtn" 
                onClick={() => toggleDropdown('resultados')}
              >
                Resultados
              </span>
              <div className={`dropdown-content ${activeDropdown === 'resultados' ? 'active' : ''}`}>
            <div className="dropdown-scroll-container">
              <Link to="/resultados/Damas A" onClick={handleNavClick}>Damas A</Link>
              <Link to="/resultados/Damas B" onClick={handleNavClick}>Damas B</Link>
              <Link to="/resultados/Caballeros A" onClick={handleNavClick}>Caballeros A</Link>
              <Link to="/resultados/Sub-19" onClick={handleNavClick}>Sub-19</Link>
              <Link to="/resultados/Sub-16" onClick={handleNavClick}>Sub-16</Link>
              <Link to="/resultados/Sub-14" onClick={handleNavClick}>Sub-14</Link>
              <Link to="/resultados/Sub-12" onClick={handleNavClick}>Sub-12</Link>
            </div>
          </div>
            </div>

            {/* Enlaces principales */}
            <Link to="/posiciones" onClick={handleNavClick}>Posiciones</Link>
            <Link to="/fixture" onClick={handleNavClick}>Fixture</Link>

            
            {/* Clubes 
            
            <div className="dropdown">
              <span 
                className="dropbtn"
                onClick={() => toggleDropdown('clubes')}
              >
                Clubes
              </span>
              <div className={`dropdown-content ${activeDropdown === 'clubes' ? 'active' : ''}`}>
                <Link to="/equipos/Huemules" onClick={handleNavClick}>Huemules</Link>
                <Link to="/equipos/Wiliches" onClick={handleNavClick}>Wiliches</Link>
                <Link to="/equipos/Estudiantes" onClick={handleNavClick}>Estudiantes</Link>
              </div>
            </div>

            */}


            {/* Galería */}
            <div className="dropdown">
              <span 
                className="dropbtn"
                onClick={() => toggleDropdown('galeria')}
              >
                Galería
              </span>
              <div className={`dropdown-content ${activeDropdown === 'galeria' ? 'active' : ''}`}>
                <Link to="/galeria/PrimeraDamas" onClick={handleNavClick}>Damas</Link>
                <Link to="/galeria/PrimeraCaballeros" onClick={handleNavClick}>Caballeros</Link>
                <Link to="/galeria/Inferiores" onClick={handleNavClick}>Inferiores</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón hamburguesa a la derecha */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </>
  );
}