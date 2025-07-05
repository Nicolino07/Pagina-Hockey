import React, { useEffect, useState } from "react";
import "./TablaPosiciones.css";

export default function TablaPosiciones({ torneoId }) {
  const [posiciones, setPosiciones] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/torneos/${torneoId}/posiciones`)
      .then(res => res.json())
      .then(data => setPosiciones(data))
      .catch(err => console.error(err));
  }, [torneoId]);

  return (
    <div className="tabla-wrapper">
  
    <div className="posiciones-container">
      <h2>Tabla de posiciones</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>Puntos</th>
            <th>PJ</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>DF</th>
          </tr>
        </thead>
        <tbody>
          {posiciones.map((equipo, index) => (
            <tr key={equipo.id}>
              <td>{index + 1}</td>
              <td>{equipo.nombre}</td>
              <td>{equipo.puntos}</td>
              <td>{equipo.partidos_jugados}</td>
              <td>{equipo.ganados}</td>
              <td>{equipo.empatados}</td>
              <td>{equipo.perdidos}</td>
              <td>{equipo.goles_favor}</td>
              <td>{equipo.goles_contra}</td>
              <td>{equipo.diferencia_gol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  );
}
