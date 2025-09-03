import React from "react";
import "./Fixture.css";

export default function Fixture() {

  const fixture = [
    {
      liga: "Damas A",
      fechas: [
        {
          dia: "Sabado 6 Septiembre",
          juegos: [
            { hora: "10:00", local: "Eventos", vs: "Pehuenes A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "13:00", local: "Williches", vs: "Esc. Municipal", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "16:00", local: "Williches", vs: "Pehuenes A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "17:00", local: "San Esteban A", vs: "Esc. Municipal", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "18:00", local: "Hualas", vs: "Eventos", ubicacion: "Polideportivo Dina Huapi", estado: "Pendiente" },
          ],
        },
        {
          dia: "Domingo 7 Septiembre",
          juegos: [
            { hora: "09:00", local: "Estudiantes", vs: "Vuriclub", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "14:00", local: "Hualas", vs: "Vuriclub", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "15:00", local: "Estudiantes", vs: "Eventos", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "18:00", local: "San Esteban A", vs: "Hualas", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
      ],
    },
    {
      liga: "Caballeros",
      fechas: [
        {
          dia: "Sabado 6 Septiembre",
          juegos: [
            { hora: "11:00", local: "El Bolson", vs: "Estudiantes", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "12:00", local: "Williches", vs: "Huemules", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "14:00", local: "Estudiantes", vs: "Esc. Municipal B", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "15:00", local: "Williches", vs: "El Bolson", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "19:00", local: "Williches", vs: "Hualas", ubicacion: "Polideportivo Dina Huapi", estado: "Pendiente" },
          ],
        },
        {
          dia: "Domingo 7 Septiembre",
          juegos: [
            { hora: "11:00", local: "Lacar", vs: "Esc. Municipal A", ubicacion: "Polideportivo Dina Huapi", estado: "Pendiente" },
            { hora: "12:00", local: "Hualas", vs: "Huemules", ubicacion: "Polideportivo Dina Huapi", estado: "Pendiente"},
            { hora: "16:00", local: "Lacar", vs: "Esc. Municipal B", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "17:00", local: "Hualas", vs: "Esc. Municipal A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "19:00", local: "San Esteban", vs: "Estudiantes", ubicacion: "Polideportivo Dina Huapi" },
          ],
        },
      ],
    },
    {
      liga: "Damas B",
      fechas: [
        {
          dia: "Sabado 6 Septiembre",
          juegos: [
            { hora: "09:00", local: "La Vieja Guardia", vs: "Huemules A", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "14:00", local: "Independiente", vs: "Patagon", ubicacion: "New Lawn" },
            { hora: "15:00", local: "Coihues", vs: "San Esteban B", ubicacion: "New Lawn" },
            { hora: "16:00", local: "Pehuenes B", vs: "Huemules B", ubicacion: "New Lawn" },
            { hora: "17:00", local: "Independiente", vs: "Coihues", ubicacion: "New Lawn" },
          ],
        },
        {
          dia: "Domingo 7 Septiembre",
          juegos: [
            { hora: "10:00", local: "Lacar", vs: "San Esteban C", ubicacion: "Polideportivo Dina Huapi" },
            { hora: "13:00", local: "Independiente", vs: "Lacar", ubicacion: "Polideportivo Dina Huapi" },
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
                    <div className="estado"> {partido.estado}</div>
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
