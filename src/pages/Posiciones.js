import React, { useEffect, useState } from "react";
import TablaPosiciones from "./TablaPosiciones";
import "./Posiciones.css";

export default function Torneos() {
  const [torneosActuales, setTorneosActuales] = useState([]);
  const [torneosAnteriores, setTorneosAnteriores] = useState([]);
  const [torneoSeleccionado, setTorneoSeleccionado] = useState(null);
  const [mostrarAnteriores, setMostrarAnteriores] = useState(false);
  const [cargando, setCargando] = useState({ actuales: true, anteriores: false });

  useEffect(() => {
    // Cargar torneos actuales (true)
    fetch(`${process.env.REACT_APP_API_URL}/torneos/actuales`)
      .then(res => res.json())
      .then(data => {
        setTorneosActuales(data);
        setCargando(prev => ({ ...prev, actuales: false }));
      });
  }, []);

  const cargarAnteriores = () => {
    if (torneosAnteriores.length === 0) {
      setCargando(prev => ({ ...prev, anteriores: true }));
      fetch(`${process.env.REACT_APP_API_URL}/torneos/anteriores`)
        .then(res => res.json())
        .then(data => {
          setTorneosAnteriores(data);
          setMostrarAnteriores(true);
          setCargando(prev => ({ ...prev, anteriores: false }));
        });
    } else {
      setMostrarAnteriores(!mostrarAnteriores);
    }
  };

  return (
    <div className="torneos-container">
      {!torneoSeleccionado ? (
        <>
          <h1>Torneos 2025</h1>
          
          {cargando.actuales ? (
            <p>Cargando torneos actuales...</p>
          ) : (
            <div className="lista-torneos">
              {torneosActuales.map(torneo => (
                <div 
                  key={torneo.id} 
                  className="torneo-item"
                  onClick={() => setTorneoSeleccionado(torneo)}
                >
                  <p>{torneo.categoria}</p>
                  <h3>{torneo.nombre}</h3>
            
                </div>
              ))}
            </div>
          )}

          <button 
            onClick={cargarAnteriores}
            className="boton-anteriores"
          >
            {mostrarAnteriores ? "Ocultar Torneos Anteriores" : "Ver Torneos Anteriores"}
          </button>

          {mostrarAnteriores && (
            <>
              <h2>Torneos Históricos</h2>
              {cargando.anteriores ? (
                <p>Cargando torneos anteriores...</p>
              ) : (
                <div className="lista-torneos">
                  {torneosAnteriores.map(torneo => (
                    <div 
                      key={torneo.id} 
                      className="torneo-item"
                      onClick={() => setTorneoSeleccionado(torneo)}
                    >
                      <h3>{torneo.nombre}</h3>
                      <p>{torneo.categoria} ({torneo.año})</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <div className="detalle-torneo">
          <button 
            onClick={() => setTorneoSeleccionado(null)}
            className="boton-volver"
          >
            &larr; Volver a torneos
          </button>
          <h2>{torneoSeleccionado.categoria}</h2>
          <h3>{torneoSeleccionado.nombre} - {torneoSeleccionado.año}</h3>
          <TablaPosiciones torneoId={torneoSeleccionado.id} />
        </div>

      )}
    </div>
  );
}