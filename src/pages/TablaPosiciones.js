import React, { useEffect, useState } from "react";
import "./TablaPosiciones.css";

export default function TablaPosiciones({ torneoId }) {
  const [posiciones, setPosiciones] = useState([]);
  const [ultimaFecha, setUltimaFecha] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/torneos/${torneoId}/posiciones`)
      .then(res => res.json())
      .then(data => {
        setPosiciones(data.posiciones || []);
        setUltimaFecha(data.ultima_fecha);
      })
      .catch(err => console.error(err));
  }, [torneoId]);

  // Formatear fecha como dd/mm
  const formatearFecha = (fechaIso) => {
    if (!fechaIso) return null;
    const fecha = new Date(fechaIso);
    return fecha.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit" });
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

      {/* 🔽 Mostrar fecha última actualización si existe */}
      {ultimaFecha && (
        <p className="ultima-fecha">
          Última actualización: {formatearFecha(ultimaFecha)}
        </p>
      )}
    </div>
  );
}
