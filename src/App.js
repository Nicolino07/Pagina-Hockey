import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Fechas from "./pages/Fechas"; 
import Galeria from "./pages/Galeria";
import Posiciones from "./pages/Posiciones";
import "./App.css"; // esto importa los estilos

function App() {
  return (
    <div className="principal">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/fechas" element={<Fechas />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/posiciones" element={<Posiciones />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
