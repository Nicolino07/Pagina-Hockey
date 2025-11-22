// Componente Fixture actualizado con los horarios de la imagen
import React, { useState } from "react";
import "./Fixture.css";

export default function Fixture() {
  const [categoria, setCategoria] = useState("mayores");

  const fixture = {
    mayores: [
      {
        liga: "Damas A",
        fechas: [
          {
            dia: "Jueves 20 Noviembre",
            juegos: [
              { hora: "21:30", local: "Williches", vs: "Eventos", ubicacion: "Municipal Nº3" },
              { hora: "22:30", local: "Vuriclub", vs: "Estudiantes", ubicacion: "Municipal Nº3" },
            ],
          },
          {
            dia: "Viernes 21 Noviembre",
            juegos: [
              { hora: "21:30", local: "Municipal 3", vs: "Williches", ubicacion: "Municipal Nº3" },
              { hora: "22:30", local: "Pehuenes", vs: "Eventos", ubicacion: "Municipal Nº3" },
            ],
          },
          {
            dia: "Domingo 23 Noviembre",
            juegos: [
              { hora: "19:00", local: "Hualas", vs: "Estudiantes", ubicacion: "Muni 3" },
              { hora: "21:00", local: "Vuriclub", vs: "Eventos", ubicacion: "Muni 3" },
              { hora: "22:00", local: "Hualas", vs: "Pehuenes", ubicacion: "Muni 3" },
            ],
          },
        ],
      },

      {
        liga: "Caballeros",
        fechas: [
          {
            dia: "Sábado 22 Noviembre",
            juegos: [
              { hora: "22:00", local: "El Bolsón", vs: "Huemules", ubicacion: "Muni 3" },
            ],
          },
          {
            dia: "Domingo 23 Noviembre",
            juegos: [
              { hora: "20:00", local: "Hualas", vs: "Estudiantes", ubicacion: "Muni 3" },
              { hora: "23:00", local: "Hualas", vs: "Williches", ubicacion: "Muni 3" },
            ],
          },
          {
            dia: "Lunes 24 Noviembre",
            juegos: [
              { hora: "10:00", local: "San Esteban", vs: "Huemules", ubicacion: "Paponia" },
              { hora: "11:00", local: "Lacar", vs: "Williches", ubicacion: "Paponia" },
              { hora: "12:00", local: "Muni 3 B", vs: "El Bolsón", ubicacion: "Paponia" },
              { hora: "17:00", local: "Lacar", vs: "El Bolsón", ubicacion: "Paponia" },
              { hora: "18:00", local: "Huemules", vs: "Williches", ubicacion: "Paponia" },
              { hora: "19:00", local: "Lacar", vs: "San Esteban", ubicacion: "Paponia" },
            ],
          },
        ],
      },

      {
        liga: "Damas B",
        fechas: [
          {
            dia: "Sábado 22 Noviembre",
            juegos: [
              { hora: "14:00", local: "Lacar", vs: "Huemules A", ubicacion: "New Lawn" },
              { hora: "15:00", local: "El Bolsón A", vs: "San Esteban A", ubicacion: "New Lawn" },
              { hora: "16:00", local: "El Bolsón B", vs: "San Esteban B", ubicacion: "New Lawn" },
              { hora: "17:00", local: "Lacar", vs: "Huemules B", ubicacion: "New Lawn" },
              { hora: "18:00", local: "El Bolsón A", vs: "Cohiues", ubicacion: "New Lawn" },
              { hora: "19:00", local: "El Bolsón B", vs: "Patagon", ubicacion: "New Lawn" },
            ],
          },
          {
            dia: "Lunes 24 Noviembre",
            juegos: [
              { hora: "13:00", local: "Lacar", vs: "San Esteban A", ubicacion: "Paponia" },
              { hora: "14:00", local: "Huemules A", vs: "Cohiues", ubicacion: "Paponia" },
              { hora: "15:00", local: "Bolsón A", vs: "Pehuenes", ubicacion: "Paponia" },
              { hora: "16:00", local: "LVG", vs: "Lacar", ubicacion: "Paponia" },
            ],
          },
        ],
      },
    ],

    menores: [],
  };

  return (
    <div className="fixture-container">
      <h2>Torneo Clausura 2025 - AHByLS</h2>

      <div className="botones-categorias">
        <button onClick={() => setCategoria("mayores")} className={categoria === "mayores" ? "activo" : ""}>
          Mayores
        </button>
        <button onClick={() => setCategoria("menores")} className={categoria === "menores" ? "activo" : ""}>
          Menores
        </button>
      </div>

      {fixture[categoria] && fixture[categoria].length > 0 ? (
        fixture[categoria].map((bloque, i) => (
          <div key={i} className="bloque-liga">
            <h2>{bloque.liga}</h2>
            {bloque.fechas.map((fecha, j) => (
              <div key={j} className="fecha-dia">
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
        ))
      ) : (
        <p className="sin-horarios">Horarios no disponibles</p>
      )}

      <div className="leyenda-fixture">⚠️ Los horarios y partidos están sujetos a cambios sin previo aviso.</div>
    </div>
  );
}
