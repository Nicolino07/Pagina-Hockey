import React, { useEffect, useState } from "react";
import "./TablaPosiciones.css";

export default function TablaPosiciones({ torneoId }) {
  const [posiciones, setPosiciones] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/torneos/${torneoId}/posiciones`)
      .then(res => res.json())
      .then(data => setPosiciones(data))
      .catch(err => console.error(err));
  }, [torneoId]);

  return (
    <div className="posiciones-container">
      <h2>Tabla de posiciones</h2>
      <div className="tabla-scroll">
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
            {posiciones.map((equipo) => (
              <tr key={equipo.posicion}>
                <td>{equipo.posicion}</td>
                <td>{equipo.equipo}</td>
                <td>{equipo.puntos}</td>
                <td>{equipo.PJ}</td>
                <td>{equipo.PG}</td>
                <td>{equipo.PE}</td>
                <td>{equipo.PP}</td>
                <td>{equipo.GF}</td>
                <td>{equipo.GC}</td>
                <td>{equipo.DF}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
