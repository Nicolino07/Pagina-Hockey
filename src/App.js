import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Fixture from "./pages/Fixture"; 
import Torneos from "./pages/Torneos";
import Resultados from "./pages/Resultados";
import Footer from "./components/Footer";

import Huemules from "./equipos/Huemules";
import Wiliches from "./equipos/Wiliches";
import Estudiantes from "./equipos/Estudiantes";

import PrimeraCaballeros from "./galeria/PrimeraCaballeros";
import PrimeraDamas from "./galeria/PrimeraDamas";
import Inferiores from "./galeria/Inferiores";

import "./App.css"; 

function App() {
  return (
    <div className="principal">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/resultados/:categoria" element={<Resultados />} />
          <Route path="/torneos" element={<Torneos />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/equipos/Huemules" element={<Huemules />} />
          <Route path="/equipos/Wiliches" element={<Wiliches />} />
          <Route path="/equipos/Estudiantes" element={<Estudiantes />} />
          <Route path="/galeria/PrimeraDamas" element={<PrimeraDamas />} />
          <Route path="/galeria/PrimeraCaballeros" element={<PrimeraCaballeros />} />
          <Route path="/galeria/Inferiores" element={<Inferiores />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
