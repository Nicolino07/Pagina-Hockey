import React, { useEffect, useState } from "react";
import "./Torneos.css";

export default function Torneos() {
  const [torneos, setTorneos] = useState({
    actuales: [],
    anteriores: [],
    cargando: true,
    cargandoAnteriores: false
  });

  useEffect(() => {
    // Cargar torneos actuales (2025)
    fetch(`${process.env.REACT_APP_API_URL}/torneos/actuales`)
      .then(res => res.json())
      .then(data => {
        setTorneos(prev => ({
          ...prev,
          actuales: data,
          cargando: false
        }));
      });
  }, []);

  const toggleAnteriores = () => {
    if (torneos.anteriores.length === 0 && !torneos.cargandoAnteriores) {
      setTorneos(prev => ({ ...prev, cargandoAnteriores: true }));
      
      fetch(`${process.env.REACT_APP_API_URL}/torneos/anteriores`)
        .then(res => res.json())
        .then(data => {
          setTorneos(prev => ({
            ...prev,
            anteriores: data,
            cargandoAnteriores: false
          }));
        });
    }
  };

  return (
    <div className="torneos-container">
      <h1>Torneos 2025</h1>

      {torneos.cargando ? (
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
        onClick={toggleAnteriores}
        className={`boton-anteriores ${torneos.anteriores.length > 0 ? 'activo' : ''}`}
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

      {torneos.cargandoAnteriores && (
        <p className="cargando">Cargando torneos históricos...</p>
      )}
    </div>
  );
}