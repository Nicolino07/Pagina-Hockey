import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img className="logo" src="/Logo HB.png" alt="Logo" />
        </Link>
      </div>

      <div className="nav-center">
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/fechas" onClick={() => setMenuOpen(false)}>Fechas</Link>
          <Link to="/galeria" onClick={() => setMenuOpen(false)}>Galería</Link>
          <Link to="/posiciones" onClick={() => setMenuOpen(false)}>Posiciones</Link>
        </div>
      </div>
    </nav>
  );
}
