import React, { useEffect, useState } from "react";
import "./Torneos.css";

export default function Torneos() {
  const [torneos, setTorneos] = useState({
    actuales: [],
    anteriores: [],
    cargando: true,
    error: null
  });

  const cargarTorneos = async (url, esAnteriores = false) => {
    try {
      setTorneos(prev => ({ ...prev, cargando: true, error: null }));
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      setTorneos(prev => ({
        ...prev,
        [esAnteriores ? 'anteriores' : 'actuales']: data,
        cargando: false
      }));
      
    } catch (error) {
      console.error("Error al cargar torneos:", error);
      setTorneos(prev => ({
        ...prev,
        cargando: false,
        error: error.message
      }));
    }
  };

  useEffect(() => {
    cargarTorneos(`${process.env.REACT_APP_API_URL}/torneos/actuales`);
  }, []);

  const cargarAnteriores = () => {
    cargarTorneos(`${process.env.REACT_APP_API_URL}/torneos/anteriores`, true);
  };

  if (torneos.error) {
    return (
      <div className="error-container">
        <h2>Error al cargar los torneos</h2>
        <p>{torneos.error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="torneos-container">
      <h1>Torneos 2025</h1>

      {torneos.cargando && !torneos.anteriores.length ? (
        <p className="cargando">Cargando torneos actuales...</p>
      ) : (
        <div className="lista-torneos">
          {torneos.actuales.map(torneo => (
            <div key={torneo.id} className="torneo-card">
              <h3>{torneo.nombre}</h3>
              <p>{torneo.categoria}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={cargarAnteriores}
        disabled={torneos.cargando}
        className="boton-anteriores"
      >
        {torneos.anteriores.length > 0 
          ? "Ocultar torneos anteriores" 
          : "Ver torneos históricos"}
      </button>

      {torneos.anteriores.length > 0 && (
        <>
          <h2>Torneos Históricos</h2>
          <div className="lista-torneos">
            {torneos.anteriores.map(torneo => (
              <div key={torneo.id} className="torneo-card historico">
                <h3>{torneo.nombre}</h3>
                <p>{torneo.categoria} • {torneo.año}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}