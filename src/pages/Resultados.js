import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriaBar from "../components/CategoriaBar";
import "./Resultados.css";

export default function Resultados() {
  const { categoria } = useParams();
  const [partidos, setPartidos] = useState([]);
  const [fechasDisponibles, setFechasDisponibles] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [loading, setLoading] = useState(false);

  // Función para formatear fecha en español
  const formatearFecha = (fechaStr) => {
    const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    return new Date(fechaStr).toLocaleDateString('es-AR', opciones);
  };

  useEffect(() => {
    if (!categoria) return;

    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/partidos/categoria/${encodeURIComponent(categoria)}`)
      .then(res => res.json())
      .then(data => {
        setPartidos(data);
        
        // Extraer y ordenar fechas únicas (de más nueva a más antigua)
        const fechasUnicas = [...new Set(data.map(p => p.fecha))]
          .sort((a, b) => new Date(b) - new Date(a));
        
        setFechasDisponibles(fechasUnicas);
        setFechaSeleccionada(fechasUnicas[0] || "");
      })
      .finally(() => setLoading(false));
  }, [categoria]);

  return (
    <div className="resultados-container">
      {categoria && <CategoriaBar />}

      {loading && <p>Cargando...</p>}

      {!loading && fechasDisponibles.length > 0 && (
        <>
          <h3>Resultados {categoria}</h3>
          
          {/* Selector de fechas */}
          <div className="selector-fechas">
            <select
              value={fechaSeleccionada}
              onChange={(e) => setFechaSeleccionada(e.target.value)}
            >
              {fechasDisponibles.map((fecha) => (
                <option key={fecha} value={fecha}>
                  {formatearFecha(fecha)}
                </option>
              ))}
            </select>
          </div>

          {/* Listado de partidos */}
          <div className="partidos-grid">
            {partidos
              .filter(p => p.fecha === fechaSeleccionada)
              .map((partido) => (
                <div key={partido.id} className="partido-card">
                  <span className="equipo-local">{partido.equipo_local}</span>
                  <span className="marcador">
                    {partido.goles_local} - {partido.goles_visitante}
                  </span>
                  <span className="equipo-visitante">{partido.equipo_visitante}</span>
                </div>
              ))
            }
          </div>
        </>
      )}
    </div>
  );
}