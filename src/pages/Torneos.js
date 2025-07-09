import React, { useEffect, useState } from "react";
import TablaPosiciones from "./TablaPosiciones"; // Importá el componente que te mostré antes
import "./Torneos.css";

export default function Torneos() {
  const [torneos, setTorneos] = useState([]);
  const [torneoSeleccionado, setTorneoSeleccionado] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/torneos/actuales`)
      .then((res) => res.json())
      .then((data) => setTorneos(data))
      .catch((error) => console.error("Error al cargar torneos:", error));
  }, []);

  return (
    <div className="torneos-container">
      <h1>Torneos 2025</h1>
      {!torneoSeleccionado ? (
        <ul>
          {torneos.length === 0 ? (
            <li>Cargando torneos...</li>
          ) : (
            torneos.map((torneo) => (
              <li key={torneo.id}>
                <button onClick={() => setTorneoSeleccionado(torneo)}>
                  {torneo.nombre} - {torneo.categoria}
                </button>
              </li>
            ))
          )}
        </ul>
      ) : (
        <div>
          <button onClick={() => setTorneoSeleccionado(null)}>Volver a torneos</button>
          <h2>{torneoSeleccionado.nombre} - {torneoSeleccionado.categoria}</h2>
          <TablaPosiciones torneoId={torneoSeleccionado.id} />
        </div>
      )}
    </div>
  );
}
