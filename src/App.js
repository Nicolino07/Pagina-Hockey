import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Fixture from "./pages/Fixture"; 
import Torneos from "./pages/Torneos";

/*Importar equipos */
import Huemules from "./equipos/Huemules";
import Wiliches from "./equipos/Wiliches";
import Estudiantes from "./equipos/Estudiantes";
/* Importar Galerias */
import PrimeraCaballeros from "./galeria/PrimeraCaballeros";
import PrimeraDamas from "./galeria/PrimeraDamas";
import Inferiores from "./galeria/Inferiores";

import "./App.css"; 


function App() {
  return (
    <div className="principal">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/torneos" element={<Torneos />} />

          {/* Ruta submenu clubes*/}
          <Route path="/equipos/Huemules" element={<Huemules />} />
          <Route path="/equipos/Wiliches" element={<Wiliches/>} />
          <Route path="/equipos/Estudiantes" element={<Estudiantes />} />
          {/* rutas submenu galeria */}
          <Route path="/galeria/PrimeraDamas" element={<PrimeraDamas />} />
          <Route path="/galeria/PrimeraCaballeros" element={<PrimeraCaballeros/>} />
          <Route path="/galeria/Inferiores" element={<Inferiores />} />


          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
