import CategoriaBar from "../components/CategoriaBar";
import "./Resultados.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Resultados() {
    const { categoria } = useParams();
    const [partidos, setPartidos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
  if (!categoria) return;

  setLoading(true);
  setError(null);

  fetch(`${process.env.REACT_APP_API_URL}/partidos/categoria/${encodeURIComponent(categoria)}`)

    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      console.log(data);
      setPartidos(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      setError(error.message);
      setLoading(false);
    });
}, [categoria]);


  return (
    <div className="resultados-container">
      {categoria && <CategoriaBar />}

      {categoria ? (
        <>
          <h3>Resultados <strong>{categoria}</strong></h3>

          {loading && <p>Cargando partidos...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && partidos.length === 0 && (
            <p>No hay partidos para esta categoría.</p>
          )}

          <div className="partidos-grid">
            {partidos.map((partido, index) => (
              <div key={index} className="partido-card">
                <p style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <span>{partido.equipo_local}</span>
                  <span>{partido.goles_local} - {partido.goles_visitante}</span>
                  <span>{partido.equipo_visitante}</span>
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Seleccioná una categoría para ver los resultados.</p>
      )}
    </div>
  );
}
