import CategoriaBar from "../components/CategoriaBar";
import "./Resultados.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Resultados() {
    const { categoria } = useParams();
    const [partidos, setPartidos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fechasDisponibles, setFechasDisponibles] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

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
                
                // Extraer fechas únicas y ordenarlas (de más nueva a más vieja)
                const fechasUnicas = [...new Set(data.map(p => p.fecha))]
                    .sort((a, b) => new Date(b) - new Date(a));
                
                setFechasDisponibles(fechasUnicas);
                
                // Seleccionar la última fecha por defecto
                if (fechasUnicas.length > 0) {
                    setFechaSeleccionada(fechasUnicas[0]);
                }
                
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error.message);
                setLoading(false);
            });
    }, [categoria]);

    // Filtrar partidos por fecha seleccionada
    const partidosFiltrados = partidos.filter(p => p.fecha === fechaSeleccionada);

    // Formatear fecha para mostrar
    const formatearFecha = (fechaStr) => {
        const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
        return new Date(fechaStr).toLocaleDateString('es-AR', opciones);
    };

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

                    {fechasDisponibles.length > 0 && (
                        <div className="selector-fechas">
                            <select 
                                value={fechaSeleccionada || ''}
                                onChange={(e) => setFechaSeleccionada(e.target.value)}
                                className="select-fecha"
                            >
                                {fechasDisponibles.map((fecha, index) => (
                                    <option key={index} value={fecha}>
                                        {formatearFecha(fecha)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {fechaSeleccionada && (
                        <>
                            <h4 className="titulo-fecha">{formatearFecha(fechaSeleccionada)}</h4>
                            <div className="partidos-grid">
                                {partidosFiltrados.map((partido, index) => (
                                    <div key={index} className="partido-card">
                                        <span className="equipo-local">{partido.equipo_local}</span>
                                        <span className="marcador">{partido.goles_local} - {partido.goles_visitante}</span>
                                        <span className="equipo-visitante">{partido.equipo_visitante}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <p>Seleccioná una categoría para ver los resultados.</p>
            )}
        </div>
    );
}