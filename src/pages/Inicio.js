import React from "react";
import "./Inicio.css";

export default function Inicio() {
  return (

    <div className='inicio-container'>
        <h2>¡¡Toda la info sobre hockey pista en Bariloche!!</h2>
        <h2>En un solo lugar</h2>

      <div class="portada-destacado">
        <h1 class="titulo-principal">En agosto comienza el Torneo Clausura de Hockey Pista 2025. 🏑</h1>
        
        <div class="destacado-box">
            <p class="destacado-texto">
                La Asociación de Hockey Bariloche y Lagos del Sur (AHByLS) da inicio a la 
                segunda parte del año, que no se te escape nada!
            </p>
            
            <div class="contacto-box">
                <h3>📢 ¿Tenes alguna noticia para compartir?</h3>
                <p>
                    Si deseas publicar resultados, goles, fotos o novedades de tu club, comunícate.
                    <br />✉️ <a href="mailto:hockeybariloche07@gmail.com" class="email-link">hockeybariloche07@gmail.com</a>
                </p>
            </div>
        </div>
      </div>  

    </div>
  );
}