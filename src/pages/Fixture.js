import React from "react";
import "./Fixture.css";

export default function Fixture() {

  const fixture = [
    {
      liga: "Damas A - Fecha #1",
      fechas: [
        {
          dia: "Sabado 09 agosto",
          juegos: [
            { hora: "12:00", local: "Vuriclub", vs: "Pehunes", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "13:00", local: "Eventos", vs: "San Esteban", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "14:00", local: "Williches", vs: "Estudiantes", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "17:00", local: "Vuriclub", vs: "San Esteban", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "18:00", local: "Muni", vs: "Estudiantes", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "19:00", local: "Eventos", vs: "Williches", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
        {
          dia: "Domingo 10 agosto",
          juegos: [
            { hora: "11:30", local: "Hualas", vs: "Esc. Municipal", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "15:30", local: "Pehuenes", vs: "Hualas", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
      ],
    },
    {
      liga: "Caballeros - Fecha #1",
      fechas: [
        {
          dia: "Sabado 09 agosto",
          juegos: [
            { hora: "15:00", local: "Estudiantes", vs: "Williches", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "16:00", local: "Esc. Municipal A", vs: "Esc. Municipal B", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "20:00", local: "San Esteban", vs: "Esc. Municipal A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "21:00", local: "Huemules", vs: "Esc. Municipal B", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
        {
          dia: "Domingo 10 agosto",
          juegos: [
            { hora: "12:30", local: "Huemules", vs: "Lacar", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "13:30", local: "Esc. Municipal B", vs: "Hualas", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "14:30", local: "El Bolson", vs: "San Esteban", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "16:30", local: "Estudiantes", vs: "Hualas", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "17:30", local: "El Bolson", vs: "Lacar", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
      ],
    },
    {
      liga: "Damas B - Fecha #1",
      fechas: [
        {
          dia: "Sabado 09 agosto",
          juegos: [
            { hora: "10:00", local: "Patagon", vs: "Huemules B", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "11:00", local: "San Esteban B", vs: "San Esteban A", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
        {
          dia: "Domingo 10 agosto",
          juegos: [
            { hora: "09:30", local: "Pehuenes", vs: "Huemules A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "10:30", local: "Cohiues", vs: "La Vieja Guardia", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
      ],
    },
  ];

  return (
    <div className='fixture-container'>
      
      <h2>Torneo Clausura 2025 - AHByLS</h2>
      {fixture.map((bloque, i) => (
        <div key={i} className='bloque-liga'>
          <h2>{bloque.liga}</h2>
          {bloque.fechas.map((fecha, j) => (
            <div key={j} className='fecha-dia'>
              <h3>{fecha.dia}</h3>
              <ul>
                {fecha.juegos.map((partido, k) => (
                  <div key={k} className="tarjeta-partido">
                    <div className="versus">
                      <strong>{partido.hora}</strong> - {partido.local} vs {partido.vs}
                    </div>
                    <div className="ubicacion">📍 {partido.ubicacion}</div>
                  </div>

                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {/* Leyenda al final */}
        <div className="leyenda-fixture">
          ⚠️ Los horarios y partidos están sujetos a cambios sin previo aviso.
        </div>

    </div>

  
  );

  
}
