
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
            dia: "Sabado 8 Noviembre",
            juegos: [
              { hora: "09:30", local: "Williches", vs: "Vuriclub", ubicacion: "Polideportivo Dina Huapi" },
              { hora: "10:30", local: "Eventos", vs: "Esc. Municipal", ubicacion: "Polideportivo Dina Huapi" },
            ],
          },
          
          {
            dia: "Domingo 9 Noviembre",
            juegos: [
              { hora: "21:00", local: "Esc. Municipal", vs: "Vuriclub", ubicacion: "Gimnasio Municipal N°3" },
              { hora: "22:00", local: "Williches", vs: "Pehuenes A", ubicacion: "Gimnasio Municipal N°3"},
              { hora: "23:00", local: "Estudiante", vs: "Eventos", ubicacion: "Gimnasio Municipal N°3"  },
             
            ],
          },
    
        ],
        
      },
      {
        liga: "Caballeros",
        fechas: [
          
          {
            dia: "Sabado 8 Noviembre",
            juegos: [

              { hora: "11:30", local: "Esc. Municipal B", vs: "Williches", ubicacion: "Polideportivo Dina Huapi" },
              { hora: "12:30", local: "San Esteban", vs: "Huemules", ubicacion: "Polideportivo Dina Huapi" },
             
            ],
          },
          
          {
            dia: "Domingo 9 Noviembre",
            juegos: [
              { hora: "13:00", local: "El Bolson", vs: "Estudiantes", ubicacion: "El Bolson" },
              { hora: "16:00", local: "El Bolson", vs: "San Esteban", ubicacion: "El Bolson" },
         
            ],
          },
        ],
      },
      
      
      {
        liga: "Damas B",
        fechas: [
          
          {
            dia: "Sabado 8 Noviembre",
            juegos: [
              { hora: "15:00", local: "Patagon", vs: "Huemules A", ubicacion: "New Lawn" },
              { hora: "16:00", local: "La Vieja Guardia", vs: "Pehuenes A", ubicacion: "New Lawn" },
              { hora: "17:00", local: "Huemules B", vs: "San Esteban A", ubicacion: "New Lawn" },
              { hora: "18:00", local: "San Esteban B", vs: "Huemules A", ubicacion: "New Lawn" },
              { hora: "19:00", local: "Patagon", vs: "Cohiues", ubicacion: "New Lawn" },
             
            ],
          },
          
          {
            dia: "Domingo 9 Noviembre",
            juegos: [

              { hora: "11:00", local: "El Bolson A", vs: "Independiente", ubicacion: "El Bolson" },
              { hora: "12:00", local: "El Bolson B", vs: "San Esteban A", ubicacion: "El Bolson" },
              { hora: "14:00", local: "El Bolson A", vs: "San Esteban B", ubicacion: "El Bolson" },
              { hora: "15:00", local: "El Bolson B", vs: "Independiente", ubicacion: "El Bolson" },
              { hora: "17:00", local: "El Bolson A", vs: "San Esteban A", ubicacion: "El Bolson" },
              { hora: "18:00", local: "El Bolson B", vs: "San Esteban B", ubicacion: "El Bolson" },
             
            ],
          },
          
        ],
      },

    
    ],


    
    menores: [
      /*
      {
        liga: "Sub 12",
        fechas: [
          {
            dia: "Sábado 8 Noviembre",
            juegos: [

              { hora: "14:00", local: "Esc. Municipal", vs: "Pehuenes A", ubicacion: "Gimnasio Municipal N° 3" },
              { hora: "14:45", local: "Esc. Municipal", vs: "Pehuenes B", ubicacion: "Gimnasio Municipal N° 3" },
              { hora: "16:30", local: "Esc. Municipal", vs: "Pehuenes C", ubicacion: "Gimnasio Municipal N° 3" },
            ],
          },
          
          {
            dia: "Domingo 28 Septiembre",
            juegos: [
              { hora: "09:30", local: "Pehuenes A", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
              { hora: "10:15", local: "Pehuenes B", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
              { hora: "16:15", local: "Pehuenes C", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
              { hora: "17:00", local: "Pehuenes D", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
            
            ],
          },

        ],
        
      },
        */
      {
        liga: "Sub 14",
        fechas: [
          {
            dia: "Sábado 8 Noviembre",
            juegos: [
              { hora: "13:30", local: "San Esteban", vs: "Pehuenes", ubicacion: "Polideportivo Dina Huapi", estado: "¡Final!" },
              
            ],
          },
          /*
          {
            dia: "Domingo 28 Septiembre",
            juegos: [
              { hora: "11:15", local: "Pehuenes A", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
              { hora: "14:15", local: "Pehuenes B", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
            ],
            
          },
          */
        
        ],
      },
      
      {
        liga: "Sub 16",
        fechas: [
          {
            dia: "Sábado 8 Noviembre",
            juegos: [

              { hora: "14:30", local: "San Esteban", vs: "Pehuenes", ubicacion: "Polideportivo Dina Huapi", estado: "¡Final!" },
           
            ],
          },
          /*
          {
            dia: "Domingo 28 Septiembre",
            juegos: [
            { hora: "12:15", local: "Pehuenes A", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
            { hora: "15:15", local: "Pehuenes B", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
           
           
            ],
          },
          */
        ],
      },

      {
        liga: "Sub 19",
        fechas: [
          {
            dia: "Sábado 8 Noviembre",
            juegos: [

              { hora: "15:30", local: "San Esteban", vs: "Pehuenes", ubicacion: "Polideportivo Dina Huapi", estado: "¡Final!" },

            ],
          },
          /*
          {
            dia: "Domingo 29 Septiembre",
            juegos: [
              { hora: "18:00", local: "Independiente de Esquel", vs: "Esc. Municipal", ubicacion: "Esquel" },
              { hora: "13:15", local: "Pehuenes ", vs: "Vuriclub", ubicacion: "Polideportivo Roberto Vargas (Pehuenes)" },
            ],
          },
          */
        ],
      },

      
    ],

  
  };
  return (
    <div className="fixture-container">
      <h2>Torneo Clausura 2025 - AHByLS</h2>

      {/* Botones para cambiar entre menores y mayores */}
      <div className="botones-categorias">
        <button onClick={() => setCategoria("mayores")} className={categoria === "mayores" ? "activo" : ""}>
          Mayores
        </button>
        <button onClick={() => setCategoria("menores")} className={categoria === "menores" ? "activo" : ""}>
          Menores
        </button>
      </div>

      {/* Render dinámico según categoría */}
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

      <div className="leyenda-fixture">
        ⚠️ Los horarios y partidos están sujetos a cambios sin previo aviso.
      </div>
    </div>
  );
}

  
