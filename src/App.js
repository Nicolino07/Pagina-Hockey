import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Fechas from "./pages/Fechas"; 
import Posiciones from "./pages/Posiciones";

/*Importar equipos */
import Huemules from "./equipos/Huemules";
import Wiliches from "./equipos/Wiliches";
import Estudiantes from "./equipos/Estudiantes";
/* Importar Galerias */
import PrimeraCaballeros from "./galeria/PrimeraCaballeros";
import PrimeraDamas from "./galeria/PrimeraDamas";
import Sub12 from "./galeria/Sub12";

import "./App.css"; // esto importa los estilos



function App() {
  return (
    <div className="principal">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/fechas" element={<Fechas />} />
          <Route path="/posiciones" element={<Posiciones />} />

          {/* Ruta submenu clubes*/}
          <Route path="/equipos/Huemules" element={<Huemules />} />
          <Route path="/equipos/Wiliches" element={<Wiliches/>} />
          <Route path="/equipos/Estudiantes" element={<Estudiantes />} />
          {/* rutas submenu galeria */}
          <Route path="/galeria/PrimeraDamas" element={<PrimeraDamas />} />
          <Route path="/galeria/PrimeraCaballeros" element={<PrimeraCaballeros/>} />
          <Route path="/galeria/Sub12" element={<Sub12 />} />


          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
