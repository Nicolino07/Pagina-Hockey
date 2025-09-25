import React, { useEffect, useState } from "react";
import "./TablaPosiciones.css";

export default function TablaPosiciones({ torneoId }) {
  const [posiciones, setPosiciones] = useState([]);
  const [ultimaFecha, setUltimaFecha] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/torneos/${torneoId}/posiciones`)
      .then(res => res.json())
      .then(data => {
        setPosiciones(data);

        // si el backend devuelve "ultima_actualizacion" o similar, mejor usar eso
        if (data.length > 0 && data[0].ultima_fecha_partido) {
          setUltimaFecha(data[0].ultima_fecha_partido);
        } else {
          // fallback: pedir al backend los partidos del torneo
          fetch(`${process.env.REACT_APP_API_URL}/torneos/${torneoId}/partidos`)
            .then(res => res.json())
            .then(partidos => {
              if (partidos.length > 0) {
                const fechas = partidos.map(p => new Date(p.fecha));
                const ultima = new Date(Math.max(...fechas));
                setUltimaFecha(ultima.toISOString());
              }
            })
            .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err));
  }, [torneoId]);

  const formatearFecha = (fechaStr) => {
    if (!fechaStr) return "";
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="posiciones-container">
      <h2>Tabla de posiciones</h2>
      <div className="tabla-wrapper">
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

      {ultimaFecha && (
        <p className="ultima-actualizacion">
          Última actualización: {formatearFecha(ultimaFecha)}
        </p>
      )}
    </div>
  );
}
