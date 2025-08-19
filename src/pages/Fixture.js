import React from "react";
import "./Fixture.css";

export default function Fixture() {

  const fixture = [
    {
      liga: "Damas A",
      fechas: [
        {
          dia: "Sabado 23 agosto",
          juegos: [
            { hora: "10:00", local: "San Esteban A", vs: "Pehuenes A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "11:00", local: "Vuriclub", vs: "Williches", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "12:00", local: "Esc. Municipal", vs: "Eventos", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "16:00", local: "Vuriclub", vs: "Esc. Municipal", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "17:00", local: "San Esteban A", vs: "Williches", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "18:00", local: "Estudiantes", vs: "Pehuenes A", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
        {
          dia: "Domingo 24 agosto",
          juegos: [
            { hora: "10:30", local: "Hualas", vs: "Estudiantes", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "17:30", local: "Hualas", vs: "Eventos", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
      ],
    },
    {
      liga: "Caballeros",
      fechas: [
        {
          dia: "Sabado 23 agosto",
          juegos: [
            { hora: "13:00", local: "Williches", vs: "Esc. Municipal A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "14:00", local: "Estudiantes", vs: "Huemules", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "15:00", local: "San Esteban", vs: "Esc. Municipal B", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "19:00", local: "El Bolson", vs: "Esc. Municipal B", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "20:00", local: "Esc. Municipal A", vs: "Huemules", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
        {
          dia: "Domingo 24 agosto",
          juegos: [
            { hora: "12:30", local: "San Esteban", vs: "Lacar", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "13:30", local: "El Bolson", vs: "Williches", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "14:30", local: "Huemules", vs: "Hualas", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "18:30", local: "Lacar", vs: "Esc. Municipal A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "19:30", local: "Williches", vs: "Hualas", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "20:30", local: "El Bolson", vs: "Estudiantes", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
      ],
    },
    {
      liga: "Damas B",
      fechas: [
        {
          dia: "Sabado 23 agosto",
          juegos: [
            { hora: "16:00", local: "El Bolson B", vs: "Coihues", ubicacion: "New Lawn" },
            { hora: "17:00", local: "Patagon", vs: "San Esteban C", ubicacion: "New Lawn" },
            { hora: "18:00", local: "El Bolson B", vs: "Huemules B", ubicacion: "New Lawn" },
            { hora: "19:00", local: "Coihues", vs: "Pehuenes B", ubicacion: "New Lawn" },
          ],
        },
        {
          dia: "Domingo 24 agosto",
          juegos: [
            { hora: "09:30", local: "Pehuenes B", vs: "San Esteban B", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "11:30", local: "Lacar", vs: "El Bolson A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "15:30", local: "Lacar", vs: "Huemules A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "16:30", local: "El Bolson A", vs: "La Vieja Guardia", ubicacion: "Polideportivo Dina Huapi" },
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
