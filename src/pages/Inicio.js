import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";
export default function Inicio() {

  return (

    <div className='inicio-container'>

      <h2>¡¡Toda la info sobre hockey pista en Bariloche!!</h2>
      <h2>En un solo lugar</h2>

      <div className="portada-destacado">
        <h2>Comenzó el torneo Clausura 2025. 🏑</h2>
        <Link to="/fixture" className="titulo-principal">
          Consulta todos los horarios acá
        </Link>
        
        <div className="destacado-box">
          <p className="destacado-texto">
            Seguí los resultados, tabla de posiciones y fixture de cada fecha.
          </p>
          
          <div className="contacto-box">
            <h3>📢 ¿Tenés alguna noticia para compartir?</h3>
            <p>
              Si deseas publicar resultados, goles, fotos o novedades de tu club, comunícate.
              <br />✉️ <a href="mailto:hockeybariloche07@gmail.com" className="email-link">hockeybariloche07@gmail.com</a>
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
}
