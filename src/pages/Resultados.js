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

  fetch(`http://127.0.0.1:5000/partidos/categoria/${encodeURIComponent(categoria)}`)
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
            {partidos.map((partido) => (
            <div key={partido.id} className="partido-card">
                <p><strong>Fecha:</strong> {new Date(partido.fecha).toLocaleDateString()}</p>
                <p><strong>{partido.equipo_local}</strong> vs <strong>{partido.equipo_visitante}</strong></p>
                <p><strong>Resultado:</strong> {partido.resultado}</p>
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
