import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CategoriaBar.css";

export default function CategoriaBar() {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const categorias = [
    "Damas A",
    "Damas B",
    "Caballeros A",
    "Sub-19",
    "Sub-16",
    "Sub-14",
    "Sub-12",
  ];

  const handleClick = (cat) => {
    navigate(`/resultados/${cat}`);
  };

  return (
    <div className="barra-categoria">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          style={{
            backgroundColor: categoria === cat ? "#0056b3" : "white",
            color: categoria === cat ? "white" : "black",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

