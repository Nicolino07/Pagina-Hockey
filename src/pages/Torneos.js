import React, { useEffect, useState } from "react";
import TablaPosiciones from "./TablaPosiciones";
import "./Torneos.css";

export default function Torneos() {
  const [torneosActuales, setTorneosActuales] = useState([]);
  const [torneosAnteriores, setTorneosAnteriores] = useState([]);
  const [torneoSeleccionado, setTorneoSeleccionado] = useState(null);
  const [mostrarAnteriores, setMostrarAnteriores] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    
    // Cargar torneos actuales
    fetch(`${process.env.REACT_APP_API_URL}/torneos/actuales`)
      .then((res) => res.json())
      .then((data) => {
        setTorneosActuales(data);
        setCargando(false);
      })
      .catch((error) => console.error("Error al cargar torneos actuales:", error));
  }, []);

  const cargarTorneosAnteriores = () => {
    if (torneosAnteriores.length === 0) {
      setCargando(true);
      fetch(`${process.env.REACT_APP_API_URL}/torneos/anteriores`)
        .then((res) => res.json())
        .then((data) => {
          setTorneosAnteriores(data);
          setMostrarAnteriores(true);
          setCargando(false);
        })
        .catch((error) => console.error("Error al cargar torneos anteriores:", error));
    } else {
      setMostrarAnteriores(!mostrarAnteriores);
    }
  };

  return (
    <div className="torneos-container">
      <h1>Torneos {mostrarAnteriores ? "Históricos" : "2025"}</h1>
      
      <button 
        onClick={cargarTorneosAnteriores}
        className="boton-anteriores"
      >
        {mostrarAnteriores ? "Ver Torneos Actuales" : "Ver Torneos Anteriores"}
      </button>

      {cargando ? (
        <p>Cargando torneos...</p>
      ) : !torneoSeleccionado ? (
        <ul className="lista-torneos">
          {(mostrarAnteriores ? torneosAnteriores : torneosActuales).map((torneo) => (
            <li key={torneo.id}>
              <button 
                onClick={() => setTorneoSeleccionado(torneo)}
                className="boton-torneo"
              >
                {torneo.nombre} - {torneo.categoria} {torneo.año && `(${torneo.año})`}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="detalle-torneo">
          <button 
            onClick={() => setTorneoSeleccionado(null)}
            className="boton-volver"
          >
            Volver a torneos
          </button>
          <h2>{torneoSeleccionado.nombre} - {torneoSeleccionado.categoria}</h2>
          <TablaPosiciones torneoId={torneoSeleccionado.id} />
        </div>
      )}
    </div>
  );
}